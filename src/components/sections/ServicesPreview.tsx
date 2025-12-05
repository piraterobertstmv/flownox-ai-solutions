import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Calendar,
  Users,
  Receipt,
  Bot,
  Workflow,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: MessageSquare,
    title: "AI Customer Support",
    description:
      "Intelligent chatbots that handle inquiries 24/7 with human-like responses.",
  },
  {
    icon: Calendar,
    title: "Appointment Booking",
    description:
      "Automated scheduling that syncs calendars and sends reminders.",
  },
  {
    icon: Users,
    title: "CRM Automation",
    description:
      "Streamline customer relationships with smart data management.",
  },
  {
    icon: Receipt,
    title: "Invoicing & Payments",
    description:
      "Automated billing workflows that reduce manual financial tasks.",
  },
  {
    icon: Bot,
    title: "Website AI Widgets",
    description:
      "Smart assistants embedded in your site to engage and convert visitors.",
  },
  {
    icon: Workflow,
    title: "Custom Workflows",
    description:
      "Tailored automation solutions designed for your unique processes.",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/50">
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
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive AI automation solutions tailored to your business
            needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-cyan/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center mb-4 group-hover:bg-cyan/20 transition-colors">
                <service.icon className="w-6 h-6 text-cyan" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
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
          <Button variant="default" size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
