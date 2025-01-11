import ParticleBackground from "@/components/ParticleBackground";
import BackgroundGradient from "@/components/BackgroundGradient";
import NavigationBar from "@/components/NavigationBar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="relative">
      <Background />
      <NavigationBar />
      <Hero />
      <ParticleBackground />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute w-full h-full overflow-clip -z-10">
      <BackgroundGradient className="absolute -right-96 -top-4"/>
      <BackgroundGradient className="absolute -left-96 top-[80vh]"/>
    </div>
  )
}