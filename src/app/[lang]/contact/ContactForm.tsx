import { Formik, Form } from 'formik';
// constants
import { INITIAL_VALUES, validationSchema } from './formConfig';
// components
import { PrimaryButton } from '@components/Buttons';
import { Field } from '@components/Form';
import Flex from '@components/Flex';
// style
import Style from './style';

export const ContactForm: React.FC = () => {
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
          <Field name="name" label="Name" placeholder="Cum te cheamă?" />

          <Field
            type="email"
            name="email"
            label="Email"
            placeholder="Adresa de pe care îmi scrii"
          />

          <Field
            name="message"
            label="Message"
            placeholder="Motivul pentru care îmi scrii"
            asComponent="textarea"
            rows={10}
          />

          <Style.SubmitButton type="submit">Trimite mesajul</Style.SubmitButton>
        </Flex>
      </Form>
    </Formik>
  );
};

export default ContactForm;
