import { Formik, Form } from 'formik';
import { useTranslation } from 'react-i18next';
// constants
import { INITIAL_VALUES, validationSchema } from './formConfig';
// components
import { Field } from '@components/Form';
import Flex from '@components/Flex';
// style
import Style from './style';

export const ContactForm: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        fetch('/api/send-contact-message', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        })
          .then((res) => res.json())
          .catch((err) => console.log(err));
      }}
    >
      <Form style={{ width: '100%' }}>
        <Flex direction="column" align="flex-start" gap={45}>
          <Field
            name="name"
            label={t('contactpage.form.name_label')}
            placeholder={t('contactpage.form.name_placeholder')}
          />

          <Field
            type="email"
            name="email"
            label={t('contactpage.form.email_label')}
            placeholder={t('contactpage.form.email_placeholder')}
          />

          <Field
            name="message"
            label={t('contactpage.form.message_label')}
            placeholder={t('contactpage.form.message_placeholder')}
            asComponent="textarea"
            rows={10}
          />

          <Style.SubmitButton type="submit">
            {t('contactpage.form.send_button')}
          </Style.SubmitButton>
        </Flex>
      </Form>
    </Formik>
  );
};

export default ContactForm;
