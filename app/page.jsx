import NameGenerator from "@/components/NameGenerator";
import Features from "@/components/Features";
import SEOContent from "@/components/SEOContent";
import { Toaster } from "react-hot-toast";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Random Name Generator
        </h1>
        <NameGenerator />
        <Features />
        <SEOContent />
      </div>
      <Toaster position="bottom-center" />
      
      {/* Footer Section */}
      <footer className="mt-12 py-6 border-t border-gray-300 text-center text-gray-600">
        <nav className="flex justify-center space-x-6">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/legal" className="hover:text-blue-600">Legal</Link>
          <Link href="/random-name-generator" className="hover:text-blue-600">Random Name Generator</Link>
          <Link href="/sitemap.xml" className="hover:text-blue-600">Sitemap</Link>
        </nav>
      </footer>
    </main>
  );
}
