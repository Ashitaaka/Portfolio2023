import Home from './components/Home';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import ToDoList from './components/ToDoList';

//to implement 'ScrollTriger GSAP'
gsap.registerEffect(ScrollTrigger); 

function App() {

  const [isBlurred, setIsBlurred] = useState(false);
  const [expanded, setExpanded] = useState("");
  const [selectedId, setSelectedId] = useState();
    
  return (
    <div>
      <Home 
        isBlurred = {isBlurred}
        setIsBlurred = {setIsBlurred}
        expanded = {expanded}
        setExpanded = {setExpanded}
        setSelectedId = {setSelectedId}
      />
      <ToDoList 
        isBlurred = {isBlurred}
        setIsBlurred = {setIsBlurred}
        expanded = {expanded}
        setExpanded = {setExpanded}
        selectedId = {selectedId}
      />
    </div>
  )
}

export default App
