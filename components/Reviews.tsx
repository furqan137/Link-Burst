'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

const reviews = [
  {
    name: 'Sarah M.',
    role: 'Casual Player',
    content: 'LinkBurst is absolutely addictive! I can\'t put it down. Best puzzle game I\'ve ever played!',
    rating: 5,
  },
  {
    name: 'James T.',
    role: 'Competitive Gamer',
    content: 'The difficulty progression is perfect. Each level feels fresh and challenging. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Emma L.',
    role: 'Mobile Enthusiast',
    content: 'Smooth gameplay, beautiful graphics, and no pay-to-win mechanics. This is how mobile games should be!',
    rating: 5,
  },
  {
    name: 'Alex K.',
    role: 'Streamer',
    content: 'Great content for streaming! My viewers love it and the daily challenges keep things interesting.',
    rating: 5,
  },
]

export function Reviews() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#0a0a14] to-[#1a1a2e]">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Loved by Millions
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join millions of players who are enjoying LinkBurst every day.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
          className="grid md:grid-cols-2 gap-6"
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="bg-[#1a1a2e] border border-[#404050] rounded-2xl p-8 hover:border-pink-500/50 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="text-2xl text-yellow-400">
                    ⭐
                  </span>
                ))}
              </div>

              {/* Review text */}
              <p className="text-gray-300 mb-6 italic">"{review.content}"</p>

              {/* Author info */}
              <div>
                <p className="font-bold text-white">{review.name}</p>
                <p className="text-sm text-gray-400">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
