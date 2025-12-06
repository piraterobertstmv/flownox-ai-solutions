import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Calendar, Loader2, Bot } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { FLOWNOX_KNOWLEDGE_BASE, BOOKING_URL, BOOKING_TRIGGERS } from "./knowledgeBase";

// Add your Google Gemini API key here or use environment variable
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "AIzaSyBgFGDZOThb5PqMpVXkNR7CA7_DN-Pd_sw";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export function Chatbot() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const isSpanish = i18n.language === "es";

  const welcomeMessage = isSpanish
    ? "¡Hola! 👋 Soy el asistente virtual de Flownox. ¿En qué puedo ayudarte hoy? Puedo responder preguntas sobre nuestros servicios de automatización con IA o ayudarte a agendar una demo gratuita."
    : "Hi! 👋 I'm the Flownox virtual assistant. How can I help you today? I can answer questions about our AI automation services or help you book a free demo.";

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

    const systemPrompt = `You are a helpful virtual assistant for Flownox, an AI automation agency. 
Your role is to:
1. Answer questions about Flownox services, pricing, and processes
2. Help users understand how AI automation can benefit their business
3. Guide users to book a demo when appropriate
4. Be friendly, professional, and concise

Language: Respond in ${isSpanish ? "Spanish" : "English"}.

${hasBookingIntent ? `The user seems interested in booking. Encourage them to book a demo and mention that they can click the "Book Demo" button below or visit: ${BOOKING_URL}` : ""}

Knowledge Base:
${FLOWNOX_KNOWLEDGE_BASE}

Important guidelines:
- Keep responses concise (2-3 paragraphs max)
- Be helpful and friendly
- If you don't know something specific, suggest contacting info@flownox.com
- When users want to book, remind them about the Book Demo button
- Highlight relevant benefits and results when discussing services`;

    try {
      // Try gemini-1.5-flash first, fallback to gemini-pro
      const models = ["gemini-1.5-flash", "gemini-pro"];
      let lastError: Error | null = null;

      for (const model of models) {
        try {
          const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                contents: [
                  {
                    parts: [
                      {
                        text: `${systemPrompt}\n\nUser message: ${userMessage}`,
                      },
                    ],
                  },
                ],
                generationConfig: {
                  temperature: 0.7,
                  topK: 40,
                  topP: 0.95,
                  maxOutputTokens: 500,
                },
              }),
            }
          );

          const data = await response.json();

          // Check for API errors
          if (data.error) {
            console.error(`Gemini API error (${model}):`, data.error);
            lastError = new Error(data.error.message || "API error");
            continue;
          }

          const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;

          if (generatedText) {
            return generatedText;
          }
        } catch (err) {
          console.error(`Error with model ${model}:`, err);
          lastError = err as Error;
        }
      }

      throw lastError || new Error("No response generated");
    } catch (error) {
      console.error("Gemini API error:", error);
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
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-primary shadow-glow flex items-center justify-center hover:scale-110 transition-transform ${
          isOpen ? "hidden" : ""
        }`}
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6 text-navy" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] h-[600px] max-h-[calc(100vh-100px)] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-navy text-primary-foreground border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                  <Bot className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Flownox Assistant</h3>
                  <p className="text-xs text-primary-foreground/70">
                    {isSpanish ? "Siempre disponible" : "Always available"}
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
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
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
                  <div className="bg-secondary text-foreground p-3 rounded-2xl rounded-bl-md">
                    <Loader2 className="w-5 h-5 animate-spin text-cyan" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Book Demo Button */}
            <div className="px-4 pb-2">
              <Button
                onClick={handleBookDemo}
                variant="accent"
                size="sm"
                className="w-full"
              >
                <Calendar className="w-4 h-4" />
                {isSpanish ? "Agendar Demo Gratis" : "Book Free Demo"}
              </Button>
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-border">
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
                  className="flex-1 h-10 px-4 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-cyan"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  variant="accent"
                  size="icon"
                  disabled={isLoading || !input.trim()}
                  className="h-10 w-10 shrink-0"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
