import sgMail from "@sendgrid/mail";
import { NextResponse } from "next/server";

sgMail.setApiKey(process.env.SEND_GRID_API_KEY);

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    const msg = {
      to: process.env.SENDER_EMAIL, // Use the environment variable here
      from: process.env.SENDER_EMAIL, // And here
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Message: ${message}</p>`,
    };

    await sgMail.send(msg);

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    if (error.response) {
      console.error(error.response.body.errors);
    }

    // this is a test change
    return NextResponse.json(
      { error: "Failed to send email", details: error.message },
      { status: 500 }
    );
  }
}
