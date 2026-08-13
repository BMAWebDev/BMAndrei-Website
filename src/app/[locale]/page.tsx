'use client';

import { Form, Formik, ErrorMessage, Field } from 'formik';
import { useEffect } from 'react';
// models
import { RedirectEventData } from '@models/events';
// utils
import { getIsOnClient } from '@utils/client';
// lib
import {
  serverPasswordInitialValues,
  serverPasswordValidationSchema,
} from './validation';
// components
import {
  Header,
  HeroSection,
  ServicesSection,
  // ProjectsSection,
  CTASection,
  ContactSection,
  Footer,
} from '@components/index';

const Home = () => {
  useEffect(() => {
    if (getIsOnClient()) {
      document.addEventListener(
        'sectionRedirect',
        (event: CustomEventInit<RedirectEventData>) => {
          if (!event.detail?.href) {
            return;
          }

          const section = document.querySelector(event.detail!.href) as
            HTMLElement | undefined;

          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        },
      );
    }
  }, []);

  if (
    getIsOnClient() &&
    sessionStorage.getItem('serverPasswordEnabled') !== 'true' &&
    process.env.NEXT_PUBLIC_DEV_SERVER_PASSWORD_ENABLED === 'on'
  ) {
    return (
      <div className="w-screen h-screen content-center max-w-3xl justify-self-center px-2">
        <Formik
          initialValues={serverPasswordInitialValues}
          validationSchema={serverPasswordValidationSchema}
          onSubmit={async (values, { setFieldError }) => {
            if (
              values.password !== process.env.NEXT_PUBLIC_DEV_SERVER_PASSWORD
            ) {
              setFieldError('password', 'Incorrect password');
              return;
            }

            sessionStorage.setItem('serverPasswordEnabled', 'true');
          }}
        >
          <Form className="flex flex-col gap-6 w-full border dark:border-white/30 glass rounded-lg sm:p-10 p-4">
            <h1 className="text-2xl text-center dark:text-gray-1 font-bold">
              You need to enter the server password to access this content.
            </h1>

            <Field
              name="password"
              className="w-full bg-background-dark border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-accent focus:ring-0 transition-colors"
              placeholder="Enter server password"
              type="password"
            />

            <ErrorMessage name="password" component="p" />

            <button
              type="submit"
              className="cursor-pointer self-center h-14 px-8 rounded-xl bg-primary text-white font-bold text-base hover:scale-[1.02] transition-transform shadow-xl shadow-primary/20 flex items-center gap-2 w-fit"
            >
              Enter server password
              <span className="material-symbols-outlined text-xl">
                arrow_forward
              </span>
            </button>
          </Form>
        </Formik>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-screen flex-col w-full">
      <Header />
      <main className="flex-1">
        <HeroSection />
        {/* <ServicesSection /> */}
        {/* <ProjectsSection /> */}
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
