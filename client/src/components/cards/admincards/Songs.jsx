import React, { useEffect } from 'react';

const Songs = ({ cardDiv, invitations }) => {
  const columnLeftClass = 'text-left w-[15rem] max-md:w-44';
  const columnRightClass = 'text-left w-[65rem] max-md:w-44';

  useEffect(() => {
  }, [invitations]);

  return (
    <div className={cardDiv}>
      <h1>Songs</h1>
      <table>
       <thead>
        <tr>
          <td className={columnLeftClass}>Name</td>
          <td className={columnRightClass}>Songs</td>
        </tr>
       </thead>
       <tbody>
        {invitations.map((x, i) => {
          if (x.attending === 1 && x.songs) {
            return (
              <tr key={x.uuid}>
                <td className={columnLeftClass}>{x.name}</td>
                <td className={columnRightClass}>{x.songs}</td>
              </tr>
            )
          }
        })}
       </tbody>
      </table>
    </div>
  )
}

export default Songs;