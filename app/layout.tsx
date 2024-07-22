import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Grevents v3",
  description: "Grevents now with a focus on esthetics and ergonomics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
