import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "Next.js Posts Lab",
  description: "A simple Next.js app deployed on AWS behind an ALB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav className="flex gap-6 border-b border-zinc-200 px-6 py-3 text-sm font-medium dark:border-zinc-800">
          <Link
            href="/"
            className="hover:text-zinc-600 dark:hover:text-zinc-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-zinc-600 dark:hover:text-zinc-300"
          >
            About
          </Link>
          <Link
            href="/posts"
            className="hover:text-zinc-600 dark:hover:text-zinc-300"
          >
            Posts
          </Link>
        </nav>
        <main className="flex flex-1 flex-col">{children}</main>
      </body>
    </html>
  );
}
