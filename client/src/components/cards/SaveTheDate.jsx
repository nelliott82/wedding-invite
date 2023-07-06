import React from 'react';
import Countdown from './Countdown.jsx';

const SaveTheDate = ({ cardDiv }) => {

  return (
    <div className={cardDiv}>
      <div>
        <p className="themeFont">Save The Date</p>
        <br/>
        <p className="names">Perla & Nikko</p>
        <br/>
        <p className="themeFont">August 26th, 2023</p>
        <br/>
        <Countdown/>
      </div>
    </div>
  )
}

export default SaveTheDate;