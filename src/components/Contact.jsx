import React, { useEffect } from 'react'
import contactStamp from '../assets/images/contact_stamp.svg'
import { Element } from 'react-scroll'

const Contact = () => {
   
  useEffect(()=>{
    const contactsAll = gsap.utils.toArray(".contact_text")
    console.log(contactsAll);

    contactsAll.forEach((el) => {
      gsap.fromTo(el, 
        {
          opacity: 0,
          y:50
        },
        {
        scrollTrigger: {
          trigger: el,
          start: "top 100%",
          end: "top 85%",
          once: true // animation happen only once 
        },
        y: 0,
        opacity: 1,
        ease: Circ.inOut,
        duration: .5,
      });
    });
  },[])

  return (
    <div className="contact_container">
      <Element name="contact-section" className="element"></Element>
      {/* anchor for react-scroll */}
      <img src={contactStamp} alt="Contactez-moi" />
      <p className="contact_text">Olivier Gomez</p>
      <p className="contact_text">Développement web</p>
      <p className="contact_text">& direction artistique</p>
      <p className="contact_text">
        <a href="mailto:ashitaaaka@gmail.com">ashitaaaka@gmail.com</a>
      </p>
      <p className="contact_text">06-58-55-36-41</p>
    </div>
  )
}

export default Contact
