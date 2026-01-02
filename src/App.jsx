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
      <div className="mx-auto w-1/2 p-3">
      <Navbar />
      <Hero />
      </div>
    </div>
  )
}

export default App
