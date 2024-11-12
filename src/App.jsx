import "./index.css"
import Navbar from "./components/Navbar/Navbar.jsx"
import Hero from "./components/Hero/Hero.jsx"
import Stats from "./components/Stats/Stats.jsx"
import Categories from "./components/Categories/Categories.jsx"
import Courses from "./components/Courses/Courses.jsx"
function App() {
  return (
    <>
  <div className="design-container">  
    <Navbar/>
    <Hero/>
    
   </div>
   <Stats/>
    <Categories />
    <div className="design-container">  
   <Courses />
    
   </div>
    </>
  )
}

export default App
