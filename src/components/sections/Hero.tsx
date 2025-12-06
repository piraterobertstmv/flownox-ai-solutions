import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Bot, Workflow } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan/5 rounded-full blur-3xl animate-float" />
        {/* Grid Pattern */}
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
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-cyan/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-cyan" />
            <span className="text-sm text-primary-foreground/80">
              {t("hero.badge")}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6"
          >
            <span className="text-gradient">{t("hero.headline1")}</span> {t("hero.headline2")}{" "}
            <br className="hidden sm:block" />
            {t("hero.headline3")}
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {t("hero.subheadline")}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="hero" size="xl" asChild>
              <a
                href="https://api.leadconnectorhq.com/widget/bookings/book-flownox-meeting"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("hero.bookDemo")}
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/services">{t("hero.exploreServices")}</Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto"
          >
            {[
              { value: "10-25", label: t("hero.stats.hoursSaved") },
              { value: "24/7", label: t("hero.stats.uptime") },
              { value: "90%", label: t("hero.stats.errorReduction") },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl font-display font-bold text-cyan mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-primary-foreground/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating Icons - Only on Desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute top-1/3 left-8 hidden lg:block"
        >
          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-cyan/20 flex items-center justify-center animate-float">
            <Bot className="w-8 h-8 text-cyan" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute top-1/2 right-8 hidden lg:block"
        >
          <div
            className="w-14 h-14 rounded-2xl bg-white/5 border border-cyan/20 flex items-center justify-center animate-float"
            style={{ animationDelay: "1s" }}
          >
            <Workflow className="w-7 h-7 text-cyan" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
