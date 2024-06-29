// models
import { IContactTemplate } from '@models/mail';
// constants
import config from '@constants/config';

const titleStyles: React.CSSProperties = {
  fontSize: `${config.text.title.size}px`,
  fontFamily: 'K2D, sans-serif',
};

const textStyles: React.CSSProperties = {
  fontSize: `${config.text.normal.size}px`,
  fontFamily: 'K2D, sans-serif',
};

const messageStyles: React.CSSProperties = {
  fontStyle: 'italic',
  fontSize: `${config.text.normal.size}px`,
  fontFamily: 'K2D, sans-serif',
};

export const ContactTemplateText = (data: IContactTemplate) => `
Mesaj nou de la ${data.name}.

${data.name} (${data.email}) a trimis un mesaj de contact:

${data.message}
`;

const ContactTemplate: React.FC<Readonly<IContactTemplate>> = ({
  name,
  email,
  message,
}) => {
  return (
    <>
      <h1 style={titleStyles}>Mesaj nou de la {name}.</h1>

      <p style={textStyles}>
        {name} ({email}) a trimis un mesaj de contact:
      </p>

      <q style={messageStyles}>{message}</q>
    </>
  );
};

export default ContactTemplate;
