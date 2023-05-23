import React from "react";
import { Link } from "react-router-dom";
import { CgScrollV } from "react-icons/cg";
import Project from "./Project";
import Nav from "./Nav";

function Home({
  isBlurred,
  setIsBlurred,
  expanded,
  setExpanded,
  setSelectedId,
}) {
    
  return (
    <div className={isBlurred ? "App blurred" : "App"}>
      {/* Navigation bar */}
      <Nav />

      {/* Title and intro */}
      <h1 className="title">Oli<br />vier<br />Gom<br />ez</h1>
      <p className="intro">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias,
        laboriosam ut delectus quae repudiandae earum.
      </p>

      {/* Scroll icon */}
      <div className="scroll">
        <CgScrollV size={30} />
      </div>

      {/* Projet container */}
      <div className="projects-container">
        <Project
          isBlurred={isBlurred}
          setIsBlurred={setIsBlurred}
          expanded={expanded}
          setExpanded={setExpanded}
          setSelectedId={setSelectedId}
          projectId={1}
          projectLink={"todolist"}
          projectName={"To Do List"}
          imageUrl={"src/assets/images/pexels-polina-kovaleva-5717415.jpg"}
          projectType={"Training"}
          projectClient={"Personnal"}
        />
        <Project
          projectId={2}
          projectName={"Spotcast"}
          imageUrl={"src/assets/images/pexels-polina-kovaleva-5717415.jpg"}
          projectType={"Training"}
          projectClient={"Personnal"}
        />
        <Project
          projectId={3}
          projectName={"Undefined"}
          imageUrl={"src/assets/images/pexels-polina-kovaleva-5717415.jpg"}
          projectType={"School project"}
          projectClient={"Personnal"}
        />
        <Project
          projectId={4}
          projectName={"Speech"}
          imageUrl={"src/assets/images/pexels-polina-kovaleva-5717415.jpg"}
          projectType={"School project"}
          projectClient={"Personnal"}
        />
      </div>
    </div>
  );
}

export default Home;
