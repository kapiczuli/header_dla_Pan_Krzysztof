import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Header",
  description: "Zadanie do zrobienia od Pan Krzysztof, Pan Bóg marzenia sie spełniają ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="PL-pl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
