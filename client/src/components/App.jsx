import React, { useState, useEffect } from 'react';
import Admin from './cards/Admin.jsx';
import Background from './cards/Background.jsx';
import Loading from './cards/Loading.jsx';
import SaveTheDate from './cards/SaveTheDate.jsx';
import PhotoReel from './cards/PhotoReel.jsx';
import Ceremony from './cards/Ceremony.jsx';
import Reception from './cards/Reception.jsx';
import GeneralInfo from './cards/GeneralInfo.jsx';
import ResponseForm from './cards/ResponseForm.jsx';
import Languages from '../Languages.js';
import axios from 'axios';

const App = () => {
  const [access, setAccess] = useState(true);
  const [loading, setLoading] = useState(true);
  const [display, setDisplay] = useState('hidden');
  const [login, setLogin] = useState(true);
  const [invited, setInvited] = useState(false);
  const [invitation, setInvitation] = useState({});
  const [language, setLanguage] = useState(Languages.Spanish);
  const cardDiv = 'relative bg-green-200 bg-opacity-75 hover:bg-opacity-90 w-10/12 inline-block text-center p-5 mb-12';
  const buttons = 'rounded-full bg-emerald-50 hover:bg-emerald-200 inline-block text-base px-2.5 py-1';

  const handleClick = (choice) => {
    setLanguage(Languages[choice]);
  }

  useEffect(() => {
    const pathname = window.location.pathname.split('/').filter(x => x);
    if (pathname[0] === 'admin') {
      setDisplay('');
      axios.get(`/invitations/admin/verify/${pathname[1] || '123'}`)
        .then((response) => {
          setLogin(response.data.login);
          setLoading(false);
        })
        .catch((err) => {
          setLogin(true);
          setLoading(false);
        });
    } else if (pathname[0] === 'invited') {
      setAccess(false);
      axios.get(`/invitations/invitees/${pathname[1]}`)
        .then((response) => {
          console.log(response)
          if (response.data.valid) {
            setInvited(true);
            setInvitation(response.data);
            if (response.data.language) {
              setLanguage(Languages.English);
            }
            setLoading(false);
          }
        })
        .catch((err) => {
          setLoading(false);
        });
    } else {
      setAccess(false);
      setLoading(false);
    }
  }, []);

  return (
    <>
      <div className='relative'>
        <Background/>
        {loading ?
          <Loading/>
          :
          <div id='content' className='flex flex-wrap flex-col pt-16 relative overflow-y justify-center content-center overflow-y-scroll'>
            {access ?
              <>
                <Admin display={display}
                       login={login}
                       setLogin={setLogin}
                       cardDiv={cardDiv}
                       buttons={buttons} />
              </>
            :
              <>
                <div className='w-[7rem] fixed top-0 right-0 p-2 bg-slate-200 z-10 flex justify-evenly'>
                  <span onClick={() => handleClick('English')}>🇺🇸<u>{language.english}</u></span>
                  <span> </span>
                  <span onClick={() => handleClick('Spanish')}>🇵🇾<u>{language.spanish}</u></span>
                </div>
                <SaveTheDate cardDiv={cardDiv} text={language.SaveTheDate}/>
                <PhotoReel cardDiv={cardDiv} text={language.PhotoReel}/>
                <Ceremony cardDiv={cardDiv} buttons={buttons} text={language.Ceremony}/>
                <Reception cardDiv={cardDiv} buttons={buttons} text={language.Reception}/>
                <GeneralInfo cardDiv={cardDiv} text={language.GeneralInfo}/>
                <ResponseForm cardDiv={cardDiv}
                              buttons={buttons}
                              invited={invited}
                              invitation={invitation}
                              text={language.ResponseForm} />
              </>
            }
          </div>
        }
        <a href='https://dryicons.com/free-icons/church'> Icon by Dryicons </a>
        <a href='https://www.vecteezy.com/free-vector/line-break'>Line Break Vectors by Vecteezy</a>
      </div>
    </>
  )
}

export default App;