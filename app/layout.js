import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata = {
  title: "Random Name Generator | Create Unique Names Instantly",
  description:
    "Generate unique names for people and businesses with our powerful Random Name Generator. Fast & customizable!",
  keywords: [
    "random name generator",
    "name generator",
    "random name",
    
  ],
  publisher: "Random Name Generator",
  creator: "Random Name Generator",
  authors: [{ name: "Tom" }, { name: "Josh", url: "https://randomnamesgenerator.net" }],
  for: "randomnamesgenerator.net",
  openGraph: {
    title: "Random Name Generator",
    description:
      "Generate unique and creative names for people, businesses, and usernames with our powerful Random Name Generator.",
    url: "https://randomnamesgenerator.net",
    siteName: "Random Name Generator",
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="robots" content="index, follow" />
      <meta name="google-site-verification" content="BIsUia9v4z7OmWKMXnrGaA_2iek_yP9imVt68uuIHFM" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-LKMHYZ78EB" />

    </html>
  );
}
