import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "bookMyEvents",
  description: "bookMyEvents is a platform for event management",
  icons: {
    icon: '/assets/images/bookMyEvents.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/assets/images/bookMyEvents.svg" type="image/svg+xml" />
        </head>
        <body className={poppins.variable}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
