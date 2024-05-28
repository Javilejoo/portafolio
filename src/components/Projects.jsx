import React from "react";
import CustomCard from "./Card";
import '../Projects.css'; 

import blogOnePieceImage from '../assets/BLOG ONE PIECE.jpg';
import chatImage from '../assets/chat grupal.jpg';
import dibujoCss from '../assets/dibujo css.jpg';
import historiaZoro from '../assets/historia zoro.jpg';
import rankgames from '../assets/Rank games.jpg';

function Projects() {
  const projects = [
    {
        image: blogOnePieceImage,
        title: "Blog de One Piece",
        description: "blog del anime 'One Piece' que trabaja junto con una Api en la que se pueden hacer operaciones CRUD",
        technologies: ["React", "MySQL", "JavaScript","Node.js","Express","Vite", "CSS","HTML"],
        link: "https://proyecto1-blog-one.vercel.app/"
    },{
        image:rankgames,
        title:"Rank Games",
        description:"Ranking de juegos en el que se pueden agregar, editar y eliminar juegos",
        technologies:["JavaScript", "MongoDB", "Node.js","Angular", "Express"],
        link:"https://github.com/BryanEspana/RankingOfGames-BACKEND"
    },
    {
        image:chatImage,
        title:"Chat grupal",
        description:"Chat grupal en tiempo real en el que se pueden enviar mensajes y archivos multimedia",
        technologies: ["JavaScript", "HTML", "CSS", "MySQL"],
        link: "http://3.13.174.55:3517/"
    },
    {
        image:dibujoCss,
        title:"Dibujo Css",
        description:"Un buho hecho con css y animaciones",
        technologies:["CSS", "HTML"],
        link: "http://3.13.174.55:3417/"
    },
    {
        image:historiaZoro,
        title:"Historia de Zoro",
        description:"Historia de uno de los personajes de One Piece, Roronoa Zoro",
        technologies:["CSS", "HTML"],
        link: "http://3.13.174.55:3317/"
    }
  ];

  return (
    <section className="projects" id="projects">
      <h1>Projects</h1>
      <div className="cards-container">
        {projects.map((project, index) => (
          <CustomCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
