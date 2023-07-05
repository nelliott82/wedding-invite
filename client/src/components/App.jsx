import React, { useState, useEffect } from 'react';
import SaveTheDate from './cards/SaveTheDate.jsx';

const App = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isMobile = window.innerWidth <= 768;

  const elementStyle = {
    position: 'fixed',
    top: 0,
    transform: isMobile ? 'translateY(0)' : `translateY(${(-scrollY * 0.2)}px)`,
  };

  return (
    <>
      <div className="relative">
        <div id="background" className="absolute inset-0" >
          <div className="h-[193%] max-md:h-full w-full bg-cover bg-repeat bg-[url('./assets/eucalyptus.jpg')]" style={elementStyle} />
        </div>
        <div id="content" className="flex flex-wrap flex-col pt-16 relative overflow-y justify-center content-center overflow-y-scroll">
          <SaveTheDate/>
        </div>
      </div>
    </>
  )
}

export default App;