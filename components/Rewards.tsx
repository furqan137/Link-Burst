'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

const rewards = [
  {
    title: 'Daily Bonus',
    reward: '+500 Coins',
    description: 'Claim every 24 hours',
    icon: '💰',
  },
  {
    title: 'Weekly Challenge',
    reward: 'Exclusive Booster',
    description: 'Complete special missions',
    icon: '🏆',
  },
  {
    title: 'Streak Bonus',
    reward: '+100 per day',
    description: 'Play 7 days straight',
    icon: '🔥',
  },
  {
    title: 'Level Milestone',
    reward: '1000 Coins',
    description: 'Reach every 50 levels',
    icon: '⭐',
  },
]

export function Rewards() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#0a0a14] to-[#1a1a2e]">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Earn Amazing
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Rewards Every Day
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The more you play, the more you earn. Unlock exclusive rewards and special offers.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
          className="grid md:grid-cols-2 gap-6"
        >
          {rewards.map((reward, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="group relative bg-[#1a1a2e] border border-[#404050] rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

              <div className="relative z-10 flex items-start gap-6">
                <div className="text-5xl flex-shrink-0">{reward.icon}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{reward.title}</h3>
                  <p className="text-cyan-400 font-bold text-lg mb-2">{reward.reward}</p>
                  <p className="text-gray-400 text-sm">{reward.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
