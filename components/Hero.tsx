'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { IPhoneMockup } from '@/components/IPhoneMockup'
import { AnimatedCounter } from '@/components/AnimatedCounter'

export function Hero() {
return ( <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A0A14] via-purple-900/20 to-[#0A0A14] px-4 py-20">
{/* Background Glow */}
<motion.div
className="absolute left-10 top-20 h-96 w-96 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-15 blur-3xl"
animate={{ y: [0, -20, 0] }}
transition={{
duration: 6,
repeat: Infinity,
repeatType: 'reverse',
}}
/>

```
  <motion.div
    className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 opacity-15 blur-3xl"
    animate={{ y: [0, 20, 0] }}
    transition={{
      duration: 7,
      repeat: Infinity,
      repeatType: 'reverse',
    }}
  />

  <motion.div
    className="absolute left-1/2 top-1/2 h-80 w-80 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 opacity-10 blur-3xl"
    animate={{
      y: [20, -20, 20],
      x: [10, -10, 10],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      repeatType: 'reverse',
    }}
  />

  <div className="relative z-10 mx-auto w-full max-w-7xl">
    <div className="grid items-center gap-16 md:grid-cols-2">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >
        <div>
          <div className="mb-4 inline-flex rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-300">
            🚀 Available Now
          </div>

          <h1 className="mb-6 bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-6xl font-black leading-none text-transparent md:text-8xl">
            LinkBurst
          </h1>

          <p className="mb-6 text-xl leading-relaxed text-gray-300 md:text-2xl">
            Connect, Burst & Conquer.
          </p>

          <p className="max-w-xl text-lg text-gray-400">
            Connect colorful balls, unleash powerful boosters,
            create explosive combos and conquer every level in
            the ultimate puzzle adventure.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="https://github.com/furqan137/LinkBurst/releases/download/v1.0.0/LinkBurst_Game.apk"
            target="_blank"
            rel="noopener noreferrer"
          >
          <div className="flex flex-col gap-4 sm:flex-row">
  <a
    href="https://github.com/furqan137/LinkBurst/releases/download/v1.0.0/LinkBurst_Game.apk"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      size="lg"
      className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-7 text-lg font-bold text-white hover:from-purple-700 hover:to-pink-700"
    >
      Download APK
    </Button>
  </a>

<a
href="https://github.com/furqan137/LinkBurst/releases/download/v1.0.0/LinkBurst_Game.apk"
target="_blank"
rel="noopener noreferrer"

>


<Button

  size="lg"
  variant="outline"
  className="rounded-full border-2 border-cyan-500 px-8 py-7 text-lg font-bold text-cyan-400 hover:bg-cyan-500/10"
>
  ▶ Play Now
</Button>


  </a>
</div>

          </a>

          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-2 border-cyan-500 px-8 py-7 text-lg font-bold text-cyan-400 hover:bg-cyan-500/10"
          >
            Watch Gameplay
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 border-t border-gray-800 pt-8">
          <div>
            <AnimatedCounter target={30} suffix="+" />
            <p className="mt-2 text-sm text-gray-400">
              Levels
            </p>
          </div>

          <div>
            <AnimatedCounter target={3} suffix="" />
            <p className="mt-2 text-sm text-gray-400">
              Boosters
            </p>
          </div>

          <div>
            <AnimatedCounter target={49} suffix="/10" />
            <p className="mt-2 text-sm text-gray-400">
              Rating
            </p>
          </div>
        </div>
      </motion.div>

      {/* Right Side */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-center"
      >
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="scale-110 md:scale-125"
        >
          <IPhoneMockup imageSrc="/gameplay.png" />
        </motion.div>
      </motion.div>
    </div>
  </div>

  {/* Floating Orbs */}
  <motion.div
    className="absolute bottom-10 left-1/4 h-16 w-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 blur-xl"
    animate={{ y: [0, -20, 0] }}
    transition={{
      duration: 5,
      repeat: Infinity,
      repeatType: 'reverse',
    }}
  />

  <motion.div
    className="absolute right-1/4 top-1/3 h-12 w-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20 blur-lg"
    animate={{ y: [0, -15, 0] }}
    transition={{
      duration: 4,
      repeat: Infinity,
      repeatType: 'reverse',
    }}
  />
</section>


)
}
