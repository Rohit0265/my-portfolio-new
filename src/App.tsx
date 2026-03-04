import Fotter from "./components/Fotter"
import Hero from "./components/Hero"
import MyIntro from "./components/myIntro"
import Myprojects from "./components/myProjects"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div>
      <Navbar/>
      <MyIntro/>
      {/* <Myprojects/> */}
      <Hero/>
      
    </div>
  )
}

export default App