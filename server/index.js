const express = require('express');
const next = require('next');
const logger = require('morgan');
require("dotenv").config();

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const mailCustomer = require('./components/mailCustomer');

app.prepare().then(() => {
  const server = express();
  server.use(logger('dev'));
  server.use(express.urlencoded({ extended: false }));
  server.use(express.json());

  server.post('/api/order', (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Order form data can not be empty"
      });
    }

    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    sgMail
      .send(mailCustomer(req.body.form))
      .then(() => { }, console.error);

      res.send('Mail succcesully sent.')
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})