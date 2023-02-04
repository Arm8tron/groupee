const express = require('express');
const admin = require('firebase-admin');
const config = require('./config');

admin.initializeApp({
	credential: admin.credential.cert(config.firebaseServiceAccountCredentials)
});

const db = admin.firestore();
config.firebase.admin = admin;
config.firebase.db = db;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(config.port, () => {
  console.log(`Server running at http://localhost:${config.port}`);
});
