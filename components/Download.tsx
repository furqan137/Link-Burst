'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { fadeInUp, floatingAnimation, neonGlowPurple } from '@/lib/animations'

export function Download() {
  return (
    <section className="py-32 px-4 bg-gradient-to-b from-[#1a1a2e] to-[#0a0a14] relative overflow-hidden">
      {/* Premium background effects */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-3xl opacity-20"
        animate={floatingAnimation}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full blur-3xl opacity-15"
        animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div {...fadeInUp} className="text-center space-y-12">
          {/* Premium heading */}
          <div>
            <h2 className="text-6xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
                Ready to Play?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Download LinkBurst now and join millions of players experiencing the ultimate puzzle adventure.
            </p>
          </div>

          {/* Premium CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg px-12 py-7 rounded-full font-bold shadow-2xl hover:shadow-purple-500/50 transition-all transform hover:scale-105"
            >
              📱 Download on iOS
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white text-lg px-12 py-7 rounded-full font-bold shadow-2xl hover:shadow-cyan-500/50 transition-all transform hover:scale-105"
            >
              🤖 Download APK
            </Button>
          </motion.div>

          {/* Features list */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-700"
          >
            <div className="space-y-2">
              <div className="text-3xl">⚡</div>
              <p className="text-gray-300 font-semibold">Free to Download</p>
              <p className="text-gray-500 text-sm">No hidden costs</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl">🎮</div>
              <p className="text-gray-300 font-semibold">Play Offline</p>
              <p className="text-gray-500 text-sm">No internet needed</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl">🏆</div>
              <p className="text-gray-300 font-semibold">Cloud Sync</p>
              <p className="text-gray-500 text-sm">Play on any device</p>
            </div>
          </motion.div>

          {/* Trust badges */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm pt-4"
          >
            ⭐ 4.8 Stars • 50M+ Downloads • 99% Positive Reviews
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
