import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Training Partner Section — Preview",
  description: "Standalone preview of the AI training partner homepage section.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0b] antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RTW5258Y4D"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RTW5258Y4D');
            window.gtag = gtag;
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}