"use client";
import "../styles/projects.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion, useInView } from "framer-motion";

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

const wrapperVariants = {
  visible: { x: 0, opacity: 1, transition: { staggerChildren: 0.1 } },
  hidden: { x: 50, opacity: 0 },
};

const paraVariants = {
  visible: { x: 0, opacity: 1, transition: { duration: 0.3 } },
  hidden: { x: 50, opacity: 0 },
};

export default function Projects() {
  const ref = useRef(null);

  const isInView = useInView(ref, { amount: 0.9 });
  const [selectedProject, setSelectedProject] = useState(0);

  return (
    <div ref={ref} className="projects">
      <div className="projects-container">
        <div className="test-div">
          <div className="project-element-image">
            <Image
              src={`/images/${projects[selectedProject].src}`}
              alt="project cover"
              fill={true}
              // className={`image-to-pin ${sticky}`}
              // className="sticky top-0"
            />
          </div>
        </div>
        <div className="project-element-text-container">
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
        <motion.div
          variants={wrapperVariants}
          whileInView="visible"
          initial="hidden"
          ref={ref}
          className="projects-menu"
        >
          <div className="project-menu-item" />
          {projects.map((project, index) => {
            return (
              <div key={index} className="project-menu-item">
                <motion.p
                  variants={paraVariants}
                  onMouseOver={() => setSelectedProject(index)}
                >
                  {project.title}
                </motion.p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
