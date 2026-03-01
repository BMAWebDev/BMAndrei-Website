'use client';

import { Form, Formik, ErrorMessage, Field } from 'formik';
import { useEffect, useState } from 'react';
// lib
import {
  serverPasswordInitialValues,
  serverPasswordValidationSchema,
} from './validation';
// components
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import CTASection from '@/components/CTASection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [isServerPasswordSet, setIsServerPasswordSet] =
    useState<boolean>(false);

  useEffect(() => {
    setIsServerPasswordSet(
      sessionStorage.getItem('serverPasswordEnabled') === 'true',
    );
  }, []);

  if (
    !isServerPasswordSet &&
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
            setIsServerPasswordSet(true);
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
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
