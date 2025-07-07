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
      <head>
        <meta 
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, shrink-to-fit=no"
        />
      </head>
      <body
        className={`antialiased scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
