import NameGenerator from "@/components/NameGenerator"
import Features from "@/components/Features"
import SEOContent from "@/components/SEOContent"
import { Toaster } from "react-hot-toast"

export const metadata = {
  title: "Random Name Generator | Create Unique Names Instantly",
  description:
    "Generate unique and creative names for people, businesses, and usernames with our powerful Random Name Generator. Fast, customizable, and free to use!",
  keywords: ["random name generator", "name generator", "business name generator", "username generator"],
}

export default function Home() {
  return (
    (<main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1
          className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Random Name Generator
        </h1>
        <NameGenerator />
        <Features />
        <SEOContent />
      </div>
      <Toaster position="bottom-center" />
    </main>)
  );
}

