import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const formatQuery = (query) => {
  const result = {};

  query.split('&').forEach((value) => {
    let params = value.split('=');

    result[params[0]] = decodeURI(params[1]);
  });

  return query.length ? result : false;
}

const ResponseForm = ({ cardDiv, buttons }) => {
  const [display, setDisplay] = useState('hidden');
  const [guestsArr, setGuestsArr] = useState([]);
  const [guests, setGuests] = useState(0);
  const [guestsError, setGuestsError] = useState('');
  const [attending, setAttending] = useState('-');
  const [attendingError, setAttendingError] = useState('');
  const [received, setReceived] = useState(false);
  const nameRef = useRef();
  const songsRef = useRef();

  const handleChange = (e) => {
    e.preventDefault();
    setGuestsError('');
    setAttendingError('');

    if (e.target.name === 'guests') {
      setGuests(e.target.value);
    } else if (e.target.name === 'attending') {
      setAttending(e.target.value);
    } else if (e.target.name === 'songs') {
      songsRef.current.value = e.target.value;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (attending !== '-') {
      axios.put('/invitations/invitees', {
        guests,
        attending: attending === 'true' ? true : false,
        songs: songsRef.current.value,
      })
        .then((response) => {
          setReceived(true);
        })
        .catch((err) => {
          if (err.response.data.errno === 3819) {
            setGuestsError('border-4 border-red-700 border-solid');
          } else {
            // Handle error
          }
        });
    } else {
      setAttendingError('border-4 border-red-700 border-solid');
    }
  }

  useEffect(() => {
    let inviteeObject = formatQuery(window.location.search.slice(1));

    if (inviteeObject) {
      setDisplay('');

      nameRef.current.value = inviteeObject.name;
      setGuests(parseInt(inviteeObject.guests));
      setGuestsArr(new Array(parseInt(inviteeObject.guests) + 1).fill(0));
    }

  }, []);

  return (
    <div className={`themeFont ${cardDiv} ${display}`}>
      {!received ?
        <>
          <h1>Response</h1>
          <br/>
          <form>
            <table>
              <tbody>
                <tr>
                  <td className='text-left'><label htmlFor='name'>Name:</label></td>
                  <td className='text-left w-[28rem] max-md:w-44'>
                    <input name='name'
                           ref={nameRef}
                           readOnly
                           className="w-full"/>
                  </td>
                </tr>
                <tr>
                  <td className='text-left'><label htmlFor='guests'>Guests:</label></td>
                  <td className='text-left w-[28rem] max-md:w-44'>
                    <select name='guests'
                            value={guests}
                            className={guestsError}
                            onChange={handleChange}>
                      {guestsArr.map((x, i) => <option key={i} value={i}>{i}</option>)}
                    </select>
                  </td>
                </tr>
                <tr>
                  <td className='text-left'><label htmlFor='attending'>Attending:</label></td>
                  <td className='text-left w-[28rem] max-md:w-44'>
                    <select name='attending'
                            value={attending}
                            onChange={handleChange}
                            className={attendingError}
                            required>
                      <option value='' >-</option>
                      <option value='true' >Yes</option>
                      <option value='false' >No</option>
                    </select>
                  </td>
                </tr>
                {attending === 'false' ?
                  null
                  :
                  <tr>
                    <td className='text-left'><label htmlFor='songs'>Songs that make me dance:</label></td>
                    <td className='text-left w-[28rem] max-md:w-44'>
                      <input name='songs'
                             ref={songsRef}
                             onChange={handleChange}
                             className='w-full'/>
                    </td>
                  </tr>}
              </tbody>
            </table>
            <br/>
            <input type='submit' className={buttons} onClick={handleSubmit}/>
          </form>
        </>
        :
        <h1>Thank you!</h1>
      }
    </div>
  )
}

export default ResponseForm;