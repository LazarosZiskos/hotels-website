import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hotel Hellas & Hotel GL | Ziskos Hotels",
  description:
    "Enjoy your stay at our 3-star hotels, Hotel Hellas and Hotel GL, located in an ideal location in Paralia Katerinis, near the beach. Ideal for families, couples and groups.",
  metadataBase: new URL("https://www.ziskos-hotels.gr"),
  alternates: {
    canonical: "https://www.ziskos-hotels.gr/",
  },
  openGraph: {
    title: "Ziskos Hotels | Hotel Hellas & Hotel GL",
    description:
      "Enjoy your holidays in Paralia Katerinis at Ziskos Hotels – two cozy 3-star hotels just 100m from the beach. Ideal for families, couples, and Balkan tourists.",
    url: "https://www.ziskos-hotels.gr/",
    siteName: "Ziskos Hotels",
    images: [
      {
        url: "/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Ziskos Hotels in Paralia Katerinis",
      },
    ],
    locale: "en",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ziskos Hotels | Hotel Hellas & Hotel GL",
    description:
      "Family-run 3-star hotels just 100m from the sea. Newly renovated rooms, Greek buffet & warm hospitality.",
    images: ["/og-cover.png"],
  },
  other: {
    keywords: [
      "Paralia Katerini",
      "Seaside hotel",
      "Greece holidays",
      "Hotel Hellas",
      "Hotel GL",
      "Ziskos Hotels",
      "Balkan tourism",
      "Family hotel",
      "Greek hospitality",
      "Affordable hotel Greece",
    ].join(", "),
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body
        className={`${poppins.variable} ${montserrat.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <div>{children}</div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
