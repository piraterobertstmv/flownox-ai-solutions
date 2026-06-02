import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

export function ServicesPreview() {
  const { t } = useTranslation();

  const features = t("offer.features", { returnObjects: true }) as Array<{
    name: string;
    description: string;
  }>;

  return (
    <section id="what-we-build" className="py-24 lg:py-32 bg-background hairline">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
            {t("offer.label")}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-foreground mb-4 leading-tight">
            {t("offer.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("offer.subtitle")}
          </p>
        </motion.div>

        {/* Product card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl"
        >
          <div className="rounded-2xl border border-border bg-card shadow-lg overflow-hidden hover:border-accent/40 transition-colors duration-500">

            {/* Screenshot */}
            <div className="relative aspect-video lg:aspect-[21/9] overflow-hidden border-b border-border bg-secondary/30">
              <img
                src="/portal-screenshot.png"
                alt="Clinic Operations Portal"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />
              {/* Browser chrome overlay */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-secondary/80 backdrop-blur-sm border-b border-border/40 flex items-center gap-2 px-4">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-border" />
                  <div className="w-2.5 h-2.5 rounded-full bg-border" />
                  <div className="w-2.5 h-2.5 rounded-full bg-border" />
                </div>
                <div className="flex-1 max-w-xs mx-auto h-4 rounded bg-background/60 text-[10px] text-muted-foreground flex items-center justify-center font-mono">
                  portal.yourclinic.ie
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-8 lg:p-12">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-display font-black text-foreground mb-2">
                    {t("offer.cardTitle")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t("offer.portalCaption")}
                  </p>
                </div>
                <div className="shrink-0 bg-accent/8 border border-accent/20 px-6 py-4 rounded-xl text-right">
                  <div className="text-accent font-bold text-lg leading-tight">{t("offer.priceLine1")}</div>
                  <div className="text-accent/60 text-xs font-medium mt-1">{t("offer.priceLine2")}</div>
                </div>
              </div>

              {/* Features grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-10">
                {features.map((f, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="shrink-0 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent mt-0.5 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                        <path d="M2.5 8l3.5 3.5 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1 text-sm">{f.name}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer row */}
              <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <p className="text-sm text-muted-foreground italic">{t("offer.pricing")}</p>
                <Button variant="hero" size="lg" asChild>
                  <a
                    href="https://calendly.com/amoyavalls/15-min-discovery-call"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("offer.bookCall")}
                    <ArrowRight className="ml-1 w-4 h-4" />
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
