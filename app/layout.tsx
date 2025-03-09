import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Product Search App",
  description: "A full-stack product search application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
