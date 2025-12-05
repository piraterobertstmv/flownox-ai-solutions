import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Building2, Store, Briefcase, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const industries = [
  {
    icon: Building2,
    title: "Agencies",
    description:
      "Automate client onboarding, reporting, and project management workflows.",
  },
  {
    icon: Store,
    title: "Retail & E-commerce",
    description:
      "Streamline inventory, orders, and customer support at scale.",
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    description:
      "Handle scheduling, billing, and client communications effortlessly.",
  },
  {
    icon: Users,
    title: "SMBs",
    description:
      "Enterprise-level automation accessible for growing businesses.",
  },
];

export function UseCasesPreview() {
  return (
    <section className="py-20 lg:py-28 bg-navy text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsla(187, 90%, 45%, 0.5) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
          className="w-full h-full"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            Industries We <span className="text-cyan">Serve</span>
          </h2>
          <p className="text-lg text-primary-foreground/70">
            Tailored automation solutions for businesses across multiple
            sectors.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan/30 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center mb-4 group-hover:bg-cyan/20 transition-colors">
                <industry.icon className="w-6 h-6 text-cyan" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-2">
                {industry.title}
              </h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Button variant="hero" size="lg" asChild>
            <Link to="/use-cases">
              View All Use Cases
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
