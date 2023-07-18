import React from 'react';
import Gifts from './Gifts.jsx';
import Dress from './Dress.jsx';

const GeneralInfo = ({ cardDiv, text }) => {

  return (
    <div className={`themeFont ${cardDiv}`}>
      <h1 className='text-2xl'>{text.heading}</h1>
      <br/>
      <Dress text={text.Dress}/>
      <br/>
      <div className="flex flex-row flex-nowrap justify-evenly content-evenly">
        <img src="./assets/linebreak.png" className="w-[60vw]"/>
      </div>
      <br/>
      <Gifts text={text.Gifts}/>
    </div>
  )
}

export default GeneralInfo;