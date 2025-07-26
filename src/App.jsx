import { useState } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Album from './components/Album/Album'
import "@fontsource/poppins"; // Defaults to 400 weight
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/700.css";
import Navbar from './components/Header/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Hero />
      <Album />
    </div>
  )
}

export default App
