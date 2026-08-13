'use client';

import { Form, Formik } from 'formik';
import axios from 'axios';
// lib
import { INITIAL_VALUES, validationSchema } from './validation';
// utils
import Notification from '@utils/notification';
// components
import { Spinner } from '@components/index';
import { InputText } from '@components/Form';
import { getClassNames } from '@src/utils/tailwind';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-xl mx-auto glass rounded-3xl border-accent/20">
        <h2 className="text-3xl font-black text-white mb-2">
          Let&apos;s build <br />
          <span className="text-accent">together.</span>
        </h2>
        <p className="text-slate-400 mb-8 text-sm">
          Have a vision? I have the tools to make it reality.
        </p>

        <Formik
          initialValues={INITIAL_VALUES}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            try {
              await axios.post('/api/send-contact-message', values);

              resetForm();

              new Notification('Your message was sent.');
            } catch (error) {
              console.log(error);
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className="w-full space-y-4">
              <div className="flex flex-col gap-4">
                <InputText
                  name="name"
                  label="Your name"
                  placeholder="John Doe"
                  requiredText
                />

                <InputText
                  type="email"
                  name="email"
                  label="Your email"
                  placeholder="john@example.com"
                  requiredText
                />

                <InputText
                  type="textarea"
                  name="message"
                  label="Project Details"
                  placeholder="Tell me about your idea..."
                  requiredText
                />

                <button
                  disabled={isSubmitting}
                  type={isSubmitting ? 'button' : 'submit'}
                  className={getClassNames(
                    'hidden cursor-pointer w-full sm:flex min-w-30 items-center justify-center rounded-lg h-11 px-6 bg-primary text-white text-sm font-bold tracking-wide hover:bg-primary/90 transition-all shadow-lg shadow-primary/20',
                    isSubmitting
                      ? 'opacity-30 cursor-not-allowed pointer-events-none'
                      : 'opacity-100',
                  )}
                >
                  {isSubmitting ? <Spinner /> : 'SEND INQUIRY'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default ContactSection;
