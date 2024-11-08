import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Configuración de fuentes locales
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ZOI - SOE | Univalle",
  description:
    "Sociedad de Estudiantes Líderes (SOE) de la Universidad Privada del Valle (Univalle)",
  keywords:
    "ZOI, SOE, Univalle, Universidad Privada del Valle, Sociedad de Estudiantes Líderes",
  authors: [{ name: "Universidad Privada del Valle" }],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
  openGraph: {
    title: "ZOI - SOE Univalle",
    description: "Universidad del Valle - Sistema de Operaciones Especiales",
    url: "https://soe.univalle.edu",
    siteName: "ZOI SOE",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
