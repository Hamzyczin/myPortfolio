import React from 'react';
import './Project.css';
import funero from '../../assets/funero.jpg'
import country from '../../assets/explore.jpg'
import cart from '../../assets/cart.jpg'



const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "A FURNITURE CLONING APP",
      description: "Furniro is a responsive and engaging furniture purchasing app clone, designed to deliver a seamless shopping experience for users. The app includes essential e-commerce functionalities, such as product browsing, detailed item descriptions, and an efficient checkout process. With a focus on clean and modern UI design, Funero allows users to explore and manage various furniture items within an intuitive interface. Developed using [mention specific technologies, e.g., React, CSS, etc.], this project demonstrates expertise in front-end development, component-based architecture, and UI/UX design for e-commerce applications..",
      url: "https://hamzyczin.github.io/milestone/",
      image: {funero}

    },
    {
      id: 2,
      name: "COUNTRY EXPLOIRATION MAP",
      description: "A dynamic web application that allows users to explore countries around the world with interactive features. The map provides essential information about each country, including population, area, and capital city, along with quick facts and flag visuals. Built with responsive design in mind, this tool is ideal for geography enthusiasts, travelers, or anyone curious about world facts. By integrating APIs for real-time data, the application ensures up-to-date information and enhances the user experience through interactive elements and clean visuals.",
      url: "https://hamzyczin.github.io/exploreCountry/",
      
    },
    {
      id: 3,
      name: "DESSERT SHOPPING CART",
      description: "A delightful shopping cart application designed specifically for dessert enthusiasts. This project allows users to browse a variety of desserts, add items to their cart, and adjust quantities before checkout. With a focus on simplicity and ease of use, the application offers a smooth and enjoyable experience for users craving sweet treats. Built with a responsive design, it showcases key features like product selection, real-time cart updates, and total price calculation. This project highlights practical skills in front-end development, as well as knowledge of e-commerce functionality tailored to a specific niche.",
      url: "https://hamzyczin.github.io/cartShopping/",
      // image: country
    }
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <p>Some of my recent work:</p>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
