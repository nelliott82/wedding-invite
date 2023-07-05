import React from 'react';
import Countdown from './Countdown.jsx';

const SaveTheDate = () => {
  const mainDiv = "relative bg-green-200 bg-opacity-50 hover:bg-opacity-100 w-10/12 inline-block text-center p-5";

  return (
    <div className={mainDiv}>
      <div>
        <p className="save-the-date">Save The Date</p>
        <br/>
        <p className="header">Perla & Nikko</p>
        <br/>
        <p className="save-the-date">August 26th, 2023 7:30 PM</p>
        <br/>
        <a href="https://calndr.link/e/mbcGiCD8mz?s=google" target="_blank">
          <button className="rounded-full bg-green-400 inline-block text-base px-2.5 py-1">Add to Calendar</button>
        </a>
        <br/>
        <Countdown/>
      </div>
    </div>
  )
}

export default SaveTheDate;