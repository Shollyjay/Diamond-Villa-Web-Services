import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, businessType, budget, details } = body;

    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Email credentials missing in environment variables');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'diamondvilla25@gmail.com',
      subject: `New Inquiry: ${name} (${businessType})`,
      text: `
        Name: ${name}
        Email: ${email}
        Business Type: ${businessType}
        Estimated Budget: ${budget}
        
        Project Details:
        ${details}
      `,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #1a237e;">New Website Inquiry</h2>
          <hr style="border: 1px solid #eee;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Business Type:</strong> ${businessType}</p>
          <p><strong>Estimated Budget:</strong> ${budget}</p>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin-top: 20px;">
            <p><strong>Project Details:</strong></p>
            <p style="white-space: pre-wrap;">${details}</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email', details: error.message },
      { status: 500 }
    );
  }
}
