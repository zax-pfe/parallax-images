"use client";
import "../styles/projects.css";
import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    title: "salar de atacama",
    src: "salar_de_atacama.jpg",
  },
  {
    title: "vale de luna",
    src: "valle_de_la_muerte.jpeg",
  },
  {
    title: "miskanti lake",
    src: "miscani_lake.jpeg",
  },
  {
    title: "men zats a good project",
    src: "miniques_lagoon.jpg",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(0);

  return (
    <div className="projects">
      <div className="projects-container">
        <div className="project-element-image">
          <Image
            src={`/images/${projects[selectedProject].src}`}
            alt="project cover"
            fill={true}
          />
        </div>
        <div className="project-element-text first">
          orem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisqu
        </div>

        <div className="project-element-text second">
          eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
          Provident similique accusantium nemo autem. Veritatis obcaecati
          tenetur iure eius earum ut molest
        </div>
      </div>
      <div className="projects-menu">
        <div className="project-menu-item" />
        {projects.map((project, index) => {
          return (
            <div
              onMouseOver={() => setSelectedProject(index)}
              key={index}
              className="project-menu-item"
            >
              {project.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}
