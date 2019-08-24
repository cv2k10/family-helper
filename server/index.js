const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get('/mail', function (req, res) {
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
        text: "This is a test mail content.", // plain text body
        html: "<b>This is a test mail content.</b>" // html body
      });

      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
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