import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orac Dental Clinic | Best Dentist in Surat",
  description:
    "Orac Dental Clinic in Surat offers expert dental care, including cosmetic dentistry, root canals, dental implants, teeth whitening, and more. Book your appointment today with top-rated dentists in Surat.",
  keywords: [
    "Orac Dental",
    "Dental Clinic Surat",
    "Dentist in Surat",
    "Cosmetic Dentistry",
    "Root Canal Surat",
    "Dental Implants Surat",
    "Teeth Whitening Surat",
    "Best Dentist in Surat",
    "Affordable Dental Care Surat",
  ],
  openGraph: {
    title: "Orac Dental Clinic | Best Dentist in Surat",
    description:
      "Visit Orac Dental for expert dental care in Surat. Services include root canal, cosmetic dentistry, dental implants & more.",
    url: "https://oracdental.in", // Update with your real domain
    siteName: "Orac Dental",
    images: [
      {
        url: "/orac-banner.jpg", // Put a relevant image in public folder
        width: 1200,
        height: 630,
        alt: "Orac Dental Clinic Surat",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orac Dental Clinic | Best Dentist in Surat",
    description:
      "Get quality dental treatments in Surat at Orac Dental. Experienced dentists, modern equipment, and patient-friendly care.",
    images: ["/orac-banner.jpg"], // Should be in public/
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
