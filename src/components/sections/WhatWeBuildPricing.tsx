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
            <div className="space-y-12 mb-12">
              {/* Setup Fee */}
              <div className="relative group">
                <div className="mb-2">
                  <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">{t("whatWeBuildPage.pricing.card.setup.label")}</span>
                </div>
                <div className="flex flex-col mb-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-cyan mb-1 leading-none">Starting from</span>
                    <div className="text-4xl sm:text-6xl font-display font-bold text-navy tracking-tight leading-none">
                      {t("whatWeBuildPage.pricing.card.setup.price")}
                    </div>
                  </div>
                  <div className="text-xs text-slate-400 font-medium uppercase tracking-widest mt-2">{t("whatWeBuildPage.pricing.card.setup.frequency")}</div>
                </div>
                <div className="bg-slate-50/50 rounded-2xl p-5 border border-slate-100 group-hover:bg-cyan/5 group-hover:border-cyan/10 transition-all duration-300">
                  <p className="text-slate-600 text-sm leading-relaxed flex gap-3">
                    <Check className="w-4 h-4 text-cyan flex-shrink-0 mt-0.5" />
                    <span>{t("whatWeBuildPage.pricing.card.setup.includes")}</span>
                  </p>
                </div>
              </div>

              {/* Monthly Fee */}
              <div className="relative group">
                <div className="mb-3">
                  <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">{t("whatWeBuildPage.pricing.card.monthly.label")}</span>
                </div>
                <div className="flex flex-col mb-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-cyan mb-1 leading-none">Starting from</span>
                    <div className="text-3xl sm:text-5xl font-display font-bold text-navy tracking-tight leading-none">
                      {t("whatWeBuildPage.pricing.card.monthly.price")}
                    </div>
                  </div>
                </div>
                <div className="bg-slate-50/50 rounded-2xl p-5 border border-slate-100 group-hover:bg-cyan/5 group-hover:border-cyan/10 transition-all duration-300">
                  <p className="text-slate-600 text-sm leading-relaxed flex gap-3">
                    <Check className="w-4 h-4 text-cyan flex-shrink-0 mt-0.5" />
                    <span>{t("whatWeBuildPage.pricing.card.monthly.includes")}</span>
                  </p>
                </div>
              </div>

              {/* Extras */}
              <div className="space-y-4 pt-8 border-t border-slate-100">
                <div className="flex items-center gap-4 text-navy font-semibold text-sm">
                  <div className="w-8 h-8 rounded-full bg-cyan/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-cyan" />
                  </div>
                  <span>Timeline: {t("whatWeBuildPage.pricing.card.timeline")}</span>
                </div>
                <div className="flex items-center gap-4 text-navy font-semibold text-sm">
                  <div className="w-8 h-8 rounded-full bg-cyan/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-cyan" />
                  </div>
                  <span>Guarantee: {t("whatWeBuildPage.pricing.card.guarantee")}</span>
                </div>
              </div>
            </div>

            <Button variant="accent" size="xl" className="w-full mb-6" asChild>
              <a
                href="https://calendly.com/amoyavalls/15-min-discovery-call"
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
