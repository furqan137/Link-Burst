'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

const features = [
  {
    title: 'Addictive Gameplay',
    description: 'Connect tiles and create bursts in a strategic puzzle experience that never gets old.',
    icon: '⚡',
    color: 'from-purple-500 to-purple-600',
  },
  {
    title: 'Thousands of Levels',
    description: 'Progress through challenging levels with increasing difficulty and unique mechanics.',
    icon: '🎯',
    color: 'from-pink-500 to-pink-600',
  },
  {
    title: 'Power Boosters',
    description: 'Unlock special boosters and power-ups to overcome the toughest challenges.',
    icon: '🚀',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    title: 'Daily Rewards',
    description: 'Claim daily bonuses and special rewards to enhance your gaming experience.',
    icon: '💎',
    color: 'from-yellow-400 to-yellow-500',
  },
]

export function Features() {
  return (
    <section className="py-32 px-4 bg-gradient-to-b from-[#0a0a14] via-purple-900/10 to-[#1a1a2e] relative overflow-hidden">
      {/* Background elements */}
      <motion.div
        className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-3xl opacity-10"
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div {...fadeInUp} className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
              Why Players Love LinkBurst
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience gameplay that combines strategy, skill, and endless fun with world-class design.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
          className="grid md:grid-cols-2 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 overflow-hidden"
            >
              {/* Neon glow background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
                animate={{ opacity: [0, 0.02, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Premium content */}
              <div className="relative z-10">
                <motion.div
                  className="text-6xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>

              {/* Premium border glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                pointerEvents: 'none',
              }} />
              <div className={`absolute -inset-1 bg-gradient-to-br ${feature.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
