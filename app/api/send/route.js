import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const smtpConfig = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NEXT_PUBLIC_GMAIL_EMAIL,
    pass: process.env.NEXT_PUBLIC_GMAIL_PASSWORD,
  },
});

const sendEmail = async (data) => {
  const msg = {
    to: 'mailsanketagrawal@gmail.com', // Change to your recipient
    from: process.env.NEXT_PUBLIC_GMAIL_EMAIL, // Change to your verified sender
    subject: data.subject,
    html: data.html,
  };

  await smtpConfig
    .sendMail(msg)
    .then((res) => {
      console.log('Sending Mail')
    })
    .catch((err) => {
      console.log({ err });
      console.log(err);
    });
};

const handler = async (data) => {
  const { email, subject, message } = data;

  try {
    // CLIENT COPY
    await sendEmail({
      to: email,
      subject: 'Query Received',
      html: ` <div>
           <div>
              <h1>Below details have been received</h1>
              <h1>Email: ${email}</h1>
              <h1>Subject  ${subject}</h1>
              <h1>Message: ${message}</h1>
           </div>
           </div>`,
    });
  } catch (e) {
    console.log(e);
  }
};


export async function POST(req, res) {
  const headers = req.headers;
  const newResponse = new NextResponse({
    body: JSON.stringify({ message: 'Send Mail' }),
    headers,
  });
  const bodyData = await req.json();

  await handler(bodyData);
  return newResponse;
}
