import "./index.css"
import Navbar from "./components/Navbar/Navbar.jsx"
import Hero from "./components/Hero/Hero.jsx"
import Stats from "./components/Stats/Stats.jsx"
import Categories from "./components/Categories/Categories.jsx"
function App() {
  return (
    <>
  <div className="design-container">  
    <Navbar/>
    <Hero/>
    
   </div>
   <Stats/>
   <div className="design-container">  
    <Categories />
   </div>
    </>
  )
}

export default App
