import { motion } from "framer-motion";
import { Clock, ShieldCheck, TrendingUp, Zap } from "lucide-react";
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

export function ValueProps() {
  const { t } = useTranslation();

  const cards = t("painPoints.cards", { returnObjects: true }) as Array<{ bold: string; detail: string }>;

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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground">
            {t("painPoints.title")}
          </h2>
        </motion.div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-card border-l-4 border-cyan rounded-r-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-lg font-bold text-foreground mb-4 leading-snug">
                {card.bold}
              </p>
              <p className="text-muted-foreground">
                {card.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
