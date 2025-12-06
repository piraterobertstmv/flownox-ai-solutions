import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/sections/CTA";

const Blog = () => {
  const { t } = useTranslation();

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
              {t("blog.title")} <span className="text-gradient">{t("blog.titleHighlight")}</span>
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/70 leading-relaxed">
              {t("blog.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-20 h-20 rounded-2xl bg-cyan/10 flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-cyan" />
            </div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              {t("blog.comingSoon.title")}
            </h2>
            <p className="text-muted-foreground mb-8">
              {t("blog.comingSoon.description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              {t("blog.newsletter.title")}
            </h2>
            <p className="text-muted-foreground mb-8">
              {t("blog.newsletter.description")}
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t("blog.newsletter.placeholder")}
                className="flex-1 h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Button variant="accent" size="lg">
                {t("blog.newsletter.subscribe")}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      <CTA />
    </Layout>
  );
};

export default Blog;
