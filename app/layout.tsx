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
  title: "Inami Studio | Marketing Agency",
  description: "Marketing Agency specializing in AEO.",
  // THIS IS THE NEXT.JS WAY TO DO STEP 3:
  alternates: {
    types: {
      'text/plain': '/llms.txt',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${anton.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
