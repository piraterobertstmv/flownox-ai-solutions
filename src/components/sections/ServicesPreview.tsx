import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

export function ServicesPreview() {
  const { t } = useTranslation();

  const features = t("offer.features", { returnObjects: true }) as Array<{ name: string; description: string }>;

  return (
    <section id="what-we-build" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            {t("offer.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("offer.subtitle")}
          </p>
        </motion.div>

        {/* Feature Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card rounded-3xl border-2 border-border shadow-2xl overflow-hidden hover:border-cyan/50 transition-colors duration-500">
            {/* Screenshot Header */}
            <div className="relative aspect-video lg:aspect-[21/9] overflow-hidden border-b border-border">
              <img 
                src="/portal-screenshot.png" 
                alt="Clinic Operations Portal Interface"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            </div>
            
            <div className="p-8 lg:p-12">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-4">
                    {t("offer.cardTitle")}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {t("offer.portalCaption")}
                  </p>
                </div>
                <div className="bg-cyan/10 px-6 py-3 rounded-2xl border border-cyan/20">
                  <div className="text-cyan font-bold text-lg text-center md:text-left">Starting from €1,500 setup</div>
                  <div className="text-cyan/60 text-xs font-medium">Built in 2 weeks</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan/10 flex items-center justify-center text-cyan group-hover:bg-cyan group-hover:text-white transition-colors duration-300">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">
                        {feature.name}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-8">
                <p className="text-sm font-medium text-muted-foreground italic">
                  {t("offer.pricing")}
                </p>
                <Button variant="accent" size="lg" className="w-full sm:w-auto" asChild>
                  <a
                    href="https://calendly.com/amoyavalls/15-min-discovery-call"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("offer.bookCall")}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
