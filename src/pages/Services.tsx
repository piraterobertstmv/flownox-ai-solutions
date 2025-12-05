import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MessageSquare,
  Calendar,
  Users,
  Receipt,
  Bot,
  Workflow,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/sections/CTA";

const services = [
  {
    icon: MessageSquare,
    title: "AI Customer Support",
    description:
      "Transform your customer service with intelligent chatbots that understand context, handle inquiries 24/7, and escalate complex issues to human agents when needed.",
    benefits: [
      "24/7 automated responses",
      "Multi-language support",
      "Seamless human handoff",
      "Sentiment analysis",
    ],
    includes: [
      "Custom chatbot design",
      "Integration with existing CRM",
      "Training & optimization",
      "Performance analytics",
    ],
  },
  {
    icon: Calendar,
    title: "Appointment Booking Automation",
    description:
      "Eliminate the back-and-forth of scheduling. Our system syncs calendars, sends automated reminders, and handles rescheduling effortlessly.",
    benefits: [
      "Zero double-bookings",
      "Automated reminders",
      "Calendar sync",
      "Self-service rescheduling",
    ],
    includes: [
      "Booking widget setup",
      "Calendar integrations",
      "Email/SMS notifications",
      "Custom availability rules",
    ],
  },
  {
    icon: Users,
    title: "CRM & Workflow Automation",
    description:
      "Streamline your customer relationships and internal processes. Automate data entry, lead scoring, follow-ups, and reporting.",
    benefits: [
      "Auto-updated records",
      "Lead scoring",
      "Task automation",
      "Smart notifications",
    ],
    includes: [
      "CRM setup & migration",
      "Workflow design",
      "Custom automations",
      "Team training",
    ],
  },
  {
    icon: Receipt,
    title: "Invoicing & Payments",
    description:
      "Automate your entire billing cycle from invoice generation to payment collection and reconciliation.",
    benefits: [
      "Auto-generated invoices",
      "Payment reminders",
      "Reconciliation",
      "Financial reporting",
    ],
    includes: [
      "Payment gateway setup",
      "Invoice templates",
      "Recurring billing",
      "Accounting integration",
    ],
  },
  {
    icon: Bot,
    title: "Website Chat & AI Widgets",
    description:
      "Engage website visitors with smart AI assistants that qualify leads, answer questions, and guide users through your sales funnel.",
    benefits: [
      "Higher conversion rates",
      "Lead qualification",
      "Visitor insights",
      "Proactive engagement",
    ],
    includes: [
      "Custom widget design",
      "AI training on your content",
      "Analytics dashboard",
      "A/B testing tools",
    ],
  },
  {
    icon: Workflow,
    title: "Custom Automation & Integrations",
    description:
      "Unique workflow challenges require unique solutions. We build custom automations tailored to your specific business processes.",
    benefits: [
      "Bespoke solutions",
      "Any platform integration",
      "Scalable architecture",
      "Ongoing support",
    ],
    includes: [
      "Requirements analysis",
      "Custom development",
      "API integrations",
      "Documentation & training",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/70 leading-relaxed">
              Comprehensive AI automation solutions designed to transform your
              business operations and drive measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 shadow-glow">
                    <service.icon className="w-8 h-8 text-navy" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Button variant="default" asChild>
                    <Link to="/contact">
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>

                <div
                  className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="p-6 rounded-2xl bg-card border border-border">
                    <h4 className="font-display font-semibold text-foreground mb-4">
                      Benefits
                    </h4>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-cyan shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 rounded-2xl bg-secondary/50 border border-border">
                    <h4 className="font-display font-semibold text-foreground mb-4">
                      What's Included
                    </h4>
                    <ul className="space-y-3">
                      {service.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-cyan shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </Layout>
  );
};

export default Services;
