import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export function ValueProps() {
  const { t } = useTranslation();

  const cards = t("painPoints.cards", { returnObjects: true }) as Array<{
    number: string;
    bold: string;
    detail: string;
  }>;

  return (
    <section className="py-24 lg:py-32 bg-secondary/40 hairline">
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
            {t("painPoints.label")}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-foreground leading-tight">
            {t("painPoints.title")}
          </h2>
        </motion.div>

        {/* Pain-point rows */}
        <div className="space-y-0 divide-y divide-border">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="py-10 lg:py-12 grid grid-cols-1 lg:grid-cols-[80px_1fr] gap-6 lg:gap-12 group"
            >
              {/* Big number */}
              <div className="text-5xl lg:text-6xl font-display font-black text-accent/30 group-hover:text-accent/50 transition-colors duration-300 leading-none pt-1 select-none">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="max-w-2xl">
                <p className="text-xl lg:text-2xl font-display font-bold text-foreground mb-3 leading-snug">
                  {card.bold}
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {card.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
