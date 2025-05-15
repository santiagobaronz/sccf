import type { Metadata } from "next";
import "../assets/globals.css";
import { Inter } from "next/font/google";
import { ViewTransitions } from 'next-view-transitions';
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";

export const metadata: Metadata = {
  title: "SCCF - Sociedad Colombiana de Ciencias Fisicas",
  description: "Este es el sitio web de la Sociedad Colombiana de Ciencias Fisicas, donde podras encontrar información sobre la sociedad, sus eventos y actividades.",
  keywords: [
    "SCCF",
    "Sociedad Colombiana de Ciencias Fisicas",
    "Ciencias Fisicas",
    "Colombia",
    "Sociedad",
    "Eventos",
    "Actividades",
    "Organización",
    "Universidad Distrital Francisco José de Caldas",
    "UDFJC",
    "Física",
    "Investigación",
    "Educación",
    "Ciencia",
  ],
  authors: [{ name: "SCCF", url: "https://www.sccf.com.co" }],
  creator: "Sociedad Colombiana de Ciencias Fisicas",
  publisher: "Sociedad Colombiana de Ciencias Fisicas",
  robots: "index, follow",
  icons: {
    icon: "/icon.ico",
  },
  openGraph: {
    title: "SCCF - Sociedad Colombiana de Ciencias Fisicas",
    description: "Este es el sitio web de la Sociedad Colombiana de Ciencias Fisicas, donde podras encontrar información sobre la sociedad, sus eventos y actividades.",
    url: "https://www.sccf.com.co",
    siteName: "SCCF - Sociedad Colombiana de Ciencias Fisicas",
    locale: "es_CO",
    type: "website",
  }
};

const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={`antialiased ${inter.className}`}>
          <Header></Header>
          {children}
          <Footer></Footer>
        </body>
      </html>
    </ViewTransitions>
  );
}
