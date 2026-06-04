'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

const levels = [
  { range: '1-100', name: 'Novice', difficulty: 'Beginner', color: 'from-green-500 to-green-600' },
  { range: '101-250', name: 'Challenger', difficulty: 'Intermediate', color: 'from-yellow-500 to-yellow-600' },
  { range: '251-500', name: 'Master', difficulty: 'Advanced', color: 'from-orange-500 to-orange-600' },
  { range: '501+', name: 'Legendary', difficulty: 'Expert', color: 'from-red-500 to-red-600' },
]

export function Levels() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#0a0a14] to-[#1a1a2e]">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Progress Through
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              4 Epic Difficulty Tiers
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Start as a Novice and work your way to becoming a Legendary puzzle master.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
          className="grid md:grid-cols-4 gap-6"
        >
          {levels.map((level, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="group relative bg-[#1a1a2e] border border-[#404050] rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 overflow-hidden text-center"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${level.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              <div className="relative z-10">
                <div className={`text-4xl font-black bg-gradient-to-r ${level.color} bg-clip-text text-transparent mb-4`}>
                  {level.range}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{level.name}</h3>
                <p className="text-gray-400">{level.difficulty}</p>
              </div>

              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${level.color} opacity-0 group-hover:opacity-20 blur transition-opacity duration-300 -z-10`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
