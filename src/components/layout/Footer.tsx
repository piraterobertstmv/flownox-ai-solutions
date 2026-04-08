import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Mail, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  const { t } = useTranslation();

  const footerLinks = {
    company: [
      { name: t("footer.aboutUs"), path: "/about" },
      { name: t("footer.caseStudy"), path: "/#case-study" },
      { name: t("footer.blog"), path: "/blog" },
    ],
    product: [
      { name: t("footer.customPortals"), path: "/#what-we-build" },
    ],
    legal: [
      { name: t("footer.privacyPolicy"), path: "/privacy" },
      { name: t("footer.termsOfService"), path: "/terms" },
    ],
  };

  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img
                src="/logo-flownox.jpg"
                alt="Flownox Logo"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              {t("footer.description")}
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/automia-cloud/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/flownoxsolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@flownox.com"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">{t("footer.company")}</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-cyan transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">
              {t("footer.product")}
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-cyan transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">{t("footer.legal")}</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-cyan transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} Flownox. {t("footer.copyright")}
            </p>
            <p className="text-primary-foreground/50 text-sm">
              {t("footer.tagline")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
