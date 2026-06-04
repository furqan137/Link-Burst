import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import Gameplay from "@/components/Gameplay";
import { Levels } from "@/components/Levels";
import { Boosters } from "@/components/Boosters";
import { Rewards } from "@/components/Rewards";
import { Gallery } from "@/components/Gallery";
import { Reviews } from "@/components/Reviews";
import DownloadCTA from "@/components/DownloadCTA";
import { Download } from "@/components/Download";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Page() {
return (
<> <Navbar />

  <main className="overflow-hidden bg-[#0A0A14] pt-16">
    <Hero />

    <Features />

    <Gameplay />

    <Levels />

    <Boosters />

     <DownloadCTA />

    <FAQ />
  </main>

  <Footer />
</>


);
}
