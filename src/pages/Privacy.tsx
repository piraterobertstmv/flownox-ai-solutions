import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";

const Privacy = () => {
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
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-8">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <div className="prose prose-lg max-w-none">
              <div className="space-y-8 text-muted-foreground">
                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                    1. Information We Collect
                  </h2>
                  <p className="leading-relaxed mb-4">
                    We collect information you provide directly to us, such as
                    when you fill out a contact form, request a demo, or
                    communicate with us. This may include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Name and contact information</li>
                    <li>Company name and role</li>
                    <li>Email address and phone number</li>
                    <li>Information about your business needs</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                    2. How We Use Your Information
                  </h2>
                  <p className="leading-relaxed mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Respond to your inquiries and provide requested services</li>
                    <li>Send you relevant information about our services</li>
                    <li>Improve our website and services</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                    3. Information Sharing
                  </h2>
                  <p className="leading-relaxed">
                    We do not sell, trade, or otherwise transfer your personal
                    information to third parties without your consent, except as
                    required by law or to provide our services through trusted
                    partners who assist us in operating our website and
                    conducting our business.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                    4. Data Security
                  </h2>
                  <p className="leading-relaxed">
                    We implement appropriate security measures to protect your
                    personal information against unauthorized access, alteration,
                    disclosure, or destruction. However, no method of
                    transmission over the Internet is 100% secure.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                    5. Cookies
                  </h2>
                  <p className="leading-relaxed">
                    Our website may use cookies to enhance your experience. You
                    can choose to disable cookies through your browser settings,
                    though this may affect some functionality of our website.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                    6. Your Rights
                  </h2>
                  <p className="leading-relaxed mb-4">You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt-out of marketing communications</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                    7. Contact Us
                  </h2>
                  <p className="leading-relaxed">
                    If you have questions about this Privacy Policy, please
                    contact us at{" "}
                    <a
                      href="mailto:info@flownox.com"
                      className="text-cyan hover:underline"
                    >
                      info@flownox.com
                    </a>
                    .
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
