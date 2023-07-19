import React, { useState, useEffect } from 'react';
import Loading from './Loading.jsx';
import LoginForm from './admincards/LoginForm.jsx';
import Navbar from './admincards/Navbar.jsx';
import CreateInvite from './admincards/CreateInvite.jsx';
import Invitations from './admincards/Invitations.jsx';
import Responded from './admincards/Responded.jsx';
import Songs from './admincards/Songs.jsx';
import axios from 'axios';

const Admin = ({ display, login, setLogin, cardDiv, buttons, text }) => {
  const [invitations, setInvitations] = useState([]);
  const [loading, setLoading] = useState(false);

  const getInvitations = () => {
    setLoading(true);
    const pathname = window.location.pathname.split('/').filter(x => x);

    axios.get(`/invitations/admin/${pathname[1]}`)
      .then((response) => {
        setInvitations(response.data);
        setLoading(false);
      })
      .catch((err) => {
        // Handle Error
      })
  }

  useEffect(() => {
    if (!login) {
      getInvitations();
    }
  }, [display, login]);

  return (
    <>
      {loading ?
        <Loading/>
        :
        <div className={`${display} mt-8 flex flex-col flex-wrap justify-center content-center`}>
          {login ?
            <div className={cardDiv}>
              <LoginForm setLogin={setLogin} getInvitations={getInvitations} buttons={buttons} />
            </div>
            :
            <>
              <Navbar/>
              <CreateInvite cardDiv={cardDiv} setInvitations={setInvitations} buttons={buttons} />
              <Invitations cardDiv={cardDiv} invitations={invitations} setInvitations={setInvitations} text={text.message} />
              <Responded cardDiv={cardDiv} invitations={invitations} />
              <Songs cardDiv={cardDiv} invitations={invitations} />
            </>
          }
        </div>
      }
    </>
  )
}

export default Admin;