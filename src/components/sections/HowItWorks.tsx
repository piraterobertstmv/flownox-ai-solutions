import { motion } from "framer-motion";
import { Search, Wrench, Rocket, LineChart } from "lucide-react";
import { useTranslation } from "react-i18next";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export function HowItWorks() {
  const { t } = useTranslation();

  const steps = [
    {
      icon: Search,
      number: "01",
      title: t("howItWorks.steps.discover.title"),
      description: t("howItWorks.steps.discover.description"),
    },
    {
      icon: Wrench,
      number: "02",
      title: t("howItWorks.steps.build.title"),
      description: t("howItWorks.steps.build.description"),
    },
    {
      icon: Rocket,
      number: "03",
      title: t("howItWorks.steps.deploy.title"),
      description: t("howItWorks.steps.deploy.description"),
    },
    {
      icon: LineChart,
      number: "04",
      title: t("howItWorks.steps.monitor.title"),
      description: t("howItWorks.steps.monitor.description"),
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            {t("howItWorks.title")} <span className="text-gradient">{t("howItWorks.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("howItWorks.subtitle")}
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative text-center"
            >
              {/* Number Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-5xl font-display font-bold text-cyan/10">
                {step.number}
              </div>

              {/* Icon */}
              <div className="relative w-20 h-20 rounded-2xl bg-gradient-primary mx-auto mb-6 flex items-center justify-center shadow-glow z-10">
                <step.icon className="w-10 h-10 text-navy" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
