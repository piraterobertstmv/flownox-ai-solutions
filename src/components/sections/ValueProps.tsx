import { motion } from "framer-motion";
import { Clock, ShieldCheck, TrendingUp, Zap } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Save 5-15 Hours/Week",
    description:
      "Automate repetitive tasks and reclaim your time for high-value work.",
  },
  {
    icon: ShieldCheck,
    title: "Cut Manual Errors",
    description:
      "AI precision eliminates human mistakes in data entry and processing.",
  },
  {
    icon: TrendingUp,
    title: "Scale With Ease",
    description:
      "Handle 10x the workload without hiring additional staff.",
  },
  {
    icon: Zap,
    title: "Work 24/7",
    description:
      "Your automation never sleeps, serving customers around the clock.",
  },
];

export function ValueProps() {
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
            Why Choose <span className="text-gradient">Flownox</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            Transform your business operations with intelligent automation that
            delivers real results.
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
