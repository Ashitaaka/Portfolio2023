import React from "react";
import Project from "./Project";
import Header from "./Header"
import About from "./About";
import MailBanner from "./MailBanner";
import Stack from "./Stack";
import Footer from "./Footer";
import Contact from "./Contact";

function Home({
  isBlurred,
  setIsBlurred,
  expanded,
  setExpanded,
  setSelectedId,
}) {
    
  return (
    <div className={isBlurred ? "App blurred" : "App"}>
      
       {/* Title - intro - nav */}
       <Header />

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

      {/* About */}
      <About />
      <MailBanner />
      <Stack />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
      
    </div>
  );
}

export default Home;
