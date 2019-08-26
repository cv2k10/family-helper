const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());

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

      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"Family Helper" <lfei2k@gmail.com>', // sender address
        to: "cv2k10@gmail.com", // list of receivers
        subject: "Mail from Family Helper", // Subject line
        text: `Order from ${req.body.form.name} at ${req.body.form.email}`, // plain text body
        html: `Order from <b>${req.body.form.name} at ${req.body.form.email}</b>` // html body
      });

      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

      res.send('Mail succcesully sent.')
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