import { motion } from "framer-motion";
import { XCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export function WhatWeBuildWhatNot() {
  const { t } = useTranslation();
  const items = t("whatWeBuildPage.whatNot.items", { returnObjects: true }) as string[];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy mb-4">
              {t("whatWeBuildPage.whatNot.title")}
            </h2>
          </motion.div>

          <div className="space-y-8">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 items-start"
              >
                <div className="mt-1 flex-shrink-0">
                  <XCircle className="w-6 h-6 text-slate-300" />
                </div>
                <p className="text-xl text-slate-600 font-medium">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
