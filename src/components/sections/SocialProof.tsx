import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
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

const testimonials = [
  {
    quote:
      "Flownox transformed our customer support. We now handle 3x more inquiries with the same team size.",
    author: "Sarah Chen",
    role: "Operations Director",
    company: "TechScale Inc.",
  },
  {
    quote:
      "The ROI was immediate. We saved 20+ hours per week on manual data entry alone.",
    author: "Marcus Williams",
    role: "CEO",
    company: "GrowthPath Agency",
  },
  {
    quote:
      "Professional, efficient, and truly understood our workflow challenges. Highly recommend.",
    author: "Emily Rodriguez",
    role: "Founder",
    company: "Bloom Retail",
  },
];

export function SocialProof() {
  const { t } = useTranslation();

  const metrics = [
    { value: "500+", label: t("socialProof.stats.hoursSaved") },
    { value: "98%", label: t("socialProof.stats.satisfaction") },
    { value: "99.9%", label: t("socialProof.stats.uptime") },
    { value: "10x", label: t("socialProof.stats.roi") },
  ];

  return (
    <section className="py-20 lg:py-28 bg-secondary/50">
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
            {t("socialProof.title")} <span className="text-gradient">{t("socialProof.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("socialProof.subtitle")}
          </p>
        </motion.div>

        {/* Metrics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 rounded-2xl bg-card border border-border"
            >
              <div className="text-3xl sm:text-4xl font-display font-bold text-cyan mb-2">
                {metric.value}
              </div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 rounded-2xl bg-card border border-border hover:border-cyan/20 transition-colors"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-cyan text-cyan"
                  />
                ))}
              </div>
              <div className="relative mb-4">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-cyan/10" />
                <p className="text-foreground leading-relaxed relative z-10">
                  "{testimonial.quote}"
                </p>
              </div>
              <div>
                <div className="font-semibold text-foreground">
                  {testimonial.author}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
