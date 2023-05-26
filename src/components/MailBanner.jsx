import React, { useEffect, useRef } from 'react'
// import gsap from 'gsap';

gsap.registerEffect(ScrollTrigger);


const MailBanner = () => {
    
    const mailScroll = useRef(null);

    useEffect(()=>{

        gsap.to(mailScroll.current, {
            scrollTrigger: {
              // markers: true,
              trigger: mailScroll.current,
              start: "top 100%",
              end: "top 30%",
              toggleActions: "start resume reverse resume",
              scrub: 3,
            },
            xPercent: -50,
            opacity: 1,
            ease: Circ.inOut,
            duration: 2,
          });

        gsap.set(mailScroll.current, {xPercent: -50}); 


        },[])

  return (
    <section className="mail_banner">
        <div className="mail_banner_container" ref={mailScroll}>
            <div className='inner_text'>Contact me → <a href="mailto:ashitaaaka@gmail.com">ashitaaaka@gmail.com</a></div>
            <div className='inner_text'>Contact me → <a href="mailto:ashitaaaka@gmail.com">ashitaaaka@gmail.com</a></div>
            <div className='inner_text'>Contact me → <a href="mailto:ashitaaaka@gmail.com">ashitaaaka@gmail.com</a></div>
            <div className='inner_text'>Contact me → <a href="mailto:ashitaaaka@gmail.com">ashitaaaka@gmail.com</a></div>
        </div>
    </section>
  )
}

export default MailBanner