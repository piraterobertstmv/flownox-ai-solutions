import { motion, Variants } from "framer-motion";
import { ArrowRight, Tag, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function WhatWeBuildHero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-navy pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsla(187, 90%, 45%, 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, hsla(187, 90%, 45%, 0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight"
          >
            {t("whatWeBuildPage.hero.title")}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            {t("whatWeBuildPage.hero.subtitle")}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-6 mb-12 text-cyan font-medium"
          >
            <div className="flex items-center gap-2">
              <Tag className="w-5 h-5" />
              <span>{t("whatWeBuildPage.hero.pricing")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{t("whatWeBuildPage.hero.timeline")}</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button variant="accent" size="xl" asChild>
              <a
                href="https://calendly.com/amoyavalls/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("whatWeBuildPage.hero.cta")}
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
