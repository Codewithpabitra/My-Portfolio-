import { useContext } from "react"
import Navbar from "./components/Navbar"
import { AppContext } from "./context/AppContext"
import Hero from "./components/Hero"
import Journey from "./components/Journey"
import Projects from "./components/Projects"
import TechStacks from "./components/TechStacks"
import Newsletter from "./components/Newsletter"

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
  )
}

export default App
