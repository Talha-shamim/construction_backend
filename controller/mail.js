import nodemailer from 'nodemailer'
import { google } from 'googleapis'

// These id's and secrets should come from .env file.
const CLIENT_ID = '220301492443-h87jlnaqqtgivu2m0i7er794lkphl7e6.apps.googleusercontent.com';
const CLEINT_SECRET = 'YKWMTFRUfI1ja13x9dFch5pQ';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//047rbml3vuWD2CgYIARAAGAQSNwF-L9Ir1TRb1Sr1eSiupfOli6aJfKD8GjtFekUi9PIjzuNcfxV7LfaGOwg-gOsHTfcyzLAbLj8';

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLEINT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function mailto(req) {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'mail.oxynet@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLEINT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: 'Oxynet <mail.oxynet@gmail.com>',
      to: 'enquiry.sksgroups@gmail.com',
      subject: 'from sksgroups.in',
      text: req.body.msg + ' email ' + req.body.email
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}

export default mailto;
// mailto(mail,link,name)
//   .then((result) => console.log('Email sent...', result))
//   .catch((error) => console.log(error.message));
