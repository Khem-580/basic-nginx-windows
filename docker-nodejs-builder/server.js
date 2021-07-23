'use strict';

require('dotenv').config();
const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send(`
    'APPID'  =  ${process.env.APPID}
    'APP_ENV' =  ${process.env.APP_ENV} <br />
  `);
});

app.get('/admin', (req, res) => {
    res.send(`
      'Admin Page' <br />
      'APPID'  =  ${process.env.APPID} <br />
      'APP_ENV' =  ${process.env.APP_ENV} <br />
    `);
  });

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);