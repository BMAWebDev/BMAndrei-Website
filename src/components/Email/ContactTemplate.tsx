import { Html, Text, Heading } from 'react-email';
// models
import { IContactTemplate } from '@models/mail';

const ContactTemplate: React.FC<Readonly<IContactTemplate>> = ({
  name,
  email,
  message,
}) => {
  return (
    <Html>
      <Heading>Mesaj nou de la {name}.</Heading>

      <Text>
        {name} ({email}) a trimis un mesaj de contact:
      </Text>

      <Text
        style={{
          fontStyle: 'italic',
        }}
      >
        {message}
      </Text>
    </Html>
  );
};

export default ContactTemplate;
