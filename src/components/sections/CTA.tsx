import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

export function CTA() {
  const { t } = useTranslation();

  return (
    <section className="py-24 lg:py-32 bg-cyan relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 border-t-2 border-l-2 border-white -translate-x-1/2 -translate-y-1/2 rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 border-b-2 border-r-2 border-white translate-x-1/4 translate-y-1/4 rounded-full" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-8">
            {t("cta.title")}
          </h2>

          <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-medium">
            {t("cta.subtitle")}
          </p>

          <div className="flex flex-col items-center justify-center gap-6">
            <Button 
              size="xl" 
              className="bg-navy hover:bg-navy/90 text-white border-transparent text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              asChild
            >
              <a
                href="https://calendly.com/amoyavalls/15-min-discovery-call"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("cta.bookCall")}
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
