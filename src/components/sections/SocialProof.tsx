import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function SocialProof() {
  const { t } = useTranslation();

  const metrics = [
    { value: t("socialProof.metrics.0.value"), description: t("socialProof.metrics.0.description") },
    { value: t("socialProof.metrics.1.value"), description: t("socialProof.metrics.1.description") },
    { value: t("socialProof.metrics.2.value"), description: t("socialProof.metrics.2.description") },
  ];

  return (
    <section className="py-16 lg:py-20 bg-background hairline">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-10"
        >
          {t("socialProof.label")}
        </motion.p>

        {/* Metrics row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-start gap-5"
            >
              <div className="w-px h-12 bg-accent shrink-0 mt-1" />
              <div>
                <div className="text-4xl sm:text-5xl font-display font-black text-foreground leading-none mb-2">
                  {m.value}
                </div>
                <div className="text-sm font-medium text-muted-foreground">
                  {m.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sub line + CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 pt-8 border-t border-border"
        >
          <p className="text-sm text-muted-foreground italic">
            {t("socialProof.subtext")}
          </p>
          <Link
            to="/case-study"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors shrink-0 group"
          >
            {t("socialProof.readMore")}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
