import { Html, Text } from 'react-email';
// models
import { IContactTemplate } from '@models/mail';

const ContactTemplate: React.FC<Readonly<IContactTemplate>> = ({
  name,
  email,
  message,
}) => {
  return (
    <Html>
      <Text>Mesaj nou de la {name}.</Text>

      <Text>
        {name} ({email}) a trimis un mesaj de contact:
      </Text>

      <Text>{message}</Text>
    </Html>
  );
};

export default ContactTemplate;
