const express = require('express');
const app = express();
const port = 3001;
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept,Authorization');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'testforscg@gmail.com', // your email
    pass: 'scg_test', // your email password
  },
});

app.get('/', (req, res) => {
  res.send({ success: true });
});
app.post('/email', (req, res) => {
  // console.log('Got body:', req.body);
  const data = req.body;
  let mailOptions = {
    from: data.from, // sender
    to: data.to, // list of receivers
    subject: data.subject, // Mail subject
    html: data.html, // HTML body
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) console.log(err);
  });
  res.send({ success: true });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
