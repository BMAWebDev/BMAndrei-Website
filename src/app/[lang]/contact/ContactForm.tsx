import { Formik, Form } from 'formik';
// constants
import { INITIAL_VALUES, validationSchema } from './formConfig';
// components
import { PrimaryButton } from '@components/Buttons';
import { Field } from '@components/Form';
import Flex from '@components/Flex';

export const ContactForm: React.FC = () => {
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
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
            as="textarea"
            rows={10}
          />

          <PrimaryButton type="submit" width="50%">
            Trimite mesajul
          </PrimaryButton>
        </Flex>
      </Form>
    </Formik>
  );
};

export default ContactForm;
