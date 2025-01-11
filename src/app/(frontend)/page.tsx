import ParticleBackground from "@/components/ParticleBackground";
import BackgroundGradient from "@/components/BackgroundGradient";

export default function Home() {
  
  return (
    <div>
      <Background />
      <ParticleBackground />
    </div>
  );
}

function Background() {
  return (
    <div className="relative w-full h-screen overflow-clip">
      <BackgroundGradient className="absolute -right-96 -top-4"/>
      <BackgroundGradient className="absolute -left-96 top-[80vh]"/>
    </div>
  )
}