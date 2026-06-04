'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface IPhoneMockupProps {
  imageSrc: string
}

export function IPhoneMockup({ imageSrc }: IPhoneMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative mx-auto w-full max-w-[340px]"
    >
      {/* Glow */}
      <div className="absolute -inset-10 rounded-[60px] bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-cyan-500/30 blur-3xl" />

      {/* Phone Frame */}
      <div className="relative z-10 overflow-hidden rounded-[48px] border-[12px] border-zinc-900 bg-black shadow-2xl">

        {/* Full Screen Image */}
       <div className="relative mx-auto max-w-[340px]">
  <Image
    src="/gameplay.png"
    alt="Gameplay"
    width={401}
    height={776}
    priority
    className="rounded-[40px] shadow-[0_0_80px_rgba(168,85,247,0.35)]"
  />
</div>

      </div>
    </motion.div>
  )
}