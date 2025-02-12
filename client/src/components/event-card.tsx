import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type Event } from "@shared/schema";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  const { i18n } = useTranslation();
  const isMarathi = i18n.language === "mr";

  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative">
        <img
          src={event.images[0]}
          alt={isMarathi ? event.titleMr : event.titleEn}
          className="object-cover w-full h-full"
        />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-2">
          {isMarathi ? event.titleMr : event.titleEn}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-2">
          {format(new Date(event.date), "PPP")}
        </p>
        <p className="line-clamp-3">
          {isMarathi ? event.descriptionMr : event.descriptionEn}
        </p>
      </CardContent>
    </Card>
  );
}
