import { motion } from "framer-motion";
import { CheckCircle, ClipboardCheck, LayoutDashboard, ListTodo, BellRing } from "lucide-react";
import { useTranslation } from "react-i18next";

const icons = [ClipboardCheck, LayoutDashboard, ListTodo, BellRing];

export function WhatWeBuildIncluded() {
  const { t } = useTranslation();
  const features = t("whatWeBuildPage.included.features", { returnObjects: true }) as any[];

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            {t("whatWeBuildPage.included.title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-8 lg:p-10 rounded-3xl border border-border hover:border-cyan/30 hover:shadow-glow transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan/10 flex items-center justify-center text-cyan mb-8 group-hover:bg-cyan group-hover:text-white transition-colors duration-300">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {feature.description}
                </p>
                <p className="text-muted-foreground/60 italic text-sm">
                  {feature.whyItMatters}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
