"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const shots = [
{
src: "/assets/mockups/mockup1_Linkburst.png",
title: "Start Your Journey",
desc: "Beautiful splash screen, stunning main menu and smooth level progression system.",
},
{
src: "/assets/mockups/mockup2_Linkburst.png",
title: "Explosive Gameplay",
desc: "Connect colorful balls, create powerful combos and trigger spectacular explosions.",
},
{
src: "/assets/mockups/mockup3_Linkburst.png",
title: "Powerful Boosters",
desc: "Use Bombs, Rockets and Energy Boosts strategically to clear difficult levels.",
},
{
src: "/assets/mockups/mockup4_Linkburst.png",
title: "Rewards & Progress",
desc: "Earn stars, unlock achievements and continue your colorful adventure.",
},
];

export default function Gameplay() {
return ( <section
   id="gameplay"
   className="relative overflow-hidden py-32"
 >
{/* Background Glow */} <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-500/5 to-transparent" />

```
  <div className="mx-auto max-w-7xl px-6">
    {/* Heading */}
    <div className="text-center">
      <span className="inline-flex rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-5 py-2 text-sm font-semibold text-fuchsia-300">
        GAMEPLAY
      </span>

      <h2 className="mt-6 text-5xl font-black text-white md:text-6xl">
        Explore The LinkBurst Universe
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">
        Beautiful screens, explosive gameplay and rewarding progression.
      </p>
    </div>

    {/* Screenshots */}
    <div className="mt-24 space-y-32">
      {shots.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: index * 0.15,
          }}
          className={`flex flex-col items-center gap-12 ${
            index % 2 === 1
              ? "lg:flex-row-reverse"
              : "lg:flex-row"
          }`}
        >
          {/* Screenshot */}
          <div className="flex-1">
            <div
              className="
                group
                overflow-hidden
                rounded-[40px]
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                shadow-[0_30px_120px_rgba(168,85,247,0.35)]
                transition-all
                duration-500
                hover:border-fuchsia-500/40
              "
            >
              <Image
                src={item.src}
                alt={item.title}
                width={1400}
                height={900}
                priority={index === 0}
                className="
                  h-auto
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 max-w-xl">
            <div className="inline-flex rounded-full bg-fuchsia-500/20 px-4 py-2 text-sm font-semibold text-fuchsia-300">
              Feature {index + 1}
            </div>

            <h3 className="mt-6 text-4xl font-black text-white md:text-5xl">
              {item.title}
            </h3>

            <p className="mt-6 text-lg leading-relaxed text-white/70">
              {item.desc}
            </p>

            <div className="mt-8 h-1 w-28 rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500" />
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

);
}
