import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Import your components (inside app/components)
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DarkModeToggle from "./components/DarkModeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CNN Securities",
  description: "Official website of CNN Securities",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
            <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
      >
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />

        {/* Floating Dark Mode Button */}
        <DarkModeToggle />
      </body>
    </html>
  );
}
