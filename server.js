const express = require('express');

const app = express();
app.set('port', process.env.PORT || 3001);

require('dotenv').config();

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

const fetch = require('node-fetch');

const API_KEY = process.env.API_KEY;
const LIMIT = 200;

app.get('/api/users/:user', (req, res) => {
  fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=${req.params.user}&api_key=${API_KEY}&format=json`)
    .then(response => response.json())
    .then(json => res.json(json));
});

app.get('/api/recent/:user', (req, res) => {
  fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${req.params.user}&limit=${LIMIT}&api_key=${API_KEY}&format=json`)
    .then(response => response.json())
    .then(json => res.json(json));
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
