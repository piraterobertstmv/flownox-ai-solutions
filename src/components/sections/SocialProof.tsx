import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Quote, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function SocialProof() {
  const { t } = useTranslation();

  const metrics = [
    { value: t("socialProof.metrics.0.value"), description: t("socialProof.metrics.0.description") },
    { value: t("socialProof.metrics.1.value"), description: t("socialProof.metrics.1.description") },
    { value: t("socialProof.metrics.2.value"), description: t("socialProof.metrics.2.description") },
  ];

  return (
    <section id="case-study" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground max-w-3xl mx-auto">
            {t("socialProof.title")}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-card/40 border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden backdrop-blur-md hover:border-cyan/30 transition-colors duration-500">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            
            <div className="flex flex-col gap-12">
              {/* Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                {metrics.map((metric, index) => (
                  <div key={index} className="border-l-4 border-cyan pl-6">
                    <div className="text-3xl sm:text-4xl font-display font-bold text-white mb-1">
                      {metric.value}
                    </div>
                    <div className="text-sm sm:text-base text-cyan/80 font-medium">
                      {metric.description}
                    </div>
                  </div>
                ))}
              </div>

              {/* Subtext & CTA */}
              <div className="pt-8 border-t border-white/5 flex flex-col items-center gap-6">
                <p className="text-sm text-cyan/60 font-medium">
                  {t("socialProof.subtext")}
                </p>
                <Link 
                  to="/case-study"
                  className="inline-flex items-center gap-2 text-white font-semibold hover:text-cyan transition-colors group"
                >
                  {t("hero.readCaseStudy")}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
