import { useContext } from "react"
import Navbar from "./components/Navbar"
import { AppContext } from "./context/AppContext"
import Hero from "./components/Hero"

function App() {
  const { darkMode } = useContext(AppContext)
  return (
    <div 
    style={{
      backgroundColor : darkMode ? "black" : "white",
      color: darkMode ? "white" : "black",
      height: "100vh"
    }}
    >
      <div className={`mx-auto w-[75%] py-5 border-r border-l ${!darkMode ? 'border-r-zinc-300 border-l-zinc-300' : 'border-r-zinc-800 border-l-zinc-800'} `}>
      <Navbar />
      <Hero />
      </div>
    </div>
  )
}

export default App
