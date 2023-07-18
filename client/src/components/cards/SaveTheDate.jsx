import React from 'react';
import Countdown from './Countdown.jsx';

const SaveTheDate = ({ cardDiv, text }) => {

  return (
    <div className={`themeFont ${cardDiv}`}>
      <div>
        <h1 className='text-[1.75rem]'>{text.heading}</h1>
        <br/>
        <p className="names">Perla & Nikko</p>
        <br/>
        <p>{text.date}</p>
        <br/>
        <Countdown text={text.Countdown}/>
      </div>
    </div>
  )
}

export default SaveTheDate;