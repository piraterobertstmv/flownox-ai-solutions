import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

export function WhatWeBuildPricing() {
  const { t } = useTranslation();

  const tiers = [
    {
      id: "essential",
      key: "essential",
    },
    {
      id: "professional",
      key: "professional",
      isPopular: true,
    },
    {
      id: "enterprise",
      key: "enterprise",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-secondary/20 border-y border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            {t("whatWeBuildPage.pricing.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("whatWeBuildPage.pricing.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-card border rounded-3xl p-8 flex flex-col ${
                tier.isPopular 
                  ? "border-cyan border-t-8 shadow-glow-cyan md:-translate-y-4" 
                  : "border-border shadow-xl hover:border-border/80"
              }`}
            >
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan text-cyan-foreground px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                  {t(`whatWeBuildPage.pricing.tiers.${tier.key}.badge`)}
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                  {t(`whatWeBuildPage.pricing.tiers.${tier.key}.name`)}
                </h3>
                <p className="text-sm text-muted-foreground h-10">
                  {t(`whatWeBuildPage.pricing.tiers.${tier.key}.description`)}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl sm:text-5xl font-display font-bold text-foreground tracking-tight">
                    {t(`whatWeBuildPage.pricing.tiers.${tier.key}.price`)}
                  </span>
                </div>
                <div className="text-sm font-medium text-cyan uppercase tracking-widest">
                  {t(`whatWeBuildPage.pricing.tiers.${tier.key}.frequency`)}
                </div>
              </div>

              <div className="flex-grow space-y-4 mb-8">
                {/* We map over an array of 5 features */}
                {[0, 1, 2, 3, 4].map((featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/90">
                      {t(`whatWeBuildPage.pricing.tiers.${tier.key}.features.${featureIndex}`)}
                    </span>
                  </div>
                ))}
              </div>

              <Button 
                variant={tier.isPopular ? "accent" : "heroOutline"} 
                size="lg" 
                className="w-full mt-auto" 
                asChild
              >
                <a
                  href="https://calendly.com/amoyavalls/15-min-discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("whatWeBuildPage.pricing.cta")}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
