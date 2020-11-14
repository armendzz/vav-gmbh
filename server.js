const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();
var cors = require("cors");

require("dotenv").config();
app.use(bodyParser.json());
const port = process.env.PORT || 5000;
app.use(cors());

const transporter = nodemailer.createTransport({
  host: process.env.MAILHOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

app.use(
  express.urlencoded({
    extended: true
  })
);

app.post("/mail", (req, res) => {
  const { name, email, subject, text } = req.body;
  const mailData = {
    from: name + " - " + email,
    to: process.env.MAILRECIEVER,
    subject: subject,
    text: text
  };

  if (name === undefined || email === undefined || text === undefined) {
    res.status(200).send({ message: "something went wrong" });
  } else {
    transporter.sendMail(mailData, function(err, info) {
      if (err != undefined) {
        console.log(err);
        res.status(200).send({ message: "error" });
      }

      if (info != undefined) {
        res.status(200).send({ message: "successfully" });
      }
    });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
