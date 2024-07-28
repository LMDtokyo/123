const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: "gmail", // Используйте ваш почтовый сервис (gmail, yahoo, etc.)
  auth: {
    user: "your-email@gmail.com", // Ваш email
    pass: "your-email-password" // Ваш пароль от email
  }
});

app.post("/send", (req, res) => {
  const { name, email, phone } = req.body;

  const mailOptions = {
    from: "your-email@gmail.com",
    to: "your-email@gmail.com", // Email, куда отправить сообщение
    subject: "Новая заявка",
    text: `Имя: ${name}\nEmail: ${email}\nТелефон: ${phone || "Не указан"}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).send("Ошибка отправки сообщения");
    }
    res.status(200).send("Сообщение отправлено");
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
