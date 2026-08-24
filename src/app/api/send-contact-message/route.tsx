import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { pretty, render, toPlainText } from 'react-email';
// constants
import config from '@constants/config';
// models
import { IContactTemplate, MessageSuccessfullySentProps } from '@models/mail';
// components
import { ContactTemplate, MessageSuccessfullySent } from '@components/Email';

const getContactTemplateHTML = async (data: IContactTemplate) =>
  await render(<ContactTemplate {...data} />);

const getMessageSuccessfullySentHTML = async (
  data: MessageSuccessfullySentProps,
) => await render(<MessageSuccessfullySent {...data} />);

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const mailData: IContactTemplate = await req.json();

    const contactTemplateHTML = await getContactTemplateHTML(mailData);

    const { data, error } = await resend.emails.send({
      from: 'BMAWebDev Website Form <contact@bmawebdev.ro>',
      to: [config.contactEmail],
      subject: 'Contact message',
      html: await pretty(contactTemplateHTML),
      text: toPlainText(contactTemplateHTML),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    const messageSuccessfullySentHTML =
      await getMessageSuccessfullySentHTML(mailData);

    const receivedEmail = await resend.emails.send({
      from: 'BMAWebDev Website Form <contact@bmawebdev.ro>',
      to: [mailData.email],
      subject: 'Contact message',
      html: await pretty(messageSuccessfullySentHTML),
      text: toPlainText(messageSuccessfullySentHTML),
    });

    if (receivedEmail.error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
