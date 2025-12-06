import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Privacy = () => {
  const { t } = useTranslation();

  const collectionItems = t("privacy.sections.collection.items", { returnObjects: true }) as string[];

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
              {t("privacy.title")} <span className="text-gradient">{t("privacy.titleHighlight")}</span>
            </h1>
            <p className="text-muted-foreground mb-8">
              {t("privacy.lastUpdated")}: {new Date().toLocaleDateString()}
            </p>

            <div className="prose prose-lg max-w-none">
              <div className="space-y-8 text-muted-foreground">
                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                    {t("privacy.sections.intro.title")}
                  </h2>
                  <p className="leading-relaxed">
                    {t("privacy.sections.intro.content")}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                    {t("privacy.sections.collection.title")}
                  </h2>
                  <p className="leading-relaxed mb-4">
                    {t("privacy.sections.collection.content")}
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    {Array.isArray(collectionItems) && collectionItems.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                    {t("privacy.sections.use.title")}
                  </h2>
                  <p className="leading-relaxed">
                    {t("privacy.sections.use.content")}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                    {t("privacy.sections.sharing.title")}
                  </h2>
                  <p className="leading-relaxed">
                    {t("privacy.sections.sharing.content")}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                    {t("privacy.sections.security.title")}
                  </h2>
                  <p className="leading-relaxed">
                    {t("privacy.sections.security.content")}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                    {t("privacy.sections.rights.title")}
                  </h2>
                  <p className="leading-relaxed">
                    {t("privacy.sections.rights.content")}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                    {t("privacy.sections.contact.title")}
                  </h2>
                  <p className="leading-relaxed">
                    {t("privacy.sections.contact.content")}{" "}
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

export default Privacy;
