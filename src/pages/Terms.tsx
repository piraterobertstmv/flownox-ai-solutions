import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Terms = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4">
              {t("terms.title")} <span className="text-gradient">{t("terms.titleHighlight")}</span>
            </h1>
            <p className="text-muted-foreground mb-8">
              {t("terms.lastUpdated")}: {new Date().toLocaleDateString()}
            </p>

            <div className="prose prose-lg max-w-none">
              <div className="space-y-8 text-muted-foreground">
                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                    {t("terms.sections.intro.title")}
                  </h2>
                  <p className="leading-relaxed">
                    {t("terms.sections.intro.content")}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                    {t("terms.sections.services.title")}
                  </h2>
                  <p className="leading-relaxed">
                    {t("terms.sections.services.content")}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                    {t("terms.sections.obligations.title")}
                  </h2>
                  <p className="leading-relaxed">
                    {t("terms.sections.obligations.content")}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                    {t("terms.sections.intellectual.title")}
                  </h2>
                  <p className="leading-relaxed">
                    {t("terms.sections.intellectual.content")}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                    {t("terms.sections.liability.title")}
                  </h2>
                  <p className="leading-relaxed">
                    {t("terms.sections.liability.content")}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                    {t("terms.sections.contact.title")}
                  </h2>
                  <p className="leading-relaxed">
                    {t("terms.sections.contact.content")}{" "}
                    <a
                      href="mailto:info@flownox.com"
                      className="text-cyan hover:underline"
                    >
                      info@flownox.com
                    </a>
                  </p>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
