import { useContext } from "react"
import Navbar from "./components/Navbar"
import { AppContext } from "./context/AppContext"

function App() {
  const { darkMode } = useContext(AppContext)
  return (
    <div 
    style={{
      backgroundColor : darkMode ? "black" : "white",
      color: darkMode ? "white" : "black"
    }}
    className="mx-auto w-1/2 p-3 border-l border-r ">
      <Navbar />
    </div>
  )
}

export default App
