import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'; 

const NavButton = ({anchorLink, navButtonTitle}) => {

    const buttonTitle = useRef(null);
    const buttonBackground = useRef(null);

    const aboutBtnAnimationIn = () =>{
        gsap.to(buttonBackground.current, {duration:.4, y:"-99%", ease: 'power1.easeOut'})
        gsap.to(buttonTitle.current, {delay:.025, duration:.4, opacity:1, y:"100%", ease: 'power2.easeOut'})
    }
    const aboutBtnAnimationOut = () =>{
        gsap.to(buttonBackground.current, {delay:.03, duration:.5, y:0, ease: 'power1.easeOut'})
        gsap.to(buttonTitle.current, {duration:.5, y:0,opacity:0 , ease: 'power1.easeOut'})
    }

  return (
    <Link
        to={anchorLink}
        className="nav-button" 
        onMouseEnter={aboutBtnAnimationIn} 
        onMouseLeave={aboutBtnAnimationOut}
    >
        <p>{navButtonTitle}</p>
        <p className='white-link' ref={buttonTitle}>{navButtonTitle}</p>
        <div className="bg-link" ref={buttonBackground}></div>
    </Link>
  )
}

export default NavButton