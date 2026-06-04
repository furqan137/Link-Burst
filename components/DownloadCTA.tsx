"use client";

import { motion } from "framer-motion";
import { Download, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
initial: { opacity: 0, y: 50 },
whileInView: { opacity: 1, y: 0 },
viewport: { once: true },
};

export default function DownloadCTA() {
return ( <section
   id="download"
   className="relative overflow-hidden py-32"
 >
{/* Background Glow */} <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-500/10 to-transparent" />

```
  <div className="mx-auto max-w-7xl px-6">
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.8 }}
      className="
        relative
        overflow-hidden
        rounded-[3rem]
        border
        border-white/10
        p-10
        text-center
        shadow-[0_30px_120px_rgba(168,85,247,0.35)]
        sm:p-20
      "
      style={{
        background:
          "linear-gradient(135deg,#6D28D9 0%,#9333EA 35%,#C026D3 70%,#EC4899 100%)",
      }}
    >
      {/* Light Effects */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(800px 500px at 20% 20%, rgba(255,255,255,.35), transparent), radial-gradient(600px 400px at 80% 80%, rgba(255,255,255,.25), transparent)",
        }}
      />

      {/* Floating Decorations */}
      <div className="absolute -left-10 top-10 h-24 w-24 rounded-full bg-yellow-400 blur-xl animate-bounce opacity-70" />
      <div className="absolute right-10 top-10 h-20 w-20 rounded-full bg-emerald-400 blur-xl animate-pulse opacity-70" />
      <div className="absolute left-20 bottom-10 h-24 w-24 rounded-full bg-sky-400 blur-xl animate-bounce opacity-70" />
      <div className="absolute right-16 bottom-10 h-28 w-28 rounded-full bg-fuchsia-400 blur-xl animate-pulse opacity-70" />

      <div className="relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-xl">
          🚀 Available Now For Android
        </div>

        {/* Title */}
        <h2 className="mx-auto mt-8 max-w-4xl text-5xl font-black leading-tight text-white md:text-7xl">
          Ready To Burst Into Fun?
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-3xl text-lg text-white/90 md:text-xl">
          Connect colorful balls, create explosive combos, unlock powerful
          boosters and conquer every level in the ultimate puzzle adventure.
        </p>

        {/* Stats */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <div className="rounded-2xl bg-white/10 px-8 py-5 backdrop-blur-xl">
            <div className="text-3xl font-black text-white">30+</div>
            <div className="text-sm text-white/80">
              Challenging Levels
            </div>
          </div>

          <div className="rounded-2xl bg-white/10 px-8 py-5 backdrop-blur-xl">
            <div className="text-3xl font-black text-white">3</div>
            <div className="text-sm text-white/80">
              Unique Boosters
            </div>
          </div>

          <div className="rounded-2xl bg-white/10 px-8 py-5 backdrop-blur-xl">
            <div className="text-3xl font-black text-white">4.9★</div>
            <div className="text-sm text-white/80">
              Player Rating
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Button
            
            size="lg"
            className="h-16 rounded-full bg-black px-10 text-lg font-bold text-white transition-all hover:scale-105 hover:bg-zinc-900"
          >
            <a
              href="https://github.com/furqan137/LinkBurst/releases/download/v1.0.0/LinkBurst_Game.apk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="mr-3 h-5 w-5" />
              Download APK
            </a>
          </Button>

          <Button
            disabled
            size="lg"
            variant="outline"
            className="h-16 rounded-full border-white/30 bg-white/10 px-10 text-lg font-bold text-white"
          >
            <Play className="mr-3 h-5 w-5" />
            Google Play Soon
          </Button>

          <Button
            disabled
            size="lg"
            variant="outline"
            className="h-16 rounded-full border-white/30 bg-white/10 px-10 text-lg font-bold text-white"
          >
            🍎 App Store Soon
          </Button>
        </div>

        {/* Footer */}
        <p className="mt-8 text-sm text-white/80">
          Free Download • Android APK Available • Google Play & App Store
          Launching Soon
        </p>
      </div>
    </motion.div>
  </div>
</section>


);
}
