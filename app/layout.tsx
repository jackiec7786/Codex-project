import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spice Classifieds",
  description: "Static UI recreation of the Spice Classifieds marketplace."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
