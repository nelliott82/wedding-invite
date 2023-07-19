import React, { useState, useEffect } from 'react';

const Background = ({ cardDiv }) => {
  const [scrollY, setScrollY] = useState(0);
  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    !isMobile && window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll, { passive: true });
    };
  }, []);

  const elementStyle = {
    position: 'fixed',
    top: 0,
    transform: `translateY(${(-scrollY * 0.15)}px)`,
  };

  const mobileElementStyle = {
    position: 'fixed',
    top: 0,
    transform: 'translateY(0)',
  };

  return (
    <div id="background" className="absolute inset-0" >
      {isMobile ?
        <div className="h-[250%] max-md:h-full w-full bg-cover bg-repeat bg-[url('./assets/eucalyptus.jpg')]" style={mobileElementStyle} />
        :
        <div className="h-[250%] max-md:h-full w-full bg-cover bg-repeat bg-[url('./assets/eucalyptus.jpg')]" style={elementStyle} />
      }
    </div>
  )
}

export default Background;