import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";

const Terms = () => {
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
              Terms of Service
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <div className="prose prose-lg max-w-none">
              <div className="space-y-8 text-muted-foreground">
                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                    1. Acceptance of Terms
                  </h2>
                  <p className="leading-relaxed">
                    By accessing and using Flownox services, you accept and agree
                    to be bound by these Terms of Service. If you do not agree to
                    these terms, please do not use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                    2. Description of Services
                  </h2>
                  <p className="leading-relaxed">
                    Flownox provides AI automation and workflow optimization
                    services for businesses. Our services include but are not
                    limited to: AI customer support, appointment booking
                    automation, CRM automation, invoicing systems, website
                    chatbots, and custom workflow solutions.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                    3. User Responsibilities
                  </h2>
                  <p className="leading-relaxed mb-4">As a user, you agree to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide accurate information when using our services</li>
                    <li>Use our services only for lawful purposes</li>
                    <li>Not interfere with or disrupt our services</li>
                    <li>Maintain the confidentiality of your account credentials</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                    4. Intellectual Property
                  </h2>
                  <p className="leading-relaxed">
                    All content, features, and functionality of our services are
                    owned by Flownox and are protected by international copyright,
                    trademark, and other intellectual property laws. Custom
                    solutions developed for clients remain the property of
                    Flownox unless otherwise agreed in writing.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                    5. Payment Terms
                  </h2>
                  <p className="leading-relaxed">
                    Payment terms for our services will be specified in individual
                    service agreements. All fees are non-refundable unless
                    otherwise stated. We reserve the right to change our pricing
                    with reasonable notice.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                    6. Limitation of Liability
                  </h2>
                  <p className="leading-relaxed">
                    Flownox shall not be liable for any indirect, incidental,
                    special, consequential, or punitive damages resulting from
                    your use of or inability to use our services. Our total
                    liability shall not exceed the amount paid by you for our
                    services in the twelve months preceding the claim.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                    7. Service Availability
                  </h2>
                  <p className="leading-relaxed">
                    While we strive to maintain high availability, we do not
                    guarantee uninterrupted access to our services. We may suspend
                    or terminate services for maintenance, updates, or other
                    operational reasons.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                    8. Termination
                  </h2>
                  <p className="leading-relaxed">
                    Either party may terminate service agreements with appropriate
                    notice as specified in individual contracts. Upon termination,
                    your right to use our services will immediately cease.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                    9. Changes to Terms
                  </h2>
                  <p className="leading-relaxed">
                    We reserve the right to modify these terms at any time. We
                    will notify users of significant changes. Continued use of our
                    services after changes constitutes acceptance of the modified
                    terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                    10. Contact Information
                  </h2>
                  <p className="leading-relaxed">
                    For questions about these Terms of Service, please contact us
                    at{" "}
                    <a
                      href="mailto:legal@flownox.com"
                      className="text-cyan hover:underline"
                    >
                      legal@flownox.com
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

export default Terms;
