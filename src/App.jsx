import { useState } from 'react'
import './App.css'
import About from './components/About/About'
import Navbar from './components/NavBar/Navbar'
import Exp from './components/Experience/Exp'
import Footer from './static/Footer/Footer'
import Project from './components/Projects/Project'
import Header from './static/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <Header/>
        <About/>
        <Exp/>
        <Project/>
        <Footer/>
      </div>
       
    </>
  )
}

export default App
