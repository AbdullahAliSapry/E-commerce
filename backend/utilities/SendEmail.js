const nodemailer = require("nodemailer");

module.exports = async (userEmail, subject, htmlTemplate) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.APP_EMAIL_ADDRESS, //sender
        pass: "jjdwoqlbcnnyamwk",
      },
    });
    const mailOptions = {
      from: process.env.APP_EMAIL_ADDRESS, //sender
      to: userEmail, //receiver
      subject: subject,
      text: "i love you",
      html: htmlTemplate,
    };
    console.log(mailOptions);
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent" + info.response);
  } catch (error) {
    console.log(error);
    //throw new Error("internal error: (nodemailer)");
  }
};
