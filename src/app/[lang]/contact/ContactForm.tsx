import { Formik, Form } from 'formik';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
// constants
import { INITIAL_VALUES, validationSchema } from './formConfig';
import config from '@constants/config';
// components
import { Field } from '@components/Form';
import Flex from '@components/Flex';
import { Text } from '@components/Texts';
import Spinner from '@components/Spinner';
// style
import Style from './style';

export const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={validationSchema}
      onSubmit={async (values, helpers) => {
        setIsLoading(true);

        try {
          await fetch('/api/send-contact-message', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          });

          helpers.resetForm();

          setShowSuccessMessage(true);

          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 3000);
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
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

          {showSuccessMessage && (
            <Text color={config.colors.Green}>{t('success_message')}</Text>
          )}

          <Style.SubmitButton type="submit">
            {isLoading ? <Spinner /> : t('contactpage.form.send_button')}
          </Style.SubmitButton>
        </Flex>
      </Form>
    </Formik>
  );
};

export default ContactForm;
