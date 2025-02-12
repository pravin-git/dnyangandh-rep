import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">{t("about.title")}</h1>
        
        <div className="prose prose-primary max-w-none">
          <p className="text-lg text-muted-foreground mb-6">
            {t("about.description")}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
            <img
              src="https://images.unsplash.com/photo-1528605248644-14dd04022da1"
              alt="Community Event"
              className="rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a"
              alt="Community Gathering"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
