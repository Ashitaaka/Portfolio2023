import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import ProjectDetails from './components/ProjectDetails'

//to implement 'ScrollTriger GSAP'
gsap.registerEffect(ScrollTrigger); 

function App() {
    
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
      {/* <Home 
        isBlurred = {isBlurred}
        setIsBlurred = {setIsBlurred}
        expanded = {expanded}
        setExpanded = {setExpanded}
        setSelectedId = {setSelectedId}
      /> */}
      {/* <ToDoList 
        isBlurred = {isBlurred}
        setIsBlurred = {setIsBlurred}
        expanded = {expanded}
        setExpanded = {setExpanded}
        selectedId = {selectedId}
      /> */}
    </div>
  )
}

export default App
