import React from 'react';
import Background from './cards/Background.jsx';
import SaveTheDate from './cards/SaveTheDate.jsx';
import PhotoReel from './cards/PhotoReel.jsx';
import Ceremony from './cards/Ceremony.jsx';
import Reception from './cards/Reception.jsx';
import GeneralInfo from './cards/GeneralInfo.jsx';

const App = () => {
  const cardDiv = "relative bg-green-200 bg-opacity-50 hover:bg-opacity-75 w-10/12 inline-block text-center p-5 mb-12";

  return (
    <>
      <div className="relative">
        <Background/>
        <div id="content" className="flex flex-wrap flex-col pt-16 relative overflow-y justify-center content-center overflow-y-scroll">
          <SaveTheDate cardDiv={cardDiv} />
          <PhotoReel cardDiv={cardDiv} />
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