const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const app = express();

// setup body parser middleware to convert to JSON and handle URL encoded forms
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// connect to the database
mongoose.connect('mongodb://localhost:27017/inventory', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
app.use(cookieParser());
app.use(cookieSession({
  name: 'session',
  keys: [
    'secretValue'
  ],
  cookie: {
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// import the modules for users and other stuffs
const users = require("./users.js");
app.use("/api/users", users.routes);

const items = require("./items.js");
app.use("/api/items", items.routes);

app.listen(3010, () => console.log('Server listening on port 3010!'));
