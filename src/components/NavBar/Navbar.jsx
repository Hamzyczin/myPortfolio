import './Navbar.css'
// import mylogo from '../../assets/mylogo-removebg-preview.png'
const Navbar = () => {
    return (
        <div><nav className="navbar">
        <div className="navbar-logo">
          {/* <img src={mylogo} alt="" /> */}
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