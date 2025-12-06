import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

export function CTA() {
  const { t } = useTranslation();

  const handleOpenChatbot = () => {
    window.dispatchEvent(new CustomEvent("openChatbot"));
  };

  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 border border-cyan/20 mb-6">
            <Sparkles className="w-4 h-4 text-cyan" />
            <span className="text-sm text-foreground font-medium">
              {t("cta.badge")}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            {t("cta.title")}
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            {t("cta.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="accent" size="xl" asChild>
              <a
                href="https://api.leadconnectorhq.com/widget/bookings/book-flownox-meeting"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("cta.bookDemo")}
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="xl" onClick={handleOpenChatbot}>
              <MessageCircle className="w-5 h-5" />
              {t("cta.learnMore")}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
