

import Particles from "@/components/Particles";
import Navbar from "./Navbar/Navbar";
import HeroPage from "./HeroPage/HeroPage";
import { useFetchApi } from "./api/useFetchApi";


  export default function Home() {
    
  
  return (
    <>
      {/* BACKGROUND LAYER: Tetap di belakang saat scroll */}
      <div className="fixed inset-0 z-0 overflow-hidden bg-slate-950">
 <div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Particles
    particleColors={["#2fe9e6"]}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover
    alphaParticles={false}
    disableRotation={false}
    pixelRatio={1}
/>
</div>
      </div>

      {/* NAVBAR: Pastikan z-index lebih tinggi dari background */}
      <nav className="relative z-50">
        <Navbar />
      </nav>

      {/* CONTENT LAYER */}
      <main className="relative z-10 min-h-[400vh] px-10 text-white">
       
        <section className="min-h-screen border-b border-white/10 flex items-center justify-center mt-8">
       
          <HeroPage />
          
        </section>

        <section className="min-h-screen flex items-center justify-center">
          <h2 className="text-4xl">Content Section</h2>
        </section>
      </main>
    </>
  );
}