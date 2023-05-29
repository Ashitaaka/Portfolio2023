import React, { useEffect } from 'react'

gsap.registerEffect(ScrollTrigger);

const Stack = () => {
 
  return (
    <div className='stack_container'>
        <p className="stack">React JS</p>
        <p className="stack">Javascript</p>
        <p className="stack">HTML 5</p>
        <p className="stack">CSS 3</p>
        <p className="stack">Wordpress</p>
        <p className="stack">Node JS</p>
        <p className="stack">Express JS</p>
        <p className="stack">SQL</p>
        <p className="stack">Git</p>
        <p className="stack">Github</p>
        <p className="stack">Suite Adobe</p>
    </div>
  )
}

export default Stack