import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: t("contact.toast.title"),
      description: t("contact.toast.description"),
    });

    setFormData({
      name: "",
      company: "",
      email: "",
      service: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const expectations = [
    t("contact.expectations.call"),
    t("contact.expectations.analysis"),
    t("contact.expectations.proposal"),
    t("contact.expectations.noPressure"),
  ];

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
              {t("contact.title")} <span className="text-gradient">{t("contact.titleHighlight")}</span>
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/70 leading-relaxed">
              {t("contact.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-6">
                {t("contact.getInTouch")}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {t("contact.getInTouchDescription")}
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-cyan" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{t("contact.email")}</h4>
                    <a
                      href="mailto:info@flownox.com"
                      className="text-muted-foreground hover:text-cyan transition-colors"
                    >
                      info@flownox.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-cyan" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{t("contact.phone")}</h4>
                    <a
                      href="tel:+353896564733"
                      className="text-muted-foreground hover:text-cyan transition-colors"
                    >
                      +353 89 656 4733
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-cyan" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {t("contact.location")}
                    </h4>
                    <p className="text-muted-foreground">
                      {t("contact.locationValue")}
                    </p>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="p-6 rounded-2xl bg-secondary/50 border border-border">
                <h4 className="font-display font-semibold text-foreground mb-4">
                  {t("contact.whatToExpect")}
                </h4>
                <ul className="space-y-3">
                  {expectations.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-cyan shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-2xl bg-card border border-border"
              >
                <h3 className="text-xl font-display font-semibold text-foreground mb-6">
                  {t("contact.form.title")}
                </h3>

                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        {t("contact.form.name")} *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t("contact.form.namePlaceholder")}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        {t("contact.form.company")}
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder={t("contact.form.companyPlaceholder")}
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      {t("contact.form.email")} *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t("contact.form.emailPlaceholder")}
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      {t("contact.form.serviceInterest")}
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">{t("contact.form.selectService")}</option>
                      <option value="ai-support">{t("contact.form.services.aiSupport")}</option>
                      <option value="booking">{t("contact.form.services.booking")}</option>
                      <option value="crm">{t("contact.form.services.crm")}</option>
                      <option value="invoicing">{t("contact.form.services.invoicing")}</option>
                      <option value="chatbot">{t("contact.form.services.chatbot")}</option>
                      <option value="custom">{t("contact.form.services.custom")}</option>
                      <option value="other">{t("contact.form.services.other")}</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      {t("contact.form.message")} *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t("contact.form.messagePlaceholder")}
                      rows={4}
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="accent"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      t("contact.form.sending")
                    ) : (
                      <>
                        {t("contact.form.submit")}
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    {t("contact.form.privacyNote")}{" "}
                    <a
                      href="/privacy"
                      className="text-cyan hover:underline"
                    >
                      {t("contact.form.privacyLink")}
                    </a>
                    .
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
