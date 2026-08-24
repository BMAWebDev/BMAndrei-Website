import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Link,
  Text,
} from 'react-email';
import * as React from 'react';
// constants
import { config } from '@constants/index';
// models
import { MessageSuccessfullySentProps } from '@models/mail';

const MessageSuccessfullySent: React.FC<MessageSuccessfullySentProps> = ({
  name,
  message,
}) => {
  const previewText = `Your message was sent successfully`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={iconSection}>
            <div style={checkCircle}>
              <p style={checkMark}>&#10003;</p>
            </div>
          </Section>

          <Heading style={heading}>Message sent</Heading>

          <Text style={paragraph}>Hi {name},</Text>
          <Text style={paragraph}>
            Your message has been sent successfully. Here&apos;s a quick
            summary:
          </Text>

          <Section style={messageBox}>
            <Text style={messageBoxLabel}>MESSAGE</Text>
            <Text style={messageBoxValue}>{message}</Text>
          </Section>

          <Hr style={divider} />

          <Text style={footer}>
            You&apos;re receiving this email because you sent a message through
            my{' '}
            <Link style={link} href={config.mainWebsite}>
              contact form
            </Link>
            . If this wasn&apos;t you, please contact support or let me know by
            responding to this email.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default MessageSuccessfullySent;

// Styles
const main: React.CSSProperties = {
  backgroundColor: '#f4f4f5',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  padding: '40px 0',
};

const container: React.CSSProperties = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '40px',
  borderRadius: '12px',
  maxWidth: '480px',
  boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
};

const link: React.CSSProperties = {
  textDecoration: 'underline',
  cursor: 'pointer',
  color: '#5b13ec',
};

const iconSection: React.CSSProperties = {
  textAlign: 'center',
  marginBottom: '8px',
};

const checkCircle: React.CSSProperties = {
  backgroundColor: '#dcfce7',
  borderRadius: '50%',
  width: '56px',
  height: '56px',
  alignItems: 'center',
  lineHeight: '56px',
  margin: '0 auto',
  justifyContent: 'center',
};

const checkMark: React.CSSProperties = {
  color: '#16a34a',
  fontSize: '28px',
  fontWeight: 'bold',
};

const heading: React.CSSProperties = {
  fontSize: '22px',
  fontWeight: '600',
  color: '#18181b',
  textAlign: 'center',
  margin: '16px 0 24px',
};

const paragraph: React.CSSProperties = {
  fontSize: '15px',
  lineHeight: '24px',
  color: '#3f3f46',
  margin: '0 0 12px',
};

const messageBox: React.CSSProperties = {
  backgroundColor: '#fafafa',
  border: '1px solid #e4e4e7',
  borderRadius: '8px',
  padding: '16px 20px',
  margin: '20px 0',
};

const messageBoxLabel: React.CSSProperties = {
  fontSize: '11px',
  fontWeight: '600',
  letterSpacing: '0.05em',
  color: '#a1a1aa',
  margin: '0 0 4px',
};

const messageBoxValue: React.CSSProperties = {
  fontSize: '14px',
  color: '#27272a',
  margin: '0 0 12px',
};

const divider: React.CSSProperties = {
  borderColor: '#e4e4e7',
  margin: '20px 0',
};

const footer: React.CSSProperties = {
  fontSize: '12px',
  lineHeight: '18px',
  color: '#a1a1aa',
  textAlign: 'center',
};
