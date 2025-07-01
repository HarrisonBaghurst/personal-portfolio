import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harrison Baghurst - Project Portfolio",
  description: "Showcase of Harrison Baghurst best and most recent complete and underway projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
