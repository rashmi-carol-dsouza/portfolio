import "./globals.css";
import clsx from "clsx";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Sidebar from "../components/sidebar";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const kaisei = localFont({
  src: "../../public/fonts/kaisei-tokumin-latin-700-normal.woff2",
  weight: "700",
  variable: "--font-kaisei",
  display: "swap",
});

export const metadata = {
  title: "Portfolio | Rashmi DSouza",
  description:
    "Data Scientist enabling businesses to make data driven decisions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={clsx("text-black bg-white", kaisei.variable)}>
      <head>
        <Script
          src="https://kit.fontawesome.com/9b6441880f.js"
          crossOrigin="anonymous"
        ></Script>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DCFNHFZTCE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-DCFNHFZTCE');
        `}
        </Script>
      </head>
      <body className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
        <Sidebar />
        <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
