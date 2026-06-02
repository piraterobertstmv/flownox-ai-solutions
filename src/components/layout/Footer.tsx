import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Mail, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  const { t } = useTranslation();

  const footerLinks = {
    company: [
      { name: t("footer.aboutUs"),   path: "/about" },
      { name: t("footer.caseStudy"), path: "/case-study" },
      { name: t("footer.blog"),      path: "/blog" },
    ],
    product: [
      { name: t("footer.customPortals"), path: "/what-we-build" },
    ],
    legal: [
      { name: t("footer.privacyPolicy"),  path: "/privacy" },
      { name: t("footer.termsOfService"), path: "/terms" },
    ],
  };

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img
                src="/logo-flownox.jpg"
                alt="Flownox"
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-white/55 text-sm leading-relaxed mb-8 max-w-xs">
              {t("footer.description")}
            </p>
            <div className="flex items-center gap-3">
              {[
                { href: "https://www.linkedin.com/company/automia-cloud/", Icon: Linkedin, label: "LinkedIn" },
                { href: "https://www.instagram.com/flownoxsolutions/",    Icon: Instagram, label: "Instagram" },
                { href: "mailto:info@flownox.com",                         Icon: Mail,      label: "Email" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/6 border border-white/10 flex items-center justify-center text-white/55 hover:text-white hover:bg-white/12 hover:border-white/20 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">
              {t("footer.company")}
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm text-white/60 hover:text-white transition-colors duration-150">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">
              {t("footer.product")}
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm text-white/60 hover:text-white transition-colors duration-150">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">
              {t("footer.legal")}
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm text-white/60 hover:text-white transition-colors duration-150">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Flownox. {t("footer.copyright")}
          </p>
          <p className="text-xs text-white/30">
            {t("footer.tagline")}
          </p>
        </div>
      </div>
    </footer>
  );
}
