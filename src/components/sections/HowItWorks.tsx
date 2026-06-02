import { motion } from "framer-motion";
import { PhoneCall, Code, Rocket } from "lucide-react";
import { useTranslation } from "react-i18next";

const ICONS = [PhoneCall, Code, Rocket];

export function HowItWorks() {
  const { t } = useTranslation();

  const steps = (t("howItWorks.steps", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>).map((s, i) => ({ ...s, Icon: ICONS[i] }));

  return (
    <section className="py-24 lg:py-32 bg-secondary/40 hairline overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl mb-20"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
            {t("howItWorks.label")}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-foreground leading-tight">
            {t("howItWorks.title")}
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">

          {/* Connector (desktop) */}
          <div className="hidden lg:block absolute top-6 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px bg-border" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.14, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Step indicator */}
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-12 h-12 rounded-full bg-background border-2 border-border flex items-center justify-center shrink-0 shadow-sm">
                  <span className="text-sm font-display font-black text-accent">{String(i + 1).padStart(2, "0")}</span>
                </div>
              </div>

              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-5">
                <step.Icon className="w-5 h-5" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-display font-bold text-foreground mb-3 leading-snug">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
