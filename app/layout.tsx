import type { Metadata } from "next";
import { Montserrat, Anton } from "next/font/google";
import "./globals.css"; 

const montserrat = Montserrat({
  variable: "--montserrat",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--anton",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Inami Studio",
  description: "Marketing Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${anton.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
