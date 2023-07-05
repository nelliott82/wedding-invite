import React from 'react';
import SaveTheDate from './cards/SaveTheDate.jsx';

const App = () => {
  return (
    <>
      <div className="relative">
        <div id="background" className="absolute inset-0">
          <div className="h-screen w-screen bg-no-repeat bg-cover" style={{'backgroundImage': 'url(./assets/eucalyptus.jpg)'}}></div>
        </div>
        <div id="content" className="flex flex-wrap flex-col pt-16 relative overflow-y justify-center content-center">
          <SaveTheDate/>
        </div>
      </div>
    </>
  )
}

export default App;