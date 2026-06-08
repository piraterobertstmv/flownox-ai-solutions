import { motion } from "framer-motion";
import { ArrowRight, MapPin, Users, Clock, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function CaseStudy() {
  const { t } = useTranslation();

  return (
    <Layout>
      <SEO 
        title="Case Study: Dublin Physio Clinic | 15 hrs saved/week"
        description="How Flownox helped a Dublin physio clinic save hours every week on admin — with a custom operations portal built in 2 weeks."
      />
      
      {/* SECTION 1 — Hero */}
      <section className="bg-navy py-24 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeIn} className="inline-block px-4 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-sm font-semibold mb-8">
              {t("caseStudy.badge")}
            </motion.div>
            <motion.h1 
              variants={fadeIn}
              className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-white mb-8 leading-tight"
            >
              {t("caseStudy.hero.title")}
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-xl sm:text-2xl text-white/80 leading-relaxed"
            >
              {t("caseStudy.hero.subtitle")}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — Overview stats bar */}
      <section className="bg-navy-light py-8 border-y border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <span className="text-cyan font-display font-bold text-2xl mb-1">{t("caseStudy.stats.admin")}</span>
            </div>
            <div className="flex flex-col items-center border-y border-white/5 md:border-y-0 md:border-x py-6 md:py-0">
              <span className="text-cyan font-display font-bold text-2xl mb-1">{t("caseStudy.stats.noShows")}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-cyan font-display font-bold text-2xl mb-1">{t("caseStudy.stats.timeline")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — The client */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-12">
              {t("caseStudy.client.title")}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="prose prose-lg text-muted-foreground max-w-none">
                <p>{t("caseStudy.client.description")}</p>
              </div>
              <div className="bg-card border border-border border-l-4 border-l-cyan p-8 rounded-r-2xl shadow-md">
                <h3 className="text-foreground font-bold text-lg mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan" />
                  Clinic Snapshot
                </h3>
                
                {/* Portal Preview */}
                <div className="mb-8 rounded-xl overflow-hidden shadow-lg border border-border">
                  <img 
                    src="/portal-screenshot.png" 
                    alt="Clinic Operations Portal" 
                    className="w-full h-auto"
                  />
                </div>

                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-cyan" />
                    {t("caseStudy.client.snapshot.location")}
                  </li>
                  <li className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-cyan" />
                    {t("caseStudy.client.snapshot.team")}
                  </li>
                  <li className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-cyan" />
                    {t("caseStudy.client.snapshot.patients")}
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-cyan" />
                    {t("caseStudy.client.snapshot.tools")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — The problem */}
      <section className="py-24 lg:py-32 bg-secondary/20 border-y border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-12">
              {t("caseStudy.problem.title")}
            </h2>
            <div className="space-y-8 text-xl text-muted-foreground leading-relaxed font-light italic">
              <p>{t("caseStudy.problem.p1")}</p>
              <p>{t("caseStudy.problem.p2")}</p>
              <p>{t("caseStudy.problem.p3")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — What we built */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-12">
              {t("caseStudy.solution.title")}
            </h2>
            <p className="text-xl text-muted-foreground mb-16 leading-relaxed">
              {t("caseStudy.solution.intro")}
            </p>
            
            <div className="space-y-12">
              <div className="border-t border-border/50 pt-12">
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">{t("caseStudy.solution.intake.title")}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{t("caseStudy.solution.intake.desc")}</p>
              </div>
              <div className="border-t border-border/50 pt-12">
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">{t("caseStudy.solution.reminders.title")}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{t("caseStudy.solution.reminders.desc")}</p>
              </div>
              <div className="border-t border-border/50 pt-12">
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">{t("caseStudy.solution.tasks.title")}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{t("caseStudy.solution.tasks.desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — The result */}
      <section className="py-24 lg:py-32 bg-cyan overflow-hidden relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white text-center mb-20 italic">
            {t("caseStudy.result.title")}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-3xl shadow-2xl text-center"
            >
              <div className="text-cyan font-display font-bold text-4xl mb-2">{t("caseStudy.result.card1.value")}</div>
              <div className="text-slate-900 font-bold text-lg mb-4">{t("caseStudy.result.card1.label")}</div>
              <div className="text-slate-500">{t("caseStudy.result.card1.sub")}</div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-3xl shadow-2xl text-center"
            >
              <div className="text-cyan font-display font-bold text-4xl mb-2">{t("caseStudy.result.card2.value")}</div>
              <div className="text-slate-900 font-bold text-lg mb-4">{t("caseStudy.result.card2.label")}</div>
              <div className="text-slate-500">{t("caseStudy.result.card2.sub")}</div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-3xl shadow-2xl text-center"
            >
              <div className="text-cyan font-display font-bold text-4xl mb-2">{t("caseStudy.result.card3.value")}</div>
              <div className="text-slate-900 font-bold text-lg mb-4">{t("caseStudy.result.card3.label")}</div>
              <div className="text-slate-500">{t("caseStudy.result.card3.sub")}</div>
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl sm:text-3xl lg:text-4xl text-white font-light italic leading-snug mb-8">
              {t("caseStudy.result.quote")}
            </p>
            <p className="text-white/80 font-bold tracking-wider">
              {t("caseStudy.result.author")}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7 — Final CTA */}
      <section className="py-24 lg:py-32 bg-navy relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-8">
              {t("caseStudy.final.title")}
            </h2>
            <p className="text-xl sm:text-2xl text-white/80 mb-12 max-w-2xl mx-auto">
              {t("caseStudy.final.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="xl" asChild>
                <a
                  href="https://calendly.com/amoyavalls/15-min-discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("caseStudy.final.cta")}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="xl" className="border-white/20 text-white hover:bg-white/10" asChild>
                <a href="mailto:info@flownox.com">
                  Email us directly
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
