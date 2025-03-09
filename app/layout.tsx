import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"], preload: true });

export const metadata: Metadata = {
  title: "Arpit Goswami | Web Developer Portfolio",
  description:
    "Modern & Minimal Web Development by Arpit Goswami. Specializing in Next.js, React, and Tailwind CSS.",
  keywords:
    "Web Development, Next.js, React, Tailwind CSS, Portfolio, Arpit Goswami",
  authors: [{ name: "Arpit Goswami", url: "https://arpitgoswami.me" }],
  metadataBase: new URL("https://arpitgoswami.me"),
  openGraph: {
    title: "Arpit Goswami | Web Developer Portfolio",
    description: "Modern & Minimal Web Development by Arpit Goswami.",
    url: "https://arpitgoswami.me",
    siteName: "Arpit Goswami",
    images: [
      {
        url: "/og-image.png", // Update with your OG image
        width: 1200,
        height: 630,
        alt: "Arpit Goswami Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arpit Goswami | Web Developer Portfolio",
    description: "Modern & Minimal Web Development by Arpit Goswami.",
    images: ["/og-image.png"], // Update with your OG image
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo-sm.png" sizes="any" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
