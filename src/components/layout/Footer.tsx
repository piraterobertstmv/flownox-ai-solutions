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
    <footer className="bg-background border-t border-white/5 text-foreground relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-32 bg-cyan/5 blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-4 group">
              <span className="font-display font-bold text-2xl tracking-tight text-foreground transition-colors">Flow</span>
              <span className="font-display font-bold text-2xl tracking-tight text-cyan">nox</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
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
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center group"
                  >
                    <span className="w-0 h-[1px] bg-cyan mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
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
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center group"
                  >
                    <span className="w-0 h-[1px] bg-cyan mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
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
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center group"
                  >
                    <span className="w-0 h-[1px] bg-cyan mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Flownox. {t("footer.copyright")}
            </p>
            <p className="text-muted-foreground text-sm">
              {t("footer.tagline")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
