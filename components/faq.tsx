"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FaqItem {
  question: string
  answer: string
}

interface FaqProps {
  onCtaClick: () => void
  playClickSound: () => void
}

const faqItems: FaqItem[] = [
  {
    question: "Will this work on my Roblox account?",
    answer: "✅ Yes. Works with any Roblox account, mobile or PC. Just enter your real username. No password needed at all.",
  },
  {
    question: "Is this actually free?",
    answer: "🆓 Yes, it’s 100% free. You just need to complete one quick task that takes under a minute to unlock your pet.",
  },
  {
    question: "Do I need to log in or give my password?",
    answer: "🚫 Never. We don’t ask for logins or passwords. Only your Roblox username is needed to send the pet.",
  },
  {
    question: "Why do I have to complete a task?",
    answer: "🔐 It stops bots and fake users. Only real players who complete a task get access. That’s how we keep pets undetected and working without patches.",
  },
  {
    question: "I finished the task but didn’t get the pet. What now?",
    answer: "⏳ You probably skipped a step or closed the tab too early. Go back and complete the task fully. It usually takes less than 2 minutes total.",
  },
]

export default function Faq({ onCtaClick, playClickSound }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    playClickSound()
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--forest-green)]">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-4 text-left font-medium focus:outline-none"
                onClick={() => toggleItem(index)}
              >
                <span>{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[var(--forest-green)]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[var(--forest-green)]" />
                )}
              </button>

              <div className={`px-4 pb-4 ${openIndex === index ? "block" : "hidden"}`}>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-[var(--forest-green)]/10 px-4 py-2 rounded-full text-[var(--forest-green)] font-bold mb-4">
            Redeem Streak: 102 pets claimed in the last hour!
          </div>
          <button className="cta-button-neon" onClick={onCtaClick} onMouseEnter={playClickSound}>
            Start Now
          </button>
        </div>
      </div>
    </section>
  )
}
