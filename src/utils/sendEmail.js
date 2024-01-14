"use server"
import nodemailer from 'nodemailer';

export async function sendEmail(data,formData) {
    const email = formData?.get("email");
    const name = formData?.get("name");
    const message = formData?.get("message");

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
  
    const mailOptions = {
      from: email,
      to:  process.env.EMAIL,
      cc: "email",
      subject: `Message from ${name} (${email})`,
      text: message,
    };
  
    const sendMailPromise = () =>
      new Promise((resolve, reject) => {
        transport.sendMail(mailOptions, function (err) {
          if (!err) {
            resolve('Email sent');
          } else {
            console.log(err.message)
            reject(err.message);
          }
        });
      });
  
    try {
      await sendMailPromise();
      return 'Email sent, we will connect soon...' 
    } catch (err) {
      return err;
    }
  }