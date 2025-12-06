import { motion } from "framer-motion";
import { Clock, ShieldCheck, TrendingUp, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

export function ValueProps() {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: Clock,
      title: t("valueProps.items.time.title"),
      description: t("valueProps.items.time.description"),
    },
    {
      icon: ShieldCheck,
      title: t("valueProps.items.reliability.title"),
      description: t("valueProps.items.reliability.description"),
    },
    {
      icon: TrendingUp,
      title: t("valueProps.items.growth.title"),
      description: t("valueProps.items.growth.description"),
    },
    {
      icon: Zap,
      title: t("valueProps.items.speed.title"),
      description: t("valueProps.items.speed.description"),
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            {t("valueProps.title")} <span className="text-gradient">{t("valueProps.titleHighlight")}</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("valueProps.subtitle")}
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-cyan/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 group-hover:shadow-glow transition-shadow duration-300">
                <benefit.icon className="w-7 h-7 text-navy" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
