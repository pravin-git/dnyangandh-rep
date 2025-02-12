import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { EventCard } from "@/components/event-card";
import type { Event } from "@shared/schema";

export default function Home() {
  const { t } = useTranslation();
  const { data: events } = useQuery<Event[]>({ 
    queryKey: ["/api/events"]
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              {t("home.hero")}
            </h1>
            <p className="text-xl mb-8 text-muted-foreground">
              {t("home.mission")}
            </p>
            <div className="flex gap-4">
              <Link href="/events">
                <Button size="lg">
                  {t("nav.events")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  {t("nav.contact")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">{t("nav.events")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events?.slice(0, 3).map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Images */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <img
              src="https://images.unsplash.com/photo-1623990815896-99b0d5fb3f41"
              alt="NGO Activity 1"
              className="rounded-lg object-cover aspect-square"
            />
            <img
              src="https://images.unsplash.com/photo-1535090467336-9501f96eef89"
              alt="NGO Activity 2"
              className="rounded-lg object-cover aspect-square"
            />
            <img
              src="https://images.unsplash.com/photo-1708488595656-ba4813e52f99"
              alt="NGO Activity 3"
              className="rounded-lg object-cover aspect-square hidden md:block"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
