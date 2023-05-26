import React, { useEffect, useRef } from 'react'
import { CgScrollV } from "react-icons/cg";
import gsap from 'gsap';
import NavButton from './NavButton';
import headerStamp from '../assets/images/header_stamp.svg'

const Header = () => {

    const scrollBtnRef = useRef(null);

    useEffect(()=>{

        gsap.fromTo(
            scrollBtnRef.current,
            { y:-6 },
            { duration: 1, y: 6, yoyo: true, repeat: -1, ease: 'power1.inOut' }
        );

    }, []);

  return (
    <header className='header'>
        {/* Title - intro - nav */}
        <div className="title-container">
            <p className="surtitre">OLIVIER GOMEZ PORTFOLIO</p>

            <div className="title-nav">

                <NavButton navButtonTitle="ABOUT" anchorLink="#"/>

                <div className="title">
                    <img src={headerStamp} alt="developper stamp" className='header_stamp'/>
                    <h1>
                        Oli<br />
                        vier<br />
                        Gom<br />
                        ez
                    </h1>
                </div>
                
                <NavButton navButtonTitle="CONTACT" anchorLink="#"/>

                <div className='mobile-nav'>
                    <a href="#" className="nav-button-mobile">ABOUT</a>
                    <a href="#" className="nav-button-mobile">CONTACT</a>
                </div>

            </div>
            <p className="intro">
                Explorez l'univers créatif d'un développeur web et graphiste passionné 
            </p>
        </div>

        {/* Scroll icon */}
        <div className="scroll" ref={scrollBtnRef}>
            <CgScrollV size={30} />
        </div>
    </header>
  )
}

export default Header