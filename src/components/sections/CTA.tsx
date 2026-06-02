import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

export function CTA() {
  const { t } = useTranslation();

  return (
    <section className="py-24 lg:py-32 bg-gradient-dark relative overflow-hidden">

      {/* Emerald glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-accent/8 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(160,84%,34%,0.6) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(160,84%,34%,0.6) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-6">
            {t("cta.label")}
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white mb-6 leading-tight">
            {t("cta.title")}
          </h2>
          <p className="text-lg sm:text-xl text-white/60 mb-10 max-w-2xl leading-relaxed">
            {t("cta.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Button variant="darkHero" size="lg" asChild>
              <a
                href="https://calendly.com/amoyavalls/15-min-discovery-call"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("cta.bookCall")}
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>

          <p className="mt-6 text-sm text-white/35 font-medium">
            {t("cta.footnote")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
