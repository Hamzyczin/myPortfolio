import './Navbar.css'
const Navbar = () => {
    return (
        <div><nav className="navbar">
        <div className="navbar-logo">
          <a href="#home">Jinad Halimat Abiodun</a>
        </div>
        <ul className="navbar-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav></div>
    )
}

export default Navbar