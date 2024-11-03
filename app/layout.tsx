import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import GA from "@/components/GA";
import { ThemeProvider } from "@/components/theme-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "media modify | Free Unlimited File Converter - Images, Video & Audio",
  description: `Convert unlimited images, videos & audio files for free with Modifio. Fast, secure, no sign-up required. Transform your media files instantly online.`,
  keywords: [
    "free file converter",
    "online file converter",
    "image converter",
    "video converter",
    "audio converter",
    "unlimited file conversion",
    "media converter",
    "photo converter",
    "mp3 converter",
    "mp4 converter",
    "jpg converter",
    "png converter",
    "convert files online",
  ],
  openGraph: {
    title: "media modify - Free Unlimited File Converter | No Restrictions",
    description:
      "Convert unlimited images, videos & audio files for free. No sign-up needed. Fast, secure, and easy to use.",
    type: "website",
    siteName: "Media Modify",
  },
  twitter: {
    card: "summary_large_image",
    title: "Media Modify - Free Unlimited File Converter",
    description:
      "Convert unlimited images, videos & audio files for free. No sign-up needed. Transform your media instantly.",
  },
  alternates: {
    canonical: "https://mediamodify.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <GA GA_MEASUREMENT_ID="G-52GQ441X7H" /> */}
      {/* <meta
        name="google-site-verification"
        content="V8lmEvFOdYBlChgR6pYABBZBhI1EFnPb1YuxTTdHXMU"
      /> */}
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          themes={["light", "dark"]}
        >
          <Navbar />
          <Toaster />
          <div className="pt-32 min-h-screen lg:pt-36 2xl:pt-44 container max-w-4xl lg:max-w-6xl 2xl:max-w-7xl">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
