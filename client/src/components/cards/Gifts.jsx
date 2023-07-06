import React from 'react';

const Gifts = ({ cardDiv }) => {

  return (
    <div>
      <p>Gifts</p>
      <div className="flex flex-row max-md:flex-col flex-nowrap max-md:flex-wrap justify-evenly content-evenly">
        <img src="./assets/gifts.png" className="w-[35vw] max-md:w-[33vw] self-center"/>
        <div style={{'fontSize': '1.25rem', 'alignSelf': 'center'}}>
          <p>
            Your presence is all the present we ask. Should you feel compelled to go beyond that,
            we kindly request transfers over physical gifts.
          </p>
          <br/>
          <p>
            Transfers can be made here:
          </p>
          <p>
            Caja de Ahorro # 4445334
          </p>
          <p>
            Sudameris Bank SAECA
          </p>
          <p>
            C.I. 3.999.746
          </p>
          <p>
            Perla Aurora Britez Larrosa
          </p>
        </div>
      </div>
    </div>
  )
}

export default Gifts;