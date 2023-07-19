import React, { useEffect } from 'react';
import Languages from '../../../Languages.js';
import axios from 'axios';

const Invitations = ({ cardDiv, invitations, setInvitations }) => {
  const columnClass = 'text-left w-[28rem] max-md:w-44';

  const handleDelete = (e, id) => {
    e.preventDefault();

    axios.delete(`/invitations/admin/${id}`)
      .then((response) => {
        console.log(response)
        const invitationsFiltered = invitations.filter(x => x.id !== id);
        setInvitations(invitationsFiltered);
      })
      .catch((err) => {
        console.log(err)
        // Handle Error
      })
  }

  return (
    <div className={cardDiv}>
      <h1>Invitations</h1>
      <table>
       <thead>
        <tr>
          <td className={columnClass}>Name</td>
          <td className={columnClass}>Contact</td>
          <td className={columnClass}>Guests</td>
          <td className={columnClass}>Invitation Link</td>
          <td className={columnClass}>Responded</td>
          <td className={columnClass}>Delete</td>
        </tr>
       </thead>
       <tbody>
        {invitations.map((x, i) => {
          let text;
          if (x.language) {
            text = Languages.English.Invitation.message;
          } else {
            text = Languages.Spanish.Invitation.message;
          }
          let whatsAppMessage = `${text}https://${window.location.host}/invited/${x.uuid}`

          return (
            <tr key={x.uuid}>
              <td className={columnClass}>{x.name}</td>
              <td className={columnClass}>{x.contact}</td>
              <td className={columnClass}>{x.guests}</td>
              <td className={columnClass}>
                <a href={`https://api.whatsapp.com/send/?phone=${x.contact}&text=${encodeURIComponent(whatsAppMessage)}`} target='_blank'>
                  <u>Link</u>
                </a>
              </td>
              <td className={columnClass}>{x.attending !== null ? 'Yes' : 'No'}</td>
              <td className='text-center' onClick={(e) => handleDelete(e, x.id)}>
                <p className='cursor-pointer'>X</p>
              </td>
            </tr>
          )
        })}
        <tr>
          <td/>
          <td className={columnClass}>Total Invited:</td>
          <td className={columnClass}>
            {invitations.reduce((accum, x) => {
              accum = accum + parseInt(x.guests);
              return accum;
            }, 0)}
          </td>
          <td/>
          <td/>
          <td/>
        </tr>
       </tbody>
      </table>
    </div>
  )
}

export default Invitations;