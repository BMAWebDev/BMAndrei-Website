'use client';

import { Form, Formik } from 'formik';
import axios from 'axios';
import { useMemo } from 'react';
// lib
import { INITIAL_VALUES, getValidationSchema } from './validation';
// utils
import Notification from '@utils/notification';
import { getClassNames } from '@utils/tailwind';
import { getIsOnClient } from '@utils/client';
// hooks
import { useTranslation } from '@i18n/index';
// components
import { Spinner } from '@components/index';
import { InputText } from '@components/Form';

const ContactSection = () => {
  const { t, locale } = useTranslation();

  const validationSchema = useMemo(
    () => (getIsOnClient() ? getValidationSchema(locale) : null),
    [locale],
  );

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-xl mx-auto glass rounded-3xl border-accent/20">
        <h2 className="text-3xl font-black text-white mb-2">
          {t('contact.title.line1')} <br />
          <span className="text-accent">{t('contact.title.line2')}</span>
        </h2>
        <p className="text-slate-400 mb-8 text-sm">
          {t('contact.description')}
        </p>

        <Formik
          initialValues={INITIAL_VALUES}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            try {
              await axios.post('/api/send-contact-message', values);

              resetForm();

              new Notification(t('contact.submit_success_message'));
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
                  label={t('contact.fields.name.label')}
                  placeholder={t('contact.fields.name.placeholder')}
                  requiredText
                />

                <InputText
                  type="email"
                  name="email"
                  label={t('contact.fields.email.label')}
                  placeholder={t('contact.fields.email.placeholder')}
                  requiredText
                />

                <InputText
                  type="textarea"
                  name="message"
                  label={t('contact.fields.message.label')}
                  placeholder={t('contact.fields.message.placeholder')}
                  requiredText
                />

                <button
                  disabled={isSubmitting}
                  type={isSubmitting ? 'button' : 'submit'}
                  className={getClassNames(
                    'cursor-pointer w-full min-w-30 items-center justify-center rounded-lg h-11 px-6 bg-primary text-white text-sm font-bold tracking-wide hover:bg-primary/90 transition-all shadow-lg shadow-primary/20',
                    isSubmitting
                      ? 'opacity-30 cursor-not-allowed pointer-events-none'
                      : 'opacity-100',
                  )}
                >
                  {isSubmitting ? <Spinner /> : t('contact.submit')}
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
