import Hero from "./components/Hero"
import Phrase from "./components/Phrase"
import CountDown from "./components/CountDown"
import Ceremony from "./components/Ceremony"
import DressCode from "./components/DressCode"
import Inolvidable from "./components/Inolvidable"
import Venis from "./components/Venis"
import Gracias from "./components/Gracias"
import Regalo from "./components/Regalo"
import Footer from "./components/Footer"
import Music from "./components/Music"

import foto3 from "/foto3.jpeg"
import foto2 from "/foto2.jpeg"
import Canciones from "./components/Canciones"


function App() {


  return (
    <div className="flex flex-col items-center w-full lg:w-[700px] m-auto">
      <Hero />
      <Music />
      <Phrase />
      <CountDown />
      <Ceremony />
      <img src={foto3} alt="foto1" className="w-full mt-10" />
      <DressCode />
      <img src={foto2} alt="foto2" className="w-full mt-10" />
      <Canciones />
      <Inolvidable />
      <Venis />
      <Regalo />
      <Gracias />
      <Footer />
    </div>
  )
}

export default App
