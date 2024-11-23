import type { RequestHandler } from '@sveltejs/kit';
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, 
  auth: {
    user: "orpha.lehner@ethereal.email",
    pass: "yPvmuDdpmR2nckKK3p",
  },
});

export const post: RequestHandler = async ({ request, locals }) => {
    const { email } = await request.json();
    console.log(email);
    console.log(locals.session.userId);
    const info = await transporter.sendMail({
    from: 'Himanshu Testing', 
    to: email, 
    subject: "Hello ✔", 
    text: `Hello ${locals.session.username}`, 
    html: `<b>Hello ${locals.session.username}</b>`, 
  });
    console.log("Message sent: %s", info.messageId);
	return {
		status: 200
	};
};


