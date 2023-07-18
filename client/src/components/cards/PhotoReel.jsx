import React from 'react';
import Photos from './Photos.jsx';

const PhotoReel = ({ cardDiv, text }) => {

  return (
    <div className={`themeFont ${cardDiv}`}>
      <h1 className='text-2xl'>{text.heading}</h1>
      <br/>
      <Photos text={text}/>
    </div>
  )
}

export default PhotoReel;