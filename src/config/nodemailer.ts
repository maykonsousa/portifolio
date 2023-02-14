import nodemailer from "nodemailer";
import "dotenv/config";

const user = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user,
    pass,
  },
});

export const mailOptions = {
  from: user,
  to: "maykon.sousa@hotmail.com",
};

