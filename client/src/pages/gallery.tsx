import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { galleryItems } from "@/lib/data";
import { format } from "date-fns";

export default function Gallery() {
  const { t, i18n } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">{t("nav.gallery")}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-square relative group">
                <img
                  src={item.image}
                  alt={i18n.language === "mr" ? item.titleMr : item.titleEn}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-4 text-white">
                  <h3 className="font-semibold">
                    {i18n.language === "mr" ? item.titleMr : item.titleEn}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {format(new Date(item.date), "PPP")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}