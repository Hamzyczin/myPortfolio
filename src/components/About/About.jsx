import './About.css'
import { FaReact, FaNodeJs, FaSass, FaGithub, FaBootstrap, FaHtml5, FaCss3, FaJsSquare } from 'react-icons/fa';
import { SiTailwindcss, SiRedux, SiVite } from 'react-icons/si';

const About = () => {
    return (
        <div> <section id="about" className="about-section">
        <h2>About Me</h2>
        <p>
    I am Jinad Halimat Abiodun, a software developer with a keen interest in crafting innovative and efficient digital solutions. With a strong foundation in web development, front-end design, and an evolving expertise in AI, I am dedicated to transforming complex problems into seamless, user-centered applications. My hands-on experience in front-end frameworks, particularly React and Vite, has equipped me to build responsive and interactive web applications that enhance user experiences.
  </p>
  <p>
    Throughout my journey, I've developed a robust skill set encompassing not only technical proficiency but also essential soft skills such as project management, adaptability, and teamwork. I thrive in collaborative environments and am always eager to learn and adapt to new technologies. Currently, I am advancing my skills through immersive learning experiences, including my role as a Software Developer Intern and my coursework in virtual assistance and project management.
  </p>
  <p>
    My ultimate goal is to leverage my expertise to contribute to impactful projects, explore innovative solutions in fields like agriculture through technology, and create meaningful applications that solve real-world challenges.
  </p>
</section>
  <section id="about">
      <p>Technologies I've been working with recently</p>
      <div className="tech-stack">
        <FaReact size={40} color="#61DBFB" />
        <FaNodeJs size={40} color="#68A063" />
        {/* <FaSass size={40} color="#CC6699" /> */}
        <FaGithub size={40} color="#181717" />
        {/* <SiTailwindcss size={40} color="#38B2AC" /> */}
        {/* <FaBootstrap size={40} color="#563d7c" /> */}
        {/* <SiRedux size={40} color="#764ABC" /> */}
        <FaHtml5 size={40} color="#E34C26" />
        <FaCss3 size={40} color="#1572B6" />
        <FaJsSquare size={40} color="#F7DF1E" />
        <SiVite size={40} color="#646CFF" />
      </div>
    </section>
    </div>
  );
}


export default About