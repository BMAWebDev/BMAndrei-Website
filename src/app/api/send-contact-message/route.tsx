import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { pretty, render, toPlainText } from 'react-email';
// constants
import config from '@constants/config';
// models
import { IContactTemplate } from '@models/mail';
// components
import { ContactTemplate } from '@components/Email';

const getHTML = async (data: IContactTemplate) =>
  await render(<ContactTemplate {...data} />);

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const mailData: IContactTemplate = await req.json();

    const html = await getHTML(mailData);

    const { data, error } = await resend.emails.send({
      from: 'BMAWebDev Website Form <no-reply@bmawebdev.ro>',
      to: [config.contactEmail],
      subject: 'Contact message',
      react: await pretty(html),
      text: toPlainText(html),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    // const receivedEmail = await resend.emails.send({
    //   from: 'BMAWebDev Website Form <no-reply@bmawebdev.ro>',
    //   to: [mailData.email],
    //   subject: 'Contact message',
    //   react: ContactTemplate(mailData),
    //   text: ContactTemplateText(mailData),
    // });

    // if (receivedEmail.error) {
    //   return NextResponse.json({ error }, { status: 500 });
    // }

    // return NextResponse.json(receivedEmail.data);

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
