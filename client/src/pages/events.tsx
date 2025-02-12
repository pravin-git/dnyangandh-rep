import { useTranslation } from "react-i18next";
import { EventCard } from "@/components/event-card";
import { events } from "@/lib/data";

export default function Events() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">{t("nav.events")}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={{
            ...event,
            date: new Date(event.date)
          }} />
        ))}
      </div>
    </div>
  );
}