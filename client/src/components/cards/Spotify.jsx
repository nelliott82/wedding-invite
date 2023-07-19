import React, { useState } from 'react';

const Spotify = ({ attending, songsRef, handleChange, text }) => {
  const [spotify, setSpotify] = useState(false);

  const handleSpotifyChange = (e) => {
    e.preventDefault();

    if (e.target.value === 'yes') {
      setSpotify(true);
    } else {
      setSpotify(false);
    }
  }

  return (
    <>
      {attending === 'true' ?
        <>
          <tr>
            <td className='text-left'><label htmlFor='songs'>{text.spotifyAccount}</label></td>
            <td className='text-left w-full max-md:w-44'>
              <select onChange={handleSpotifyChange} defaultValue="-">
                <option disabled value="-">-</option>
                <option value='yes' >{text.yes}</option>
                <option value='no' >No</option>
              </select>
            </td>
          </tr>
          <tr>
            <td className='text-left'><label htmlFor='songs'>{text.songs}</label></td>
            <td className='text-center w-full max-md:w-44'>
              {spotify ?
                <a className='font-["Arial"] max-md:text-base' href='https://open.spotify.com/playlist/4nOxLjjo4cX4pjAR4rYs1L?si=OvVyGCsERuSpS72jokhNKQ&pt=5801760f2a3da6fd3796b422a66a8e79' target='_blank'>
                  <u>{text.linkText}</u>
                </a>
                :
                <textarea name='songs'
                          ref={songsRef}
                          onChange={handleChange}
                          className='w-full'/>
              }
            </td>
          </tr>
        </>
        :
        null
      }
    </>
  )
}

export default Spotify;