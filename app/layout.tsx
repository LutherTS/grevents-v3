import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Grevents v3: Simply Sharing",
  description: "Grevents now with a focus on aesthetics and ergonomics.",
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
