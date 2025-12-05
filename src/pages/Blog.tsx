import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/sections/CTA";

const blogPosts = [
  {
    title: "5 Signs Your Business Needs AI Automation",
    excerpt:
      "Discover the key indicators that suggest your business is ready to embrace AI-powered workflow automation.",
    category: "Insights",
    readTime: "5 min read",
    date: "Dec 1, 2024",
  },
  {
    title: "The ROI of Customer Support Automation",
    excerpt:
      "A deep dive into the financial benefits of implementing AI chatbots and support automation systems.",
    category: "Case Study",
    readTime: "8 min read",
    date: "Nov 25, 2024",
  },
  {
    title: "How to Prepare Your Team for Automation",
    excerpt:
      "Best practices for introducing AI automation to your organization while maintaining team morale and productivity.",
    category: "Guide",
    readTime: "6 min read",
    date: "Nov 18, 2024",
  },
  {
    title: "Automation Trends to Watch in 2025",
    excerpt:
      "Our predictions for the most impactful AI and automation trends that will shape business operations next year.",
    category: "Trends",
    readTime: "7 min read",
    date: "Nov 10, 2024",
  },
  {
    title: "Small Business Automation: Where to Start",
    excerpt:
      "A practical guide for small business owners looking to implement their first automation workflows.",
    category: "Guide",
    readTime: "10 min read",
    date: "Nov 3, 2024",
  },
  {
    title: "The Human Side of AI: Balancing Automation and Employment",
    excerpt:
      "Exploring how businesses can leverage AI while creating opportunities for their workforce.",
    category: "Insights",
    readTime: "6 min read",
    date: "Oct 28, 2024",
  },
];

const Blog = () => {
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
              Blog & <span className="text-gradient">Resources</span>
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/70 leading-relaxed">
              Insights, guides, and best practices for business automation and
              AI-powered workflows.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-cyan/30 hover:shadow-lg transition-all duration-300 flex flex-col">
                  {/* Meta */}
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-cyan/10 text-cyan text-xs font-medium">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-cyan transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground">
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-cyan group-hover:gap-2 transition-all">
                      Read more
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
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
              Stay Updated
            </h2>
            <p className="text-muted-foreground mb-8">
              Get the latest automation insights and tips delivered to your
              inbox. No spam, just valuable content.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Button variant="accent" size="lg">
                Subscribe
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
