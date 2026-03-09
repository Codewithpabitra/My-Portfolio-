import { useContext } from "react"
import Navbar from "./components/Navbar"
import { AppContext } from "./context/AppContext"
import Hero from "./components/Hero"
import Journey from "./components/Journey"
import Projects from "./components/Projects"
import TechStacks from "./components/TechStacks"
import Newsletter from "./components/Newsletter"
import Card from "./components/cards/Card"
import GlowCard from "./components/cards/GlowCard"
import GlowGridCard from "./components/cards/GlowGridCard"
import InsaneGlowCard from "./components/cards/InsaneGlowCard"
import GlowCard2 from "./components/cards/GlowCard2"
import UltraCard from "./components/cards/UltraCard"
import HeroCard from "./components/cards/HeroCard"
import FloatingGlassCard from "./components/cards/FloatingGlassCard"
import NeonGlowCard from "./components/cards/NeonGlowCard"
import FrostedGlassCard from "./components/cards/FrostedGlassCard"
import BlinkGridCard from "./components/cards/BlinkGridCard"
import MoveLightCard from "./components/cards/MoveLightCard"


function App() {
  const { darkMode } = useContext(AppContext)
  return (
    <div 
    style={{
      backgroundColor : darkMode ? "black" : "white",
      color: darkMode ? "white" : "black",
      minHeight: "100vh",
      height: "auto"
    }}
    >
      <div className={`sm:mx-auto w-[75%] py-5 sm:border-r sm:border-l ${!darkMode ? 'border-r-zinc-300 border-l-zinc-300' : 'border-r-zinc-800 border-l-zinc-800'} `}>
      <Navbar />
      <Hero />
      <Journey />
      <Projects />
      <TechStacks />
      <Newsletter />
      </div>
    </div>

    // <div className="flex justify-center items-center min-h-screen gap-5  ">

    //   {/* <Card /> 
    //   <BlinkGridCard />
    //   <MoveLightCard /> */}
    //   {/* <GlowCard />
    //   <GlowGridCard />
    //   <InsaneGlowCard />
    //   <GlowCard2 /> */}
    //   {/* <UltraCard />
    //   <HeroCard /> */}
    //   {/* <HeroR3FCard /> */}
    //   {/* <FloatingGlassCard />
    //   <NeonGlowCard />
    //   <FrostedGlassCard /> */}
     
    // </div>
  )
}

export default App
