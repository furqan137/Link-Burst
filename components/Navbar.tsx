'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'

export function Navbar() {
const [isOpen, setIsOpen] = useState(false)

const APK_URL =
'https://github.com/furqan137/LinkBurst/releases/download/v1.0.0/LinkBurst_Game.apk'

const navLinks = [
{ name: 'Features', href: '#features' },
{ name: 'Gameplay', href: '#gameplay' },
{ name: 'Levels', href: '#levels' },
{ name: 'Rewards', href: '#rewards' },
{ name: 'Reviews', href: '#reviews' },
{ name: 'FAQ', href: '#faq' },
]

const scrollToSection = (href: string) => {
setIsOpen(false)


const element = document.querySelector(href)

if (element) {
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

}

return (
<motion.nav
initial={{ y: -100 }}
animate={{ y: 0 }}
transition={{ duration: 0.5 }}
className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0a0a14]/80 backdrop-blur-xl"
> <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> <div className="flex h-16 items-center justify-between">


      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        }
        className="flex cursor-pointer items-center gap-3"
      >
        <Image
          src="/logo.png"
          alt="LinkBurst"
          width={60}
          height={60}
          priority
          className="rounded-xl"
        />

        
      </motion.div>

      {/* Desktop Navigation */}
      <div className="hidden items-center gap-8 md:flex">
        {navLinks.map((link) => (
          <button
            key={link.name}
            onClick={() => scrollToSection(link.href)}
            className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
          >
            {link.name}
          </button>
        ))}
      </div>

      {/* Desktop Download */}
      <div className="hidden md:block">
        <motion.a
          href={APK_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition-all hover:from-purple-700 hover:to-pink-700"
        >
          <Download size={16} />
          Download APK
        </motion.a>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white md:hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>

    {/* Mobile Menu */}
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="border-t border-white/10 md:hidden"
      >
        <div className="space-y-1 px-2 pt-3 pb-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="block w-full rounded-lg px-3 py-3 text-left text-sm text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.name}
            </button>
          ))}

          <a
            href={APK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-3 text-sm font-semibold text-white">
              <Download size={16} />
              Download APK
            </div>
          </a>
        </div>
      </motion.div>
    )}
  </div>
</motion.nav>


)
}
