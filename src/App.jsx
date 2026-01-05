import { useContext } from "react"
import Navbar from "./components/Navbar"
import { AppContext } from "./context/AppContext"
import Hero from "./components/Hero"
import Journey from "./components/Journey"
import Projects from "./components/Projects"
import TechStacks from "./components/TechStacks"

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
      <div className={`mx-auto w-[75%] py-5 border-r border-l ${!darkMode ? 'border-r-zinc-300 border-l-zinc-300' : 'border-r-zinc-800 border-l-zinc-800'} `}>
      <Navbar />
      <Hero />
      <Journey />
      <Projects />
      <TechStacks />
      </div>
    </div>
  )
}

export default App
