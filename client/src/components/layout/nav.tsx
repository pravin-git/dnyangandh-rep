import { Link, useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Nav() {
  const { t, i18n } = useTranslation();
  const [location] = useLocation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "mr" : "en");
  };

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/events", label: t("nav.events") },
    { href: "/gallery", label: t("nav.gallery") },
    { href: "/about", label: t("nav.about") },
    { href: "/contact", label: t("nav.contact") }
  ];

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="font-bold text-2xl text-primary">Dnyangandh</a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a className={`hover:text-primary ${location === item.href ? "text-primary" : ""}`}>
                {item.label}
              </a>
            </Link>
          ))}
          <Button variant="outline" onClick={toggleLanguage}>
            {i18n.language === "en" ? "मराठी" : "English"}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a className={`text-lg ${location === item.href ? "text-primary" : ""}`}>
                    {item.label}
                  </a>
                </Link>
              ))}
              <Button variant="outline" onClick={toggleLanguage}>
                {i18n.language === "en" ? "मराठी" : "English"}
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
