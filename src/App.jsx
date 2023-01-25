
import NavBar from "./navBar"
import hiImage from "./assets/hi.webp"
import Projects from "./content"

function App() {
  return (
    <div className="h-screen bg-gray-500  ">
    <NavBar/>
      <div class="bg-slate-700 grid grid-cols-2 h-5/6">
        <div className=" text-9xl p-20 pt-40">
          Hi, <br/>I'm <span class="text-slate-50">Thej Zain</span>
        </div>
        <div className="grid place-content-center">
          <img src={hiImage} width="800px "/>
        </div>
      </div>
      <Projects/>
    </div>
  )
}

export default App
