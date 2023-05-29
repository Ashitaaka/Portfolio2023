import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import ProjectDetails from './components/ProjectDetails'

//to implement 'ScrollTriger GSAP'
gsap.registerEffect(ScrollTrigger); 

function App() {
    
  return (
    <div>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </div>
  )
}

export default App
