import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
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

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: MessageSquare,
      key: "support",
    },
    {
      icon: Calendar,
      key: "booking",
    },
    {
      icon: Users,
      key: "crm",
    },
    {
      icon: Receipt,
      key: "invoicing",
    },
    {
      icon: Bot,
      key: "chatbot",
    },
    {
      icon: Workflow,
      key: "custom",
    },
  ];

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
              {t("services.title")} <span className="text-gradient">{t("services.titleHighlight")}</span>
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/70 leading-relaxed">
              {t("services.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const features = t(`services.items.${service.key}.features`, { returnObjects: true }) as string[];
              
              return (
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
                      {t(`services.items.${service.key}.title`)}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {t(`services.items.${service.key}.description`)}
                    </p>
                    <Button variant="default" asChild>
                      <Link to="/contact">
                        {t("services.getStarted")}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>

                  <div
                    className={`${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="p-6 rounded-2xl bg-card border border-border">
                      <h4 className="font-display font-semibold text-foreground mb-4">
                        {t("services.features")}
                      </h4>
                      <ul className="space-y-3">
                        {Array.isArray(features) && features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-cyan shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
    </Layout>
  );
};

export default Services;
