require('dotenv').config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465, // Use 465 for secure connection
  secure: true, // Use `true` for port 465, `false` for port 587
  auth: {
    user: process.env.email, // Ensure your .env file has EMAIL and PASSWORD
    pass: process.env.password,
  },
});

transporter.sendMail({
  from: process.env.email,
  to: "chauraj345r@gmail.com", // list of receivers
  subject: "Hello ✔", // Subject line
  text: "naku na", // plain text body
  html: "<b>Hello world?</b>" // html body
}).then(() => {
  console.log("Message sent");
}).catch((error) => {
  console.log("Not working", error);
});
