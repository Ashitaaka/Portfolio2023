import React from 'react'
import contactStamp from '../assets/images/contact_stamp.svg'

const Contact = () => {
  return (
    <div className="contact_container">
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
