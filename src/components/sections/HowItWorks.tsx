import { motion } from "framer-motion";
import { Search, Wrench, Rocket, LineChart } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discover & Analyze",
    description:
      "We map your existing workflows, identify bottlenecks, and uncover automation opportunities.",
  },
  {
    icon: Wrench,
    number: "02",
    title: "Build & Customize",
    description:
      "Our team designs and builds custom AI automation tailored to your specific needs.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Deploy & Integrate",
    description:
      "Seamless integration with your existing tools and systems. Go live with confidence.",
  },
  {
    icon: LineChart,
    number: "04",
    title: "Monitor & Optimize",
    description:
      "Continuous refinement and support to ensure peak performance and ROI.",
  },
];

export function HowItWorks() {
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
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A simple, proven process to transform your operations with AI
            automation.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan/30 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
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
          </div>
        </div>
      </div>
    </section>
  );
}
