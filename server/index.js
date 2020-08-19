const express = require('express');
const next = require('next');
const path = require('path');
const logger = require('morgan');
const layouts = require('express-ejs-layouts');

const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session"); // #
const passport = require("passport");
const passportSetup = require("./config/passport-setup");

require("dotenv").config();

const authRoute = require('./routes/auth');
const apiRoute = require('./routes/api');
const userRoute = require('./routes/user');


const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(logger('dev'));
  server.use(express.urlencoded({ extended: false }));
  server.use(express.json());

  server.set('views', path.join(__dirname, 'views'));
  server.set('view engine', 'ejs');
  server.use(layouts);

  // init cookie session
  server.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
  }));

  // # initialize passport
  server.use(passport.initialize());
  server.use(passport.session());

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "Mongodb connection error:"));
  db.once("open", function () {
    console.log('> Mongodb is connected.')
  });  

  // connect to mongodb
  mongoose.connect(keys.mongodb.dbURI, { 
    useNewUrlParser: true,
    useCreateIndex: true, 
    useUnifiedTopology: true 
  });

  server.use(logger("dev"));
  server.use(express.json());
  server.use(express.urlencoded({ extended: false }));
  server.use(cookieParser());
  
  server.use('/auth', authRoute);
  server.use('/api', apiRoute);
  server.use("/user", userRoute);

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on port ${port}`)
  })
})