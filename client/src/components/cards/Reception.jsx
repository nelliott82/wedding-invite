import React, { useEffect } from 'react';

const Reception = ({ cardDiv, buttons, text }) => {
  const locationURL = 'https://www.google.com/maps/place/La+Misi%C3%B3n+Hotel+Boutique/@-25.2953879,-57.5820629,15z/data=!4m20!1m10!3m9!1s0x945da89a2255a9b7:0x2f3b74e1bdf4e746!2sLa+Misi%C3%B3n+Hotel+Boutique!5m2!4m1!1i2!8m2!3d-25.2953879!4d-57.5820629!16s%2Fg%2F1tmkm1t1!3m8!1s0x945da89a2255a9b7:0x2f3b74e1bdf4e746!5m2!4m1!1i2!8m2!3d-25.2953879!4d-57.5820629!16s%2Fg%2F1tmkm1t1?entry=ttu'

  return (
    <div className={`themeFont ${cardDiv}`}>
      <h1 className='text-2xl'>{text.heading}</h1>
      <div>
        <div className='h-full w-full flex flex-row max-md:flex-col flex-nowrap max-md:flex-wrap justify-evenly content-evenly'>
          <img src='./assets/reception.png' className='w-[35vw] max-md:w-[33vw] max-md:self-center'/>
          <div className='self-center'>
            <p>{text.when}</p>
            <p>{text.where}</p>
            <a href={locationURL} target='_blank'>
              <button className={buttons}>{text.locationButton}</button>
            </a>
          </div>
        </div>
      </div>
      <a href={text.calendarLink} target='_blank'>
        <button className={`mt-[1rem] ${buttons}`}>{text.calendarButton}</button>
      </a>
    </div>
  )
}

export default Reception;