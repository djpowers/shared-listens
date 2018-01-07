# Shared Listens

A project built using React (via [Create React App](https://github.com/facebookincubator/create-react-app)) and the [Last.fm API](https://www.last.fm/api). Also uses Express to make API calls without exposing credentials per this guide on [using create-react-app with a server](https://www.fullstackreact.com/articles/using-create-react-app-with-a-server/).

Allows you to enter a list of users from Last.fm, and then show you music that you both/all have listened to recently.

## Installation

To run, copy `.env.example` to `.env` and add your [Last.fm API key](https://www.last.fm/api/authentication), install dependencies with `npm install`, and then `npm start` to run the Express server and React client.

## Deployment

Build the React app using `npm run build`, and commit those changes to source control. Deploy to your server, or push to Heroku.
