import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="text-8xl font-display font-bold text-cyan mb-4">404</h1>
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-4">
          {t("notFound.title")}
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          {t("notFound.description")}
        </p>
        <Button variant="accent" size="lg" asChild>
          <Link to="/">
            <Home className="w-4 h-4 mr-2" />
            {t("notFound.backHome")}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
