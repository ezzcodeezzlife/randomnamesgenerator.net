"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, User, Briefcase, AtSign, Copy } from "lucide-react"
import { toast } from "react-hot-toast"

const firstNames = ["Emma", "Liam", "Olivia", "Noah", "Ava", "Ethan", "Sophia", "Mason", "Isabella", "William"]
const lastNames = ["Smith", "Johnson", "Brown", "Taylor", "Miller", "Anderson", "Wilson", "Moore", "Jackson", "Martin"]
const businessPrefixes = ["Alpha", "Nova", "Eco", "Tech", "Global", "Smart", "Bright", "Peak", "Prime", "Vital"]
const businessSuffixes = [
  "Solutions",
  "Systems",
  "Innovations",
  "Enterprises",
  "Group",
  "Industries",
  "Technologies",
  "Services",
  "Dynamics",
  "Ventures",
]

export default function NameGenerator() {
  const [nameType, setNameType] = useState("person")
  const [generatedName, setGeneratedName] = useState("")

  const generateName = useCallback(() => {
    let result = ""
    switch (nameType) {
      case "person":
        result = `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`
        break
      case "business":
        result = `${businessPrefixes[Math.floor(Math.random() * businessPrefixes.length)]} ${businessSuffixes[Math.floor(Math.random() * businessSuffixes.length)]}`
        break
      case "username":
        const adjectives = ["Cool", "Awesome", "Clever", "Swift", "Bright"]
        const nouns = ["Coder", "Ninja", "Guru", "Wizard", "Star"]
        const randomNum = Math.floor(Math.random() * 1000)
        result = `${adjectives[Math.floor(Math.random() * adjectives.length)]}${nouns[Math.floor(Math.random() * nouns.length)]}${randomNum}`
        break
    }
    setGeneratedName(result)
  }, [nameType])

  useEffect(() => {
    generateName()
  }, [generateName])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedName)
    toast.success("Copied to clipboard!")
  }

  return (
    (<div
      className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-xl shadow-2xl mb-8">
      <h2 className="text-3xl font-bold mb-6 text-white text-center">Generate Random Name</h2>
      <div className="grid grid-cols-2 gap-4 mb-8">
        {[
          { type: "person", icon: User },
          { type: "business", icon: Briefcase },
          
        ].map(({ type, icon: Icon }) => (
          <Button
            key={type}
            variant={nameType === type ? "secondary" : "outline"}
            className={`h-16 text-lg font-semibold transition-all ${
              nameType === type ? "ring-4 ring-red-400 shadow-lg" : "hover:ring-2 hover:ring-white/50"
            }`}
            onClick={() => setNameType(type)}>
            <Icon className="mr-2 h-6 w-6" />
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </Button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={generatedName}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white p-6 rounded-lg shadow-inner mb-8 relative">
          <h3 className="text-xl font-medium mb-2 text-gray-700">Generated Name:</h3>
          <p className="text-3xl font-bold text-gray-900 pr-12">{generatedName}</p>
          <Button
            variant="outline"
            size="lg"
            className="absolute top-4 right-4 p-2"
            onClick={copyToClipboard}>
            <Copy className="h-6 w-6 mr-2" />
            Copy
          </Button>
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-center">
        <Button
          size="lg"
          className="bg-white text-blue-600 hover:bg-gray-100 transition-all transform hover:scale-105 text-xl py-6 px-8"
          onClick={generateName}>
          <Sparkles className="mr-2 h-6 w-6" />
          Generate New Name
        </Button>
      </div>
    </div>)
  );
}

