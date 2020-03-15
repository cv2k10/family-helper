const express = require('express');
const next = require('next');
const path = require('path');
const logger = require('morgan');
const layouts = require('express-ejs-layouts');
require("dotenv").config();

const apiRoute = require('./routes/api');
const usersRoute = require('./routes/users')


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
  
  server.use('/api', apiRoute);
  server.use('/users', usersRoute);

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})