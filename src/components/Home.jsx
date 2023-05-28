import React from "react";
import Project from "./Project";
import Header from "./Header"
import About from "./About";
import MailBanner from "./MailBanner";
import Stack from "./Stack";
import Footer from "./Footer";
import Contact from "./Contact";

import ProjectDatas from "../datas/ProjectsDatas";

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
        {ProjectDatas.map((project) =>(
          <Project 
            key={project.id}
            {...project}
          />
        ))}
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
