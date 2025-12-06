import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Building2,
  Store,
  Briefcase,
  Users,
  Stethoscope,
  Hotel,
  ArrowRight,
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/sections/CTA";

const UseCasesPage = () => {
  const { t } = useTranslation();

  const useCases = [
    {
      icon: Stethoscope,
      key: "healthcare",
    },
    {
      icon: Store,
      key: "ecommerce",
    },
    {
      icon: Building2,
      key: "agencies",
    },
    {
      icon: Briefcase,
      key: "realestate",
    },
    {
      icon: Users,
      key: "consulting",
    },
    {
      icon: Hotel,
      key: "hospitality",
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
              {t("useCases.title")} <span className="text-gradient">{t("useCases.titleHighlight")}</span>
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/70 leading-relaxed">
              {t("useCases.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {useCases.map((useCase, index) => {
              const results = t(`useCases.cases.${useCase.key}.results`, { returnObjects: true }) as string[];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                        <useCase.icon className="w-7 h-7 text-navy" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-display font-bold text-foreground">
                          {t(`useCases.cases.${useCase.key}.title`)}
                        </h2>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6">
                      {t(`useCases.cases.${useCase.key}.description`)}
                    </p>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-destructive/80 mb-2">
                          {t("useCases.challenge")}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {t(`useCases.cases.${useCase.key}.challenge`)}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-cyan mb-2">
                          {t("useCases.solution")}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {t(`useCases.cases.${useCase.key}.solution`)}
                        </p>
                      </div>
                    </div>

                    <Button variant="default" asChild>
                      <Link to="/contact">
                        {t("useCases.learnMore")}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>

                  <div
                    className={`space-y-4 ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    {/* Results Card */}
                    <div className="p-6 rounded-2xl bg-navy text-primary-foreground">
                      <div className="flex items-center gap-3 mb-4">
                        <TrendingUp className="w-5 h-5 text-cyan" />
                        <span className="text-lg font-semibold">
                          {t("useCases.results")}
                        </span>
                      </div>
                      <ul className="space-y-3">
                        {Array.isArray(results) && results.map((result, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-cyan shrink-0 mt-0.5" />
                            <span className="text-primary-foreground/90">
                              {result}
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

export default UseCasesPage;
