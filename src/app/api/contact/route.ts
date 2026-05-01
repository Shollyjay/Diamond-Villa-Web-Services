import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, businessType, budget, details } = body;

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY missing in environment variables');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'DiamondVilla <onboarding@resend.dev>',
      to: 'diamondvilla25@gmail.com',
      subject: `New Inquiry: ${name} (${businessType})`,
      reply_to: email,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 12px;">
          <h2 style="color: #1a237e; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">New Website Inquiry</h2>
          <div style="margin-top: 20px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Business Type:</strong> ${businessType}</p>
            <p><strong>Estimated Budget:</strong> ${budget}</p>
          </div>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin-top: 25px; border-left: 4px solid #D4AF37;">
            <p style="margin-top: 0; font-weight: bold; color: #1a237e;">Project Details:</p>
            <p style="white-space: pre-wrap; line-height: 1.6;">${details}</p>
          </div>
          <footer style="margin-top: 30px; font-size: 12px; color: #888; text-align: center;">
            Sent from DiamondVilla Agency Website
          </footer>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ message: 'Email sent successfully', id: data?.id }, { status: 200 });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email', details: error.message },
      { status: 500 }
    );
  }
}

