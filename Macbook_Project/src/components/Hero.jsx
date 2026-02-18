import React, { useEffect, useRef } from 'react'

const Hero = () => {

    const videoRef = useRef();

    useEffect(()=>{
        if(videoRef.current) videoRef.current.playbackRate = 2;
    }, []);

  return (
    <section id='hero'>
        <div>
            <h1>MacBook Pro</h1>
            <img src="/title.png" alt="MacBook Title" />
        </div>

        <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline></video>

        <button>Buy</button>

        <p>From ₹14983.00/mo. with instant cashback and No Cost EMI or ₹99900.00 </p>

    </section>
  )
}

export default Hero         