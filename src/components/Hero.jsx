import { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 2;
  }, []);

  return (
    <section id="hero">
      <div>
        <h1>MacBook Pro</h1>
        <img src="/title.png" alt="title" />
      </div>

      <video
        src="/videos/hero.webm"
        ref={videoRef}
        muted
        autoPlay
        playsInline
      />

      <button>buy</button>
      <p>From $1599 or $135/mo for 12 months.</p>
    </section>
  );
};

export default Hero;
