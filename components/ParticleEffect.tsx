'use client'

import { motion } from 'framer-motion'

export function ParticleEffect() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 8 + 2,
    duration: Math.random() * 20 + 20,
    delay: Math.random() * 0.5,
    left: Math.random() * 100,
    color: ['from-purple-500', 'from-pink-500', 'from-cyan-500', 'from-yellow-400'][
      Math.floor(Math.random() * 4)
    ],
  }))

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute w-${particle.size} h-${particle.size} bg-gradient-to-r ${particle.color} to-transparent rounded-full blur-xl opacity-20`}
          style={{
            left: `${particle.left}%`,
            top: '-10px',
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: window.innerHeight + 20,
            opacity: [0.3, 0.5, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}
