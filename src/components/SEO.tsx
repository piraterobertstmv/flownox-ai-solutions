import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
}

const BASE_URL = "https://www.flownox.com";
const DEFAULT_IMAGE = "https://www.flownox.com/logo-flownox.jpg";

export const SEO = ({ title, description, image }: SEOProps) => {
  const location = useLocation();
  const canonicalUrl = `${BASE_URL}${location.pathname === "/" ? "" : location.pathname}`;

  const defaultTitle = "Flownox — Custom Operations Portals for Physio & Sports Clinics";
  const defaultDescription =
    "Flownox builds custom operations portals for physiotherapy and sports clinics. Patient intake, appointment tracking, reminders and staff tools — live in 2 weeks. Based in Ireland.";

  const pageTitle = title ? `${title} | Flownox` : defaultTitle;
  const pageDescription = description || defaultDescription;
  const pageImage = image || DEFAULT_IMAGE;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />
    </Helmet>
  );
};

