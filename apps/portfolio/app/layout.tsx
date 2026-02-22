import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Colin Cassell",
  description: "Portfolio of projects in hardware, audio, and software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black text-black dark:text-white`}
      >
        {/* hide navigation when serving the standalone personal page */}
        <nav className="border-b border-zinc-200 dark:border-zinc-800">
          <div className="max-w-3xl mx-auto px-6 py-6 flex items-center justify-between">
            <a href="/" className="font-semibold text-lg">
              Home
            </a>
            <a href="/projects" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition">
              Projects
            </a>
          </div>
        </nav>
        <main className="max-w-3xl mx-auto px-6 py-12">
          {children}
        </main>
      </body>
    </html>
  );
}
