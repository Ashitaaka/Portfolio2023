import React from "react"
import { Link } from 'react-router-dom';

function ToDoList({isBlurred, setIsBlurred, expanded, setExpanded, selectedId}){
    console.log(selectedId);
    const handleBgBlurred = () => isBlurred ? setIsBlurred("") : setIsBlurred("blurred");
    const handleCardExpand = () => expanded ==="" ? setExpanded("expanded") : setExpanded(""); 

    return(
        <main className={expanded ==="expanded" && selectedId === 1 ? "project-card expanded" : "project-card"}>
                {/* Project header*/}
                <section className="project-card-head">
                    <Link 
                        to={'/'}
                        onClick={()=>{
                            handleBgBlurred();
                            handleCardExpand();
                        }}>
                        <div className="closing-cross"></div>
                    </Link>
                    <h2>
                        To Do List
                    </h2>
                    {/* Project infos*/}
                    <div className="project-card-infos">
                        <p className="arrow">↓</p>
                        <ul>
                            <li>
                                <p>Client</p>
                                <p className="right-align">Personnal</p>
                            </li>
                            <li>
                                <p>Year</p>
                                <p className="right-align">2023</p>
                            </li>
                        </ul>
                        <div className="description">
                            <p>Projet personnel de création d’une Todolist en javascript vanilla avec stockage des données en LocalStorage</p>
                            <p className="project-website">
                                <a href="https://ashitaaka.github.io/Todolist/" target="blank">www.todolist.com</a>
                            </p>
                        </div>
                    </div>
                </section>

                {/* All the project pictures here*/}
                <section className="project-card-content">
                    <img src="src/assets/images/todo-screenshot.png" alt="" />
                    <img src="src/assets/images/todo-screenshot.png" alt="" />
                </section>

                {/* Project tags*/}
                <section className="project-card-tags">
                        <ul className="tags">
                            <li>Javascript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                </section>

                {/* Project footer*/}
                <section className="project-card-footer">

                </section>
        </main>
    )
}

export default ToDoList