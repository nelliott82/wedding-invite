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
app.use('/invitations', router);
app.use('/invited', routerInvited);
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
  console.log('hello')
  if (req.cookies.uuid) {
    res.redirect(`/invited/${req.cookies.uuid}`);
  } else {
    res.sendStatus(200);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});