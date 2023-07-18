import React from 'react';

const Gifts = ({ cardDiv, text }) => {

  return (
    <div>
      <p>{text.heading}</p>
      <div className="flex flex-row max-md:flex-col flex-nowrap max-md:flex-wrap justify-evenly content-evenly">
        <img src="./assets/gifts.png" className="w-[35vw] max-md:w-[33vw] self-center"/>
        <div className='text-[1.25rem] self-center'>
          <p>
            {text.message}
          </p>
          <br/>
          <div className='max-md:text-base font-["Arial"]'>
            <p>
              {text.TransferInfo.line1}
            </p>
            <p>
              {text.TransferInfo.line2}
            </p>
            <p>
              {text.TransferInfo.line3}
            </p>
            <p>
              {text.TransferInfo.line4}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gifts;