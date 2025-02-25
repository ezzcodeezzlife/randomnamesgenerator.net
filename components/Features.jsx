import { Check } from "lucide-react"

export default function Features() {
  const features = [
    "Instant Name Generation – Get unique names in seconds.",
    "Multiple Name Types – Generate person names, business names, and usernames.",
    "Customizable Options – Choose name type and length for usernames.",
    "SEO-Optimized – Built with Next.js for top search engine rankings.",
    "User-Friendly Interface – Simple, fast, and easy to navigate.",
  ]

  return (
    (<div className="my-12">
      <h2 className="text-3xl font-bold mb-6">Key Features</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="mr-2 text-green-500 flex-shrink-0 mt-1" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>)
  );
}

