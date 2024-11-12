import "./index.css"
import Navbar from "./components/Navbar/Navbar.jsx"
import Hero from "./components/Hero/Hero.jsx"
import Stats from "./components/Stats/Stats.jsx"

function App() {
  return (
    <>
  <div className="design-container">  
    <Navbar/>
    <Hero/>
    
   </div>
   <Stats/>
   <div className="design-container">  
    <Navbar/>
    <Hero/>
    
   </div>
    </>
  )
}

export default App
