import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Zap,
  Target,
  Heart,
  Lightbulb,
  Users,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/sections/CTA";

const values = [
  {
    icon: Target,
    title: "Impact-Driven",
    description:
      "Every automation we build is designed to create measurable, meaningful impact on your business operations.",
  },
  {
    icon: Heart,
    title: "Human-Centered",
    description:
      "Technology should empower people, not replace them. We build tools that free humans to do their best work.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We stay at the cutting edge of AI and automation technology to bring you the most effective solutions.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We see ourselves as an extension of your team, invested in your success for the long term.",
  },
];

const About = () => {
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
              About <span className="text-gradient">Flownox</span>
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/70 leading-relaxed">
              We're on a mission to make intelligent automation accessible to
              every business, helping teams focus on what truly matters.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Flownox was born from a simple observation: businesses of all
                  sizes spend countless hours on repetitive tasks that drain
                  resources and limit growth. We saw teams buried in data entry,
                  drowning in emails, and struggling to keep up with customer
                  demands.
                </p>
                <p>
                  We believed there had to be a better way. By combining
                  cutting-edge AI technology with deep understanding of business
                  workflows, we created automation solutions that actually work
                  — not just in theory, but in the real, messy world of business
                  operations.
                </p>
                <p>
                  Today, Flownox helps businesses across industries reclaim
                  their time, reduce errors, and scale their operations without
                  proportionally scaling their headaches.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="p-8 rounded-3xl bg-gradient-hero border border-cyan/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
                    <Zap className="w-8 h-8 text-navy" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-primary-foreground">
                      Our Mission
                    </h3>
                  </div>
                </div>
                <p className="text-primary-foreground/80 text-lg leading-relaxed">
                  To democratize AI automation, making enterprise-level
                  efficiency accessible to businesses of every size — so teams
                  can focus on creativity, strategy, and human connection.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6">
              Our Vision
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We envision a future where every business, regardless of size or
              industry, has access to intelligent automation that handles the
              mundane — freeing humans to do the meaningful work that only
              humans can do.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A world where small businesses compete on equal footing with
              enterprises, where creativity isn't bottlenecked by administrative
              tasks, and where work-life balance isn't a luxury but a reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Flownox.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-cyan/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-cyan" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-20 bg-navy text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-8">
              Let's discuss how Flownox can transform your business operations.
              Our team is ready to help you automate, scale, and save time.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <CTA />
    </Layout>
  );
};

export default About;
