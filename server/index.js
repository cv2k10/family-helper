const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
// const favicon = require('serve-favicon');
// const path = require('path');
const logger = require('morgan');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const mailCustomer = require('./components/mailCustomer');

app.prepare().then(() => {
  const server = express();
  // server.use(express.static(path.join(__dirname, 'public')));
  // server.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
  server.use(logger('dev'));
  server.use(bodyParser.json());

  server.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
    console.log('in acao')
  });

  server.get('/test', (req, res) => {
    res.send('Test okay.')
  });

  server.post('/api/order', (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Order form data can not be empty"
      });
    }

    console.log('received post order data: ' + req.body.form.name)

    const nodemailer = require("nodemailer");

    // async..await is not allowed in global scope, must use a wrapper
    async function main() {

      // Generate test SMTP service account from ethereal.email
      // Only needed if you don't have a real mail account for testing
      // let testAccount = await nodemailer.createTestAccount();

      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        // secure: 'gmail', // true for 465, false for other ports
        auth: {
          user: 'lfei2k@gmail.com', // generated ethereal user
          pass: 'k2iBtrSc1' // generated ethereal password
        },
        tls: {
          rejectUnauthorized: false
        }       
      });

      // async function main() {
      // let transporter = nodemailer.createTransport({
      //   host: 'mail.deltaweb.com.my',
      //   port: 465,
      //   secure: true,
      //   // secure: 'gmail', // true for 465, false for other ports
      //   auth: {
      //     user: 'webtest@deltaweb.com.my', // generated ethereal user
      //     pass: 'btrsc1' // generated ethereal password
      //   }     
      // });
      
      // send mail with defined transport object
      let info = await transporter.sendMail(
        mailCustomer(req.body.form)
      );

      // console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

      // Preview only available when sending through an Ethereal account
      // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

      res.send('Mail succcesully sent.')
      // res.redirect('/');
    }

    main().catch(console.error);
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})