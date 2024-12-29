import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { TopMenu } from "@/components/ui/topMenu/TopMenu";
import { Footer } from "@/components/ui/footer/Footer";

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
  title: "Development Real-Time Strategy Solutions | DRTS",
  description: "At DRTS, we specialize in creating innovative real-time strategies for businesses, delivering cutting-edge solutions tailored to your needs.",
  openGraph: {
    title: 'Development Real-Time Strategy Solutions | DRTS',
    description: 'Empowering businesses with cutting-edge real-time strategy solutions for improved performance and growth.',
    url: 'https://www.drts.us',
    siteName: 'Development Real-Time Strategy Solutions',
    images: [
      {
        url: '/drts_v2.png', // Ensure this file exists in the `public` directory
        width: 1200,
        height: 630,
        alt: 'DRTS logo - Development Real-Time Strategy Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@DevRts', // Replace with your Twitter handle
    creator: '@DevRts',
    title: 'Development Real-Time Strategy Solutions | DRTS',
    description: 'Discover innovative real-time strategy solutions to elevate your business performance and growth.',
    images: '/drts_v2.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/drts_v2.ico" type="image/x-icon" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <TopMenu/> */}
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}
