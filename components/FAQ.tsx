'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Is LinkBurst really free to play?',
    answer: 'Yes! LinkBurst is completely free to download and play. We offer optional in-app purchases for cosmetics and convenience items, but all game content is accessible without spending.',
  },
  {
    question: 'How often are new levels added?',
    answer: 'We release new levels every week! Our team is constantly creating challenging new puzzles to keep the game fresh and exciting.',
  },
  {
    question: 'Can I play offline?',
    answer: 'Yes, you can play LinkBurst offline! Daily rewards and leaderboards require an internet connection, but the main gameplay works perfectly offline.',
  },
  {
    question: 'Is there a competitive multiplayer mode?',
    answer: 'Currently, we focus on single-player and cooperative modes. However, we have exciting multiplayer features planned for upcoming updates!',
  },
  {
    question: 'Do my progress sync across devices?',
    answer: 'Absolutely! Sign in with your account and your progress will sync automatically across all your devices.',
  },
  {
    question: 'How do I get more boosters?',
    answer: 'You can earn boosters through daily rewards, level achievements, special events, or purchase them if you prefer. All methods provide fair value!',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#0a0a14] to-[#1a1a2e]">
      <div className="max-w-3xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Frequently Asked
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Find answers to common questions about LinkBurst.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div key={index} variants={staggerItem}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-[#1a1a2e] border border-[#404050] rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 text-left"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-purple-400" />
                  </motion.div>
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#0f0f1a] border-x border-b border-[#404050] px-6 py-4"
                  >
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
