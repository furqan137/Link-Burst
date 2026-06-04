'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function Footer() {
const APK_URL =
'https://github.com/furqan137/LinkBurst/releases/download/v1.0.0/LinkBurst_Game.apk'

return ( <footer className="border-t border-[#404050] bg-[#0a0a14] px-4 py-12">
<motion.div
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
viewport={{ once: true }}
className="mx-auto max-w-6xl"
> <div className="grid gap-10 md:grid-cols-4">
{/* Brand */} <div> <div className="mb-4 flex items-center gap-3"> <Image
             src="/logo.png"
             alt="LinkBurst Logo"
             width={50}
             height={50}
             className="rounded-xl"
           />


          <div>
         
            <p className="text-xs text-gray-500">
              Puzzle Adventure
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-400">
          Connect colorful balls, unlock powerful boosters,
          create explosive combos and conquer every level.
        </p>
      </div>

      {/* Game */}
      <div>
        <h4 className="mb-4 font-bold text-white">
          Game
        </h4>

        <ul className="space-y-2 text-sm text-gray-400">
          <li>
            <a
              href={APK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-purple-400"
            >
              Download APK
            </a>
          </li>

          <li>
            <a
              href="#features"
              className="transition-colors hover:text-purple-400"
            >
              Features
            </a>
          </li>

          <li>
            <a
              href="#levels"
              className="transition-colors hover:text-purple-400"
            >
              Levels
            </a>
          </li>
        </ul>
      </div>

      {/* Support */}
      <div>
        <h4 className="mb-4 font-bold text-white">
          Support
        </h4>

        <ul className="space-y-2 text-sm text-gray-400">
          <li>
            <a
              href="#faq"
              className="transition-colors hover:text-purple-400"
            >
              FAQ
            </a>
          </li>

          <li>
            <a
              href="mailto:support@linkburstgame.com"
              className="transition-colors hover:text-purple-400"
            >
              Contact
            </a>
          </li>

          <li>
            <a
              href="#reviews"
              className="transition-colors hover:text-purple-400"
            >
              Reviews
            </a>
          </li>
        </ul>
      </div>

      {/* Legal */}
      <div>
        <h4 className="mb-4 font-bold text-white">
          Legal
        </h4>

        <ul className="space-y-2 text-sm text-gray-400">
          <li>
            <a
              href="#"
              className="transition-colors hover:text-purple-400"
            >
              Privacy Policy
            </a>
          </li>

          <li>
            <a
              href="#"
              className="transition-colors hover:text-purple-400"
            >
              Terms of Service
            </a>
          </li>

          <li>
            <a
              href="#"
              className="transition-colors hover:text-purple-400"
            >
              Cookie Policy
            </a>
          </li>
        </ul>
      </div>
    </div>

    {/* Bottom */}
    <div className="mt-10 border-t border-[#404050] pt-8">
      <p className="text-center text-sm text-gray-500">
        © 2026 LinkBurst. All rights reserved.
        <br />
        Made with 💜 for puzzle lovers around the world.
      </p>
    </div>
  </motion.div>
</footer>


)
}
