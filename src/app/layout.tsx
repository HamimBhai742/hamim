import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hamim | Backend-Focused Full-Stack Developer",
  description:
    "Hamim is a backend-focused full-stack developer specializing in REST API design, database architecture, and scalable server-side systems. Available for full-time roles and freelance projects.",
  keywords: [
    "backend developer",
    "full-stack developer",
    "REST API",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Hamim" }],
  openGraph: {
    title: "Hamim | Backend-Focused Full-Stack Developer",
    description:
      "I build the systems behind the product — clean APIs, solid databases, and scalable architecture that teams can rely on.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamim | Backend-Focused Full-Stack Developer",
    description:
      "Backend-focused full-stack developer. REST APIs, database architecture, and scalable server-side systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable}`}
    >
      <body className="min-h-dvh flex flex-col antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
