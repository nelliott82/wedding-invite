const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');

const port = process.env.PORT || 3000;

const router = require('./routes.js');
const routerInvited = require('./routesInvited.js');

app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
  res.sendStatus(200);
});

app.get('/api/apiKey', (req, res) => {
  console.log('apiKey')
  const apiKey = 'AIzaSyBkGpz_EWR9bWbS5ZlbaXSP3ur2ZL76-Do'; // Replace with your actual API key retrieval logic
  res.json({ apiKey });
});

app.use('/invitations', router);
app.use('/invited', routerInvited);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});