import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/lib/constants";

export const viewport: Viewport = {
  themeColor: "#01276D",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://emanuelfnasesoria.cl"),
  title: "Emanuel FN Asesoría",
  description: SITE_CONFIG.description,
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/logo.png", type: "image/png" },
    ],
    apple: [
      { url: "/images/logo.png" },
    ],
  },
  keywords: [
    "Gestión del Riesgo",
    "Continuidad Operacional",
    "Resiliencia Organizacional",
    "BCP",
    "COOP",
    "Planes de Contingencia",
    "Emanuel Isaac Fernández Noriega",
    "Emanuel FN Asesoría",
    "SENAPRED",
    "Ley 21.364",
    "PISE",
    "Servicios Sanitarios Rurales SSR",
    "Ley 20.998",
    "Consultoría e Integración Tecnológica",
    "Capacitación Técnica",
    "Sistema de Comando de Incidentes SCI",
    "Acreditación OS10",
  ],
  authors: [{ name: SITE_CONFIG.fullName, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.fullName,
  publisher: SITE_CONFIG.name,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: SITE_CONFIG.url,
    title: "Emanuel FN Asesoría",
    description: SITE_CONFIG.description,
    siteName: "Emanuel FN Asesoría",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emanuel FN Asesoría",
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-900 antialiased selection:bg-[#46B4F0]/30 selection:text-[#001E5A]">
        <Header />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
