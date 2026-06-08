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
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan/5 rounded-full blur-[100px] animate-float" />
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
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
          {/* Headline */}
          <motion.h1
            variants={itemVariants as any}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight mb-6 tracking-tight"
          >
            {t("hero.headline")}
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={itemVariants as any}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed font-light"
          >
            {t("hero.subheadline")}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants as any}
            className="flex flex-col items-center gap-6"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
                <a
                  href="https://calendly.com/amoyavalls/15-min-discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("hero.bookCall")}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto" asChild>
                <Link to="/what-we-build">{t("hero.whatWeBuild")}</Link>
              </Button>
            </div>
            
            <Link 
              to="/case-study" 
              className="group flex items-center gap-2 text-cyan font-semibold hover:text-cyan/80 transition-colors"
            >
              {t("hero.readCaseStudy")}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Global Authority Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 pt-10 border-t border-white/5 relative z-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
            <div className="flex flex-col items-center justify-center p-6 rounded-2xl glass-card">
              <div className="text-4xl font-display font-bold text-cyan mb-2">{t("hero.stats.workflows")}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">{t("hero.stats.workflowsLabel")}</div>
            </div>
            <div className="flex flex-col items-center justify-center p-6 rounded-2xl glass-card">
              <div className="text-4xl font-display font-bold text-cyan mb-2">{t("hero.stats.hours")}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">{t("hero.stats.hoursLabel")}</div>
            </div>
            <div className="flex flex-col items-center justify-center p-6 rounded-2xl glass-card">
              <div className="text-4xl font-display font-bold text-cyan mb-2">{t("hero.stats.retention")}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">{t("hero.stats.retentionLabel")}</div>
            </div>
          </div>
        </motion.div>

        {/* Floating Icons - Only on Desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute top-1/3 left-8 hidden lg:block"
        >
          <div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center animate-float shadow-glow-cyan">
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
            className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center animate-float shadow-glow-cyan"
            style={{ animationDelay: "1s" }}
          >
            <Workflow className="w-7 h-7 text-cyan" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
