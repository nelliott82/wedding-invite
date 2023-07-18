import React, { useEffect } from 'react';

const Ceremony = ({ cardDiv, buttons, text }) => {
  const locationURL = 'https://www.google.com/maps?ll=-25.279004,-57.58289&z=16&t=m&hl=en-US&gl=US&mapclient=apiv3&cid=17998339525865837309'

  return (
    <div className={`themeFont ${cardDiv}`}>
      <h1 className='text-2xl'>{text.heading}</h1>
      <div>
        <div className='h-full w-full flex flex-row max-md:flex-col flex-nowrap max-md:flex-wrap justify-evenly content-evenly'>
          <img src='./assets/churchicon.svg' className='w-[35vw] max-md:w-[33vw] max-md:self-center'/>
          <br/>
          <div className='self-center'>
            <p>{text.when}</p>
            <p>{text.where}</p>
            <a href={locationURL} target='_blank'>
              <button className={buttons}>{text.locationButton}</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ceremony;