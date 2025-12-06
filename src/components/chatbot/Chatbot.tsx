import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Calendar, Loader2, Bot } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { FLOWNOX_KNOWLEDGE_BASE, BOOKING_URL, BOOKING_TRIGGERS } from "./knowledgeBase";

// Add your OpenAI API key here or use environment variable
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY || "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";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export function Chatbot() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const previousLangRef = useRef(i18n.language);

  const isSpanish = i18n.language === "es";

  const welcomeMessage = isSpanish
    ? "¡Hola! 👋 Soy FlowNoxy, tu asistente virtual. ¿En qué puedo ayudarte hoy? Puedo responder preguntas sobre nuestros servicios de automatización con IA o ayudarte a agendar una demo gratuita."
    : "Hi! 👋 I'm FlowNoxy, your AI assistant. How can I help you today? I can answer questions about our AI automation services or help you book a free demo.";

  // Reset chat when language changes
  useEffect(() => {
    if (previousLangRef.current !== i18n.language) {
      previousLangRef.current = i18n.language;
      // Clear messages and show new welcome in new language
      setMessages([
        {
          id: "welcome-" + Date.now(),
          role: "assistant",
          content: welcomeMessage,
          timestamp: new Date(),
        },
      ]);
    }
  }, [i18n.language, welcomeMessage]);

  // Show welcome message when chat opens for the first time
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: "welcome",
          role: "assistant",
          content: welcomeMessage,
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen, welcomeMessage]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const detectBookingIntent = (text: string): boolean => {
    const lowerText = text.toLowerCase();
    return BOOKING_TRIGGERS.some((trigger) => lowerText.includes(trigger));
  };

  const generateResponse = async (userMessage: string): Promise<string> => {
    const hasBookingIntent = detectBookingIntent(userMessage);

    const systemPrompt = `You are FlowNoxy, a helpful and friendly virtual assistant for Flownox, an AI automation agency. 

Language: Respond in ${isSpanish ? "Spanish" : "English"}.

${hasBookingIntent ? `The user wants to book. Tell them to click the "Book Demo" button below.` : ""}

Knowledge Base:
${FLOWNOX_KNOWLEDGE_BASE}

CRITICAL FORMATTING RULES - YOU MUST FOLLOW THESE:
1. NEVER use markdown. No **, no *, no #, no bullet points, no numbered lists.
2. Write in plain text only.
3. Use short sentences. Keep them under 14 words.
4. Use simple words. A 10-year-old should understand.
5. Break up your response into short paragraphs.
6. Add a blank line between each paragraph.
7. Each paragraph should be 1-2 sentences max.
8. Aim for a Grade 3 reading level (Hemingway App standard).
9. Be warm and friendly. Use a conversational tone.
10. Keep total response under 100 words.

Example good response format:
"We help businesses save time with AI tools.

Our bots can answer customer questions 24/7.

This means you can focus on growing your business.

Want to learn more? Click the Book Demo button below!"

Now answer the user's question following ALL the rules above.`;

    try {
      const chatMessages: ChatMessage[] = [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage },
      ];

      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: chatMessages,
          temperature: 0.7,
          max_tokens: 500,
        }),
      });

      const data = await response.json();

      // Check for API errors
      if (data.error) {
        console.error("OpenAI API error:", data.error);
        throw new Error(data.error.message || "API error");
      }

      const generatedText = data.choices?.[0]?.message?.content;

      if (!generatedText) {
        throw new Error("No response generated");
      }

      return generatedText;
    } catch (error) {
      console.error("OpenAI API error:", error);
      return isSpanish
        ? "Lo siento, estoy teniendo problemas técnicos. Por favor, contacta directamente a info@flownox.com o llama al +353 89 656 4733."
        : "I'm sorry, I'm having technical difficulties. Please contact info@flownox.com directly or call +353 89 656 4733.";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    const response = await generateResponse(userMessage.content);

    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: response,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, assistantMessage]);
    setIsLoading(false);
  };

  const handleBookDemo = () => {
    window.open(BOOKING_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-primary shadow-glow flex items-center justify-center hover:scale-110 transition-transform ${
          isOpen ? "hidden" : ""
        }`}
        aria-label="Open chat"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-navy" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-4 sm:inset-auto sm:bottom-6 sm:right-6 z-50 sm:w-[360px] sm:h-[500px] md:w-[380px] md:h-[550px] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-3 sm:p-4 bg-navy text-primary-foreground border-b border-border shrink-0">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                  <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-navy" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">FlowNoxy</h3>
                  <p className="text-xs text-primary-foreground/70">
                    {isSpanish ? "Tu asistente virtual" : "Your AI assistant"}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 min-h-0">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] p-2.5 sm:p-3 rounded-2xl text-[13px] sm:text-sm leading-relaxed whitespace-pre-wrap ${
                      message.role === "user"
                        ? "bg-cyan text-navy rounded-br-md"
                        : "bg-secondary text-foreground rounded-bl-md"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-secondary text-foreground p-2.5 sm:p-3 rounded-2xl rounded-bl-md">
                    <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin text-cyan" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Book Demo Button */}
            <div className="px-3 sm:px-4 pb-2 shrink-0">
              <Button
                onClick={handleBookDemo}
                variant="accent"
                size="sm"
                className="w-full text-xs sm:text-sm"
              >
                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                {isSpanish ? "Agendar Demo Gratis" : "Book Free Demo"}
              </Button>
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-3 sm:p-4 border-t border-border shrink-0">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={
                    isSpanish
                      ? "Escribe tu mensaje..."
                      : "Type your message..."
                  }
                  className="flex-1 h-9 sm:h-10 px-3 sm:px-4 rounded-lg border border-input bg-background text-foreground text-[13px] sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  variant="accent"
                  size="icon"
                  disabled={isLoading || !input.trim()}
                  className="h-9 w-9 sm:h-10 sm:w-10 shrink-0"
                >
                  <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
