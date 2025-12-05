import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Search,
  Wrench,
  Rocket,
  LineChart,
  ArrowRight,
  CheckCircle,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/sections/CTA";

const processSteps = [
  {
    icon: Search,
    number: "01",
    title: "Discover & Analyze",
    subtitle: "Understanding Your Business",
    description:
      "We start by diving deep into your existing workflows, systems, and pain points. Through discovery calls and process audits, we identify the highest-impact automation opportunities.",
    details: [
      "Comprehensive workflow audit",
      "Stakeholder interviews",
      "Bottleneck identification",
      "ROI opportunity analysis",
    ],
    duration: "Week 0",
  },
  {
    icon: Wrench,
    number: "02",
    title: "Build & Customize",
    subtitle: "Tailored Solutions",
    description:
      "Our team designs and builds custom AI automation solutions specifically for your needs. No cookie-cutter approaches — every system is tailored to your unique processes.",
    details: [
      "Custom solution architecture",
      "AI model training",
      "Integration development",
      "Quality assurance testing",
    ],
    duration: "Week 1",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Deploy & Integrate",
    subtitle: "Seamless Go-Live",
    description:
      "We handle the entire deployment process, ensuring seamless integration with your existing tools and minimal disruption to your operations.",
    details: [
      "Staged rollout strategy",
      "Team training sessions",
      "Documentation delivery",
      "Go-live support",
    ],
    duration: " Week 2",
  },
  {
    icon: LineChart,
    number: "04",
    title: "Monitor & Optimize",
    subtitle: "Continuous Improvement",
    description:
      "Our relationship doesn't end at deployment. We continuously monitor performance, gather feedback, and optimize your automation for maximum ROI.",
    details: [
      "Performance monitoring",
      "Regular optimization cycles",
      "Priority support access",
      "Quarterly business reviews",
    ],
    duration: "Ongoing",
  },
];

const faqs = [
  {
    question: "How long does the entire process take?",
    answer:
      "Most projects are completed within 4-8 weeks from kickoff to go-live, depending on complexity and scope.",
  },
  {
    question: "Do I need technical expertise on my team?",
    answer:
      "No. We handle all technical aspects and provide comprehensive training for your team to use the new systems.",
  },
  {
    question: "What if I need changes after deployment?",
    answer:
      "Our ongoing support includes regular optimization cycles. Additional changes can be made as part of our maintenance plan.",
  },
];

const HowItWorksPage = () => {
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
              How It <span className="text-gradient">Works</span>
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/70 leading-relaxed">
              A proven, structured process that takes you from workflow chaos to
              automated efficiency in weeks, not months.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute left-[2.5rem] top-full h-24 w-0.5 bg-gradient-to-b from-cyan/30 to-transparent" />
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Step Number & Icon */}
                  <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-start gap-4">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
                        <step.icon className="w-10 h-10 text-navy" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-cyan text-navy text-sm font-bold flex items-center justify-center">
                        {step.number}
                      </span>
                    </div>
                    <div className="lg:mt-4 text-sm text-muted-foreground">
                      {step.duration}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-5">
                    <div className="text-sm text-cyan font-medium mb-2">
                      {step.subtitle}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-4">
                      {step.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="lg:col-span-5">
                    <div className="p-6 rounded-2xl bg-card border border-border">
                      <h4 className="font-display font-semibold text-foreground mb-4">
                        What happens in this phase:
                      </h4>
                      <ul className="space-y-3">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-cyan shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
                Common Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-card border border-border"
                >
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-cyan shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="default" size="lg" asChild>
                <Link to="/contact">
                  Have More Questions?
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <CTA />
    </Layout>
  );
};

export default HowItWorksPage;
