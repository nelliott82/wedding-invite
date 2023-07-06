import React, { useState, useEffect } from 'react';
import SaveTheDate from './cards/SaveTheDate.jsx';
import Ceremony from './cards/Ceremony.jsx';
import Reception from './cards/Reception.jsx';
import GeneralInfo from './cards/GeneralInfo.jsx';

const App = () => {
  const [scrollY, setScrollY] = useState(0);
  const cardDiv = "relative bg-green-200 bg-opacity-50 hover:bg-opacity-75 w-10/12 inline-block text-center p-5 mb-12";

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll, { passive: true });
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
          <SaveTheDate cardDiv={cardDiv} />
          <Ceremony cardDiv={cardDiv} />
          <Reception cardDiv={cardDiv} />
          <GeneralInfo cardDiv={cardDiv} />
        </div>
      </div>
      <a href='https://dryicons.com/free-icons/church'> Icon by Dryicons </a>
      <a href="https://www.vecteezy.com/free-vector/line-break">Line Break Vectors by Vecteezy</a>
    </>
  )
}

export default App;