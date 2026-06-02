import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const item = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-hero">

      {/* Subtle emerald tint blob — low opacity, no movement */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/4 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >

          {/* Badge */}
          <motion.div variants={item} className="mb-8">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Physio &amp; Sports Clinics
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl lg:text-7xl font-display font-black text-foreground leading-[1.04] mb-6"
          >
            {t("hero.headline")}
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={item}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            {t("hero.subheadline")}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row items-start gap-4 mb-10">
            <Button variant="hero" size="lg" asChild>
              <a
                href="https://calendly.com/amoyavalls/15-min-discovery-call"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("hero.bookCall")}
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/what-we-build">
                {t("hero.whatWeBuild")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Trust line */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {[
              t("hero.trust1"),
              t("hero.trust2"),
              t("hero.trust3"),
            ].map((item, i) => (
              <span key={i} className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                <svg className="w-4 h-4 text-accent shrink-0" fill="none" viewBox="0 0 16 16">
                  <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {item}
              </span>
            ))}
          </motion.div>

          {/* Case study link */}
          <motion.div variants={item} className="mt-8">
            <Link
              to="/case-study"
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-accent transition-colors group"
            >
              {t("hero.readCaseStudy")}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  );
}
