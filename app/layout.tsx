import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import GoogleAnalytics from "@/components/google-analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unnikrishnan | Full Stack WordPress Developer",
  description:
    "Full Stack WordPress Developer with 25+ years of experience in custom WordPress, headless WordPress, Next.js, TypeScript, and Tailwind CSS. Based in Kochi, India.",
  openGraph: {
    title: "Unnikrishnan — Full Stack WordPress Developer",
    description:
      "Full Stack WordPress Developer with 25+ years experience building fast, scalable websites and web applications.",
    url: "https://unnikrishnantech.com",
    siteName: "Unnikrishnan Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unnikrishnan — Full Stack WordPress Developer",
    description:
      "Full Stack WordPress Developer with 25+ years experience building fast, scalable websites and web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://unnikrishnantech.com"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-950 relative pt-28 sm:pt-36`}
      >
        <div aria-hidden="true" className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] -z-10 rounded-full filter blur-[10rem] sm:w-[68.75rem]"></div>
        <div aria-hidden="true" className="bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] -z-10 rounded-full filter blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        {process.env.NODE_ENV === "production" && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
        )}
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Toaster position="top-right" />
          <Footer />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
