import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const display = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600", "700", "800"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#030712",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.brand} | Sửa điện thoại chuyên nghiệp — ${site.domain}`,
    template: `%s | ${site.brand}`,
  },
  description: site.tagline,
  keywords: [
    "sửa điện thoại",
    "ép kính",
    "thay màn hình",
    "thay pin iPhone",
    "sửa Face ID",
    "mở khóa iCloud",
    "FRP Android",
    "Hà Mobile",
    "Bắc Ninh",
    "Dương Hưu",
    "Thuận Thành",
  ],
  authors: [{ name: site.brand, url: site.url }],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: site.url,
    siteName: site.brand,
    title: `${site.brand} — Trung tâm sửa chữa điện thoại uy tín`,
    description: site.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.brand} — Sửa điện thoại chuyên nghiệp`,
    description: site.tagline,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.brand,
  url: site.url,
  telephone: site.phoneE164,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address,
    addressLocality: site.addressLocality,
    addressCountry: "VN",
  },
  areaServed: "VN",
  priceRange: "$$",
  description: site.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${display.variable} ${sans.variable} h-full`}>
      <body
        className={`${sans.className} min-h-full antialiased [font-feature-settings:'ss01']`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
