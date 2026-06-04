'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem, pulseGlow } from '@/lib/animations'

const boosters = [
  {
    name: 'Lightning Strike',
    description: 'Instantly clear an entire row or column of tiles.',
    icon: '⚡',
    color: 'from-yellow-400 to-yellow-500',
  },
  {
    name: 'Bomb Blast',
    description: 'Explode a 3x3 area around the target tile.',
    icon: '💣',
    color: 'from-red-500 to-red-600',
  },
  {
    name: 'Rocket Rush',
    description: 'Launch rockets to clear multiple random tiles.',
    icon: '🚀',
    color: 'from-pink-500 to-pink-600',
  },
  {
    name: 'Color Burst',
    description: 'Eliminate all tiles of a selected color from the board.',
    icon: '✨',
    color: 'from-purple-500 to-purple-600',
  },
  {
    name: 'Time Freeze',
    description: 'Gain extra moves and pause the game timer.',
    icon: '🧊',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    name: 'Mega Multiplier',
    description: 'Double all points earned in the next 10 moves.',
    icon: '2️⃣',
    color: 'from-green-500 to-green-600',
  },
]

export function Boosters() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#1a1a2e] to-[#0a0a14]">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Unlock Powerful
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Boosters & Power-Ups
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover 6 unique boosters to overcome challenging levels and achieve higher scores.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
          className="grid md:grid-cols-3 gap-6"
        >
          {boosters.map((booster, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="group relative bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1a] border border-[#404050] rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${booster.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              <div className="relative z-10">
                <motion.div
                  className="text-6xl mb-4 inline-block"
                  animate={pulseGlow}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {booster.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3">{booster.name}</h3>
                <p className="text-gray-400 text-sm">{booster.description}</p>
              </div>

              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${booster.color} opacity-0 group-hover:opacity-20 blur transition-opacity duration-300 -z-10`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
