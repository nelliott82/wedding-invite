import React, { useState, useEffect } from 'react';
import axios from 'axios';

const formatQuery = (query) => {
  const result = {};

  query.split('&').forEach((value) => {
    let params = value.split('=');

    result[params[0]] = decodeURI(params[1]);
  });

  return query.length ? result : false;
}

const ResponseForm = ({ cardDiv }) => {
  const [display, setDisplay] = useState('hidden');

  useEffect(() => {
    let inviteeObject = formatQuery(window.location.search.slice(1));

    inviteeObject && setDisplay('');
  }, []);

  return (
    <div className={`themeFont ${cardDiv} ${display}`}>
      <div>
        <p>Form go here</p>
        <br/>
      </div>
    </div>
  )
}

export default ResponseForm;