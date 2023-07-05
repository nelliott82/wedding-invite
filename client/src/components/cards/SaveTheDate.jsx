import React from 'react';
import Countdown from './Countdown.jsx';

const SaveTheDate = () => {
  const mainDiv = "relative bg-green-200 bg-opacity-50 hover:bg-opacity-75 w-10/12 inline-block text-center p-5 mb-12";

  return (
    <div className={mainDiv}>
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