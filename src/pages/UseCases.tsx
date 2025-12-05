import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Building2,
  Store,
  Briefcase,
  Users,
  Stethoscope,
  GraduationCap,
  ArrowRight,
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/sections/CTA";

const useCases = [
  {
    icon: Building2,
    title: "Agencies",
    subtitle: "Marketing, Creative & Digital Agencies",
    problem:
      "Agencies juggle multiple clients, repetitive onboarding, manual reporting, and scattered communication across projects.",
    solution:
      "Flownox automates client onboarding workflows, generates automated performance reports, and centralizes communication with AI-powered project management.",
    outcomes: [
      "50% faster client onboarding",
      "Automated weekly/monthly reports",
      "Unified client dashboard",
      "Reduced administrative overhead",
    ],
    stat: { value: "60%", label: "Time saved on reporting" },
  },
  {
    icon: Store,
    title: "Retail & E-commerce",
    subtitle: "Online Stores & Multi-channel Retailers",
    problem:
      "Managing inventory, processing orders, handling customer inquiries, and tracking shipments across multiple channels is overwhelming.",
    solution:
      "Our automation handles inventory sync, order processing, customer support chatbots, and shipment tracking notifications automatically.",
    outcomes: [
      "Real-time inventory updates",
      "Automated order fulfillment",
      "24/7 customer support bot",
      "Proactive shipping notifications",
    ],
    stat: { value: "40%", label: "Reduction in support tickets" },
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    subtitle: "Consultants, Lawyers, Accountants",
    problem:
      "Billable hour tracking, appointment scheduling, document management, and client follow-ups consume valuable time.",
    solution:
      "Flownox automates scheduling, time tracking, invoice generation, and client communication workflows for service professionals.",
    outcomes: [
      "Automated appointment booking",
      "Smart time tracking",
      "Auto-generated invoices",
      "Scheduled follow-up sequences",
    ],
    stat: { value: "15+", label: "Hours saved per week" },
  },
  {
    icon: Users,
    title: "SMBs",
    subtitle: "Small & Medium Businesses",
    problem:
      "Limited resources mean wearing multiple hats. Manual processes don't scale, and hiring isn't always an option.",
    solution:
      "Enterprise-level automation made accessible. Automate the tasks that slow you down without the enterprise price tag.",
    outcomes: [
      "Scalable without hiring",
      "Affordable automation",
      "Quick implementation",
      "Immediate ROI",
    ],
    stat: { value: "3x", label: "Productivity increase" },
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    subtitle: "Clinics, Practices & Health Services",
    problem:
      "Patient scheduling, reminders, follow-ups, and administrative tasks take time away from patient care.",
    solution:
      "HIPAA-conscious automation for appointment management, patient reminders, intake forms, and communication workflows.",
    outcomes: [
      "Reduced no-shows",
      "Automated patient reminders",
      "Digital intake forms",
      "Streamlined follow-ups",
    ],
    stat: { value: "35%", label: "Reduction in no-shows" },
  },
  {
    icon: GraduationCap,
    title: "Education",
    subtitle: "Schools, Training Centers & EdTech",
    problem:
      "Enrollment management, student communication, assignment tracking, and administrative tasks are time-intensive.",
    solution:
      "Automate enrollment workflows, student notifications, grade tracking, and parent communication with intelligent systems.",
    outcomes: [
      "Streamlined enrollment",
      "Automated notifications",
      "Progress tracking",
      "Parent communication portal",
    ],
    stat: { value: "50%", label: "Admin time reduction" },
  },
];

const UseCasesPage = () => {
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
              Use Cases & <span className="text-gradient">Industries</span>
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/70 leading-relaxed">
              See how businesses across different industries are transforming
              their operations with Flownox automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                      <useCase.icon className="w-7 h-7 text-navy" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-display font-bold text-foreground">
                        {useCase.title}
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        {useCase.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-destructive/80 mb-2">
                        The Challenge
                      </h4>
                      <p className="text-muted-foreground">{useCase.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-cyan mb-2">
                        The Solution
                      </h4>
                      <p className="text-muted-foreground">{useCase.solution}</p>
                    </div>
                  </div>

                  <Button variant="default" asChild>
                    <Link to="/contact">
                      Discuss Your Needs
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>

                <div
                  className={`space-y-4 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  {/* Stat Card */}
                  <div className="p-6 rounded-2xl bg-navy text-primary-foreground">
                    <div className="flex items-center gap-3 mb-2">
                      <TrendingUp className="w-5 h-5 text-cyan" />
                      <span className="text-sm text-primary-foreground/70">
                        Key Result
                      </span>
                    </div>
                    <div className="text-4xl font-display font-bold text-cyan mb-1">
                      {useCase.stat.value}
                    </div>
                    <div className="text-primary-foreground/80">
                      {useCase.stat.label}
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div className="p-6 rounded-2xl bg-card border border-border">
                    <h4 className="font-display font-semibold text-foreground mb-4">
                      Expected Outcomes
                    </h4>
                    <ul className="space-y-3">
                      {useCase.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-cyan shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            {outcome}
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

export default UseCasesPage;
