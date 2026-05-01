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
      subject: `💎 New Project Inquiry: ${name}`,
      reply_to: email,
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 40px 20px; color: #1a1a1a; max-width: 600px; margin: auto; background-color: #ffffff;">
          <div style="text-align: center; margin-bottom: 40px;">
            <h1 style="color: #0F172A; margin: 0; font-size: 28px; font-weight: 800; letter-spacing: -0.025em;">DIAMOND<span style="color: #D4AF37;">VILLA</span></h1>
            <p style="color: #64748b; font-size: 14px; margin-top: 8px; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600;">New Strategic Inquiry</p>
          </div>
          
          <div style="border: 1px solid #e2e8f0; border-radius: 16px; padding: 32px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
            <div style="margin-bottom: 32px;">
              <h3 style="color: #D4AF37; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 16px; font-weight: 700;">Prospect Identity</h3>
              <p style="margin: 4px 0; font-size: 16px;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 4px 0; font-size: 16px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #0F172A; text-decoration: none; border-bottom: 1px solid #D4AF37;">${email}</a></p>
            </div>

            <div style="margin-bottom: 32px;">
              <h3 style="color: #D4AF37; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 16px; font-weight: 700;">Business Context</h3>
              <p style="margin: 4px 0; font-size: 16px;"><strong>Industry:</strong> ${businessType}</p>
              <p style="margin: 4px 0; font-size: 16px;"><strong>Capital Allocation:</strong> ${budget}</p>
            </div>

            <div style="background: #F8FAFC; padding: 24px; border-radius: 12px; border-left: 4px solid #D4AF37;">
              <h3 style="color: #0F172A; font-size: 14px; margin-bottom: 12px; font-weight: 700;">Project Scope & Goals:</h3>
              <p style="white-space: pre-wrap; line-height: 1.6; color: #334155; margin: 0; font-size: 15px;">${details}</p>
            </div>
          </div>

          <div style="text-align: center; margin-top: 40px;">
            <a href="mailto:${email}" style="background-color: #0F172A; color: #ffffff; padding: 16px 32px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 16px; display: inline-block;">Reply to Lead</a>
          </div>

          <footer style="margin-top: 60px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center;">
            <p style="margin: 0;">&copy; ${new Date().getFullYear()} DiamondVilla Web Services. All rights reserved.</p>
            <p style="margin: 8px 0 0 0;">This inquiry was generated via the official strategic intake portal.</p>
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

