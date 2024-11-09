import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Something",
  description: "wtf is this breh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
