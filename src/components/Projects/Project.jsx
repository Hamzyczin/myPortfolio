import React from 'react';
import './Project.css';
import funero from '../../assets/funero.jpg';
import country from '../../assets/explore.jpg';
import cart from '../../assets/cart.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "A Furniture Design Website",
      description: "Furniro is a furniture website designed with a user-centered approach, focusing on UI/UX design principles to create an intuitive shopping experience. The project emphasizes clean layouts, easy navigation, and aesthetic appeal, allowing users to explore a wide range of furniture options effortlessly. With attention to both form and function, Furniro aims to provide users with an enjoyable browsing and purchasing experience, making it easy to find, compare, and buy furniture.",
      url: "https://hamzyczin.github.io/milestone/",
      image: funero
    },
    {
      id: 2,
      name: "REST Country API",
      description: "An interactive web application built using the REST Countries API, allowing users to explore detailed information about countries worldwide. The application provides essential data like population, area, capital, languages, currencies, and the national flag. With a clean and responsive design, users can easily navigate the map to learn about each country. This project demonstrates skills in API integration, front-end development, and data visualization, offering users a smooth and engaging experience while exploring world geography.",
      url: "https://hamzyczin.github.io/exploreCountry/",
      image: country
    },
    {
      id: 3,
      name: "An E-commerce Product Page for Desserts",
      description: "Dessert Delight  product page is a specialized e-commerce product page designed for dessert lovers. This project provides an enticing browsing experience, showcasing a range of delectable dessert items with high-quality images, detailed descriptions, and pricing information. The product page allows users to seamlessly add items to their cart, view item specifics, and proceed to checkout. Built with an emphasis on responsive design, Dessert Delight offers a smooth user experience across devices, making it easy for customers to indulge in their favorite sweets online.",
      url: "https://hamzyczin.github.io/cartShopping/",
      image: cart
    }
  ];

  return (
    <section id="projects">
      <h2 className="project">Projects</h2>
      <p>Some of my recent work:</p>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.name} className="project-image" />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <p className='git'>View on GitHub</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
