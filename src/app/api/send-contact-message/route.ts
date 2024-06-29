import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
// models
import { IContactTemplate } from '@models/mail';
// components
import ContactTemplate, {
  ContactTemplateText,
} from '@components/Email/ContactTemplate';

// const resend = new Resend('dawidyhawud123');
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const mailData: IContactTemplate = await req.json();

    const { data, error } = await resend.emails.send({
      from: 'BMAWebDev Website Form <no-reply@bmawebdev.ro>',
      to: ['contact@bmawebdev.ro'],
      subject: 'Contact message',
      react: ContactTemplate(mailData),
      text: ContactTemplateText(mailData),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
