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
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

export function ServicesPreview() {
  const { t } = useTranslation();

  const services = [
    {
      icon: MessageSquare,
      title: t("servicesPreview.services.support.title"),
      description: t("servicesPreview.services.support.description"),
    },
    {
      icon: Calendar,
      title: t("servicesPreview.services.booking.title"),
      description: t("servicesPreview.services.booking.description"),
    },
    {
      icon: Users,
      title: t("servicesPreview.services.crm.title"),
      description: t("servicesPreview.services.crm.description"),
    },
    {
      icon: Receipt,
      title: t("servicesPreview.services.invoicing.title"),
      description: t("servicesPreview.services.invoicing.description"),
    },
    {
      icon: Bot,
      title: "Website AI Widgets",
      description: "Smart assistants embedded in your site to engage and convert visitors.",
    },
    {
      icon: Workflow,
      title: "Custom Workflows",
      description: "Tailored automation solutions designed for your unique processes.",
    },
  ];

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
            {t("servicesPreview.title")} <span className="text-gradient">{t("servicesPreview.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("servicesPreview.subtitle")}
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
              {t("servicesPreview.viewAll")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
