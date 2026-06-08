import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/sections/CTA";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

const Blog = () => {
  const { t } = useTranslation();
  const posts = t("blog.posts", { returnObjects: true }) as BlogPost[];

  return (
    <Layout>
      <SEO
        title="Blog & Insights"
        description="Stay updated with the latest in clinic operations, admin automation, and no-show reduction strategies from Flownox."
      />
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-gradient-hero border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              {t("blog.title")} <span className="text-gradient">{t("blog.titleHighlight")}</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed">
              {t("blog.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog List Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {Array.isArray(posts) && posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-card border border-border p-6 rounded-2xl flex flex-col hover:border-cyan/30 hover:shadow-glow transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-2.5 py-0.5 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-[10px] font-bold uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-3 leading-snug group-hover:text-cyan transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/40">
                    <span className="text-xs text-muted-foreground/60">{post.readTime}</span>
                    <button className="text-xs font-bold text-cyan flex items-center gap-1 hover:text-cyan-light transition-colors group/btn">
                      {t("blog.readMore")}
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
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
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-secondary/20 border-t border-border/50">
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
                className="flex-1 h-12 px-4 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-cyan"
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
