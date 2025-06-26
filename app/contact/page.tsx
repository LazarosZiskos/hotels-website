import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Smartphone } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Ziskos Hotels in Paralia Katerinis",
  description:
    "Get in touch with Ziskos Hotels to ask about availability, make a reservation or get more information about your stay in Paralia Katerini, Greece.",
  keywords: [
    "Hotel contact Paralia Katerini",
    "Hotel Hellas contact",
    "Hotel GL contact",
    "Book hotel in Greece",
    "Hotel availability inquiry",
    "Contact Ziskos Hotels",
    "Family hotel Greece",
    "Hotel reservation form",
    "Vacation in Paralia",
    "Paralia Katerini hotels",
  ],
  metadataBase: new URL("https://www.ziskos-hotels.gr"),
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Ziskos Hotels | Hellas & GL",
    description:
      "Send us your questions or request availability through our contact form. We're here to help you plan the perfect stay in Paralia Katerinis.",
    url: "https://www.ziskos-hotels.gr/contact",
    siteName: "Ziskos Hotels",
    images: [
      {
        url: "/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Contact Ziskos Hotels",
      },
    ],
    locale: "en",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Ziskos Hotels | Hellas & GL",
    description:
      "Fill out our form to inquire about room availability, prices or general info about your holidays in Paralia Katerinis.",
    images: ["/og-cover.png"],
  },
};

export default function ContactPage() {
  const t = useTranslations("Contact");

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted to-background">
      <section className="py-10 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-6xl text-foreground mb-6">
              {t("title")}
            </h1>
            <p className="body-lg text-muted-foreground font-serif max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">
                  {t("form.title")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">{t("form.firstName")}</Label>
                    <Input
                      id="firstName"
                      placeholder={t("form.firstNamePlaceholder")}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">{t("form.lastName")}</Label>
                    <Input
                      id="lastName"
                      placeholder={t("form.lastNamePlaceholder")}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{t("form.message")}</Label>
                  <Textarea
                    id="message"
                    placeholder={t("form.messagePlaceholder")}
                    rows={5}
                  />
                </div>
                <Button className="w-full bg-primary text-black py-3 text-lg">
                  {t("form.send")}
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8 text-primary">
                  <ContactItem
                    icon={<Phone />}
                    title={t("contact.phone")}
                    value="+30 23510 62571"
                    href="tel:00302351062571"
                  />
                  <ContactItem
                    icon={<Mail />}
                    title={t("contact.email")}
                    value="info@hotel-gl.gr"
                    href="mailto:info@hotel-gl.gr"
                  />
                  <ContactItem
                    icon={<Smartphone />}
                    title={t("contact.chat")}
                    value={t("contact.textUs")}
                    href="tel:00306976103679"
                  />
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl py-12">
                <CardHeader>
                  <CardTitle className="text-card-foreground">
                    {t("locations.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <HotelLocation
                    name="Hotel Hellas"
                    address="Thrakis 1, Paralia Katerini Greece, 60100"
                  />
                  <HotelLocation
                    name="Hotel GL"
                    address="Thrakis 2, Paralia Katerini Greece, 60100"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#262626"
          fillOpacity="1"
          d="M0,256L60,261.3C120,267,240,277,360,277.3C480,277,600,267,720,229.3C840,192,960,128,1080,112C1200,96,1320,128,1380,144L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

function ContactItem({
  icon,
  title,
  value,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
}) {
  return (
    <div className="flex items-center space-x-4 mb-6">
      <Link
        href={href}
        target="_blank"
        className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
      >
        {icon}
      </Link>
      <div>
        <h3 className="text-lg font-heading font-light text-card-foreground">
          {title}
        </h3>
        <p className="text-muted-foreground">{value}</p>
      </div>
    </div>
  );
}

function HotelLocation({ name, address }: { name: string; address: string }) {
  return (
    <Link
      href="https://www.google.com/maps/dir//40.2684934,22.5962151"
      className="flex items-start space-x-4 hover:scale-105 transition-all duration-300"
      target="_blank"
    >
      <MapPin className="w-5 h-5 text-muted-foreground mt-1" />
      <div>
        <h4 className="font-heading font-medium text-card-foreground">
          {name}
        </h4>
        <p className="text-muted-foreground text-sm">{address}</p>
      </div>
    </Link>
  );
}
