import { motion } from "framer-motion";
import { PhoneCall, Code, Rocket } from "lucide-react";
import { useTranslation } from "react-i18next";

export function HowItWorks() {
  const { t } = useTranslation();

  const steps = [
    {
      icon: PhoneCall,
      title: t("howItWorks.steps.0.title"),
      description: t("howItWorks.steps.0.description"),
    },
    {
      icon: Code,
      title: t("howItWorks.steps.1.title"),
      description: t("howItWorks.steps.1.description"),
    },
    {
      icon: Rocket,
      title: t("howItWorks.steps.2.title"),
      description: t("howItWorks.steps.2.description"),
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground">
            {t("howItWorks.title")}
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-cyan/20 via-cyan/40 to-cyan/20" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="text-center group"
              >
                {/* Icon Container */}
                <div className="relative w-32 h-32 mx-auto mb-8">
                  <div className="absolute inset-0 bg-cyan/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
                  <div className="relative w-full h-full rounded-full bg-card border-2 border-cyan/20 flex items-center justify-center shadow-lg group-hover:border-cyan group-hover:shadow-glow transition-all duration-300">
                    <step.icon className="w-12 h-12 text-cyan group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                <h3 className="text-xl font-display font-bold text-foreground mb-4 px-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed px-2">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
