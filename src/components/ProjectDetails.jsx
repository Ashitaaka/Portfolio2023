import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import ProjectsDatas from '../datas/ProjectsDatas'

const ProjectDetails = () => {

  const { id } = useParams();
  // const [projectDatas] = ProjectsDatas.filter((el) => el.title === id);

  const [projectDatas, setProjectDatas] = useState(null);
  // get the project datas

  useEffect(()=>{

    setProjectDatas(ProjectsDatas.find((el) => el.title === id));

  },[id])

  
    if(projectDatas===null){
      return null;
    }

  // Styles specific to each project like bg-color, etc.
  const styles = {
    hr:{
      borderTop: `1px solid ${projectDatas.color}`,
    },
    hr2:{
      borderTop: `1px solid ${projectDatas.color}`,
      borderBottom: `1px solid ${projectDatas.color}`
    },
    stack: {
      border: `${projectDatas.color} solid clamp(1px, .2vw, 2px)`
    },
  };
  
  return (

  <section 
    className="project_details"
    style={{
      backgroundColor: `${projectDatas.backgroundColor}`,
      color: `${projectDatas.color}`
    }}
  >

      <Link 
        to={'/'} 
        className='back_home_btn'
        style={{ color: `${projectDatas.color}`}}
      >
        ← HOME
      </Link>

      {/* Project title*/}
      <div className="project_title">
        <h1>
          {projectDatas.title}
        </h1>
        <p>
          {projectDatas.subtitle}
        </p>
      </div>

      {/* Project infos*/}
      <div className="project-card-infos">

          <p className="arrow">↓</p>

          <ul className="project_infos_table">
            <li className='hr' style={styles.hr}>
              <p>Client</p>
              <p className="right-align">{projectDatas.client}</p>
            </li>
            <li className='hr2' style={styles.hr2}>
              <p>Year</p>
              <p className="right-align">{projectDatas.year}</p>
            </li>
          </ul>

          <div className="description">
            <p>{projectDatas.description}</p>
            <div className="project_links">
            {projectDatas.demoLink ?
              <a 
                href={projectDatas.demoLink} target="blank"
                style={{ color: `${projectDatas.color}`}}
              >
                  <p>Live demo </p>
              </a>
              : null
            }
            {projectDatas.githubLink ?
              <a 
              href={projectDatas.githubLink} target="blank"
              style={{ color: `${projectDatas.color}`}}
              >
                <p> 
                  {projectDatas.demoLink 
                    ? `- Github repository` 
                    : "Github repository"
                  }
                </p>
              </a>
              : null
            }    
            </div>
          </div>

      </div>

      {/* Project images */}
      <div className="project_images">
        {/* <img src={projectDatas.images.picture} alt="" /> */}
        <video className="project_video " id={id} controls >
         <source src={`${projectDatas.images.picture}?id=${id}`} type="video/mp4"/>
        </video>
      </div>

      {/* Project Stack */}
      <div className="project_stack">
        <ul>
          {
            projectDatas.stack.map((stack, index) => (
              <li 
                key={index} 
                style={styles.stack}
                className='stack'
              >
                {stack}
              </li>
            ))
          }
        </ul>
      </div>

      {/* Footer */}
      <div className={projectDatas.id === 1 ? "project_single_footer project_footer" : "project_footer"}>
        {projectDatas.id > 1 
          ? <Link 
              to={`/projects/${ProjectsDatas[projectDatas.id - 2].title}`}
              className="previous_project"
              style={{ color: `${projectDatas.color}`}}
            >
              <h2>{ProjectsDatas[projectDatas.id - 2].title}</h2>
              <div className="previous_button">
                <p>←</p>
                <p>Projet précédent</p>
              </div>
            </Link>
          : null
        }

        {projectDatas.id < ProjectsDatas.length 
          ? <Link 
              to={`/projects/${ProjectsDatas[projectDatas.id].title}`}
              className="next_project"
              style={{ color: `${projectDatas.color}`}}
            >
             <h2>{ProjectsDatas[projectDatas.id].title}</h2>
              <div className="next_button">
                <p>Projet suivant</p>
                <p>→</p>
              </div>
            </Link>
          : null
        } 
      </div>

  </section>

  )
}

export default ProjectDetails