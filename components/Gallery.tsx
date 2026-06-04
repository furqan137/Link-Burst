'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

const screenshots = [
  { image: '/screenshot-1.png', title: 'Gameplay' },
  { image: '/screenshot-2.png', title: 'Levels' },
  { image: '/booster-icons.png', title: 'Boosters' },
]

export function Gallery() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#1a1a2e] to-[#0a0a14]">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Beautiful Visuals
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience stunning graphics and smooth gameplay across all devices.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
          className="grid md:grid-cols-3 gap-6"
        >
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="group relative rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={screenshot.image}
                  alt={screenshot.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-white">{screenshot.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
