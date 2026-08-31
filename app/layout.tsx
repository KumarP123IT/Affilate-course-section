import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Training Partner Section — Preview",
  description: "Standalone preview of the AI training partner homepage section.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0b] antialiased">{children}</body>
    </html>
  );
}
