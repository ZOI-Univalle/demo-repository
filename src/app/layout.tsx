import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ],
  colorScheme: 'light dark'
};

export const metadata: Metadata = {
  metadataBase: new URL("https://soe.univalle.edu"),
  title: {
    template: "%s | SOE Univalle",
    default: "ZOI - SOE | Univalle",
  },
  description:
    "Sociedad de Estudiantes Líderes (SOE) de la Universidad Privada del Valle (Univalle)",
  keywords:
    "ZOI, SOE, Univalle, Universidad Privada del Valle, Sociedad de Estudiantes Líderes",
  authors: [{ name: "Universidad Privada del Valle" }],
  publisher: "Universidad Privada del Valle",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://soe.univalle.edu",
    siteName: "ZOI SOE",
    title: "ZOI - SOE Univalle",
    description: "Universidad Privada del Valle - Sociedad de Estudiantes Líderes",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ZOI SOE Univalle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZOI - SOE Univalle",
    description: "Universidad Privada del Valle - Sociedad de Estudiantes Líderes",
    images: ["/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
