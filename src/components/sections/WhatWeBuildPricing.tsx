import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

export function WhatWeBuildPricing() {
  const { t } = useTranslation();

  return (
    <section className="py-24 lg:py-32 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy">
            {t("whatWeBuildPage.pricing.title")}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-[500px] mx-auto bg-white rounded-3xl border-t-8 border-cyan shadow-xl overflow-hidden"
        >
          <div className="p-8 lg:p-12">
            <div className="space-y-10 mb-12">
              {/* Setup Fee */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-navy font-bold text-xl">{t("whatWeBuildPage.pricing.card.setup.label")}</span>
                  <div className="text-right">
                    <div className="text-3xl font-display font-bold text-navy">{t("whatWeBuildPage.pricing.card.setup.price")}</div>
                    <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">{t("whatWeBuildPage.pricing.card.setup.frequency")}</div>
                  </div>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed border-l-2 border-slate-100 pl-4">
                  Includes: {t("whatWeBuildPage.pricing.card.setup.includes")}
                </p>
              </div>

              {/* Monthly Fee */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-navy font-bold text-xl">{t("whatWeBuildPage.pricing.card.monthly.label")}</span>
                  <div className="text-3xl font-display font-bold text-navy">
                    {t("whatWeBuildPage.pricing.card.monthly.price")}
                  </div>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed border-l-2 border-slate-100 pl-4">
                  Includes: {t("whatWeBuildPage.pricing.card.monthly.includes")}
                </p>
              </div>

              {/* Extras */}
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3 text-navy font-medium text-sm">
                  <Check className="w-5 h-5 text-cyan" />
                  <span>Timeline: {t("whatWeBuildPage.pricing.card.timeline")}</span>
                </div>
                <div className="flex items-center gap-3 text-navy font-medium text-sm">
                  <Check className="w-5 h-5 text-cyan" />
                  <span>Guarantee: {t("whatWeBuildPage.pricing.card.guarantee")}</span>
                </div>
              </div>
            </div>

            <Button variant="accent" size="xl" className="w-full mb-6" asChild>
              <a
                href="https://calendly.com/amoyavalls/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("whatWeBuildPage.pricing.card.bookCall")}
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>

            <p className="text-center text-xs text-slate-400 font-medium">
              {t("whatWeBuildPage.pricing.card.scopeLine")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
