import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { 
  Linkedin, 
  Github, 
  Mail, 
  MapPin, 
  Hammer,
  ArrowRight
} from "lucide-react";

const About = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <SEO
        title="About Flownox — Our Story"
        description="Flownox is a software engineering studio that builds custom operations portals for physio and sports clinics across Ireland and Europe. Founded by Antonio Moya."
      />
      
      {/* SECTION 1 — Hero */}
      <section className="py-24 lg:py-32 bg-navy text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl lg:text-5xl font-display font-bold mb-8 leading-tight">
              {t("about.hero.title")}
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-3xl">
              {t("about.hero.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — The story */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy mb-12">
              {t("about.story.title")}
            </h2>
            <div className="prose prose-lg text-slate-600 space-y-8 max-w-none">
              <p>{t("about.story.p1")}</p>
              <p>{t("about.story.p2")}</p>
              <p>{t("about.story.p3")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — The founder */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy mb-16">
              {t("about.founder.title")}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -inset-4 bg-cyan/10 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src="/antonio.jpg" 
                  alt="Antonio Moya — Founder of Flownox" 
                  className="relative w-full aspect-[4/5] object-cover rounded-2xl shadow-2xl"
                />
              </motion.div>

              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-display font-bold text-navy mb-6">
                  {t("about.founder.name")}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {t("about.founder.bio")}
                </p>
                
                <div className="space-y-4 mb-10">
                  <div className="flex items-center gap-3 text-slate-600">
                    <MapPin className="w-5 h-5 text-cyan" />
                    <span>{t("about.founder.line1")}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <Hammer className="w-5 h-5 text-cyan" />
                    <span>{t("about.founder.line2")}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <a 
                    href="https://linkedin.com/in/amoyavalls" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white border border-slate-200 text-slate-400 hover:text-cyan hover:border-cyan hover:shadow-md transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://github.com/amoyavalls" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white border border-slate-200 text-slate-400 hover:text-cyan hover:border-cyan hover:shadow-md transition-all"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href="mailto:antonio@flownox.com" 
                    className="p-3 rounded-xl bg-white border border-slate-200 text-slate-400 hover:text-cyan hover:border-cyan hover:shadow-md transition-all"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Honest paragraph */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl lg:text-3xl font-display font-bold text-navy mb-8">
              {t("about.honest.title")}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed italic border-l-4 border-slate-100 pl-8">
              {t("about.honest.paragraph")}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Final CTA */}
      <section className="py-24 bg-cyan text-white overflow-hidden relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
              {t("about.finalCta.title")}
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
              {t("about.finalCta.subtitle")}
            </p>
            <Button 
              variant="secondary" 
              size="xl" 
              className="bg-white text-cyan hover:bg-slate-50 border-none shadow-xl"
              asChild
            >
              <a 
                href="https://calendly.com/amoyavalls/30min" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {t("about.finalCta.button")}
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-black/5 rounded-full blur-3xl" />
      </section>
    </Layout>
  );
};

export default About;

