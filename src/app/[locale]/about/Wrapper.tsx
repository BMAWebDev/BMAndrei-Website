'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
// constants
import config from '@constants/config';
// components
import Hero from './Hero';
import CareerHistory from './CareerHistory';
import PersonalProjects from './PersonalProjects';
import Services from './Services';
import Contact from './Contact';

const Wrapper = () => {
  const searchParams = useSearchParams();
  const sectionID = searchParams.get('section');

  // scroll to section and then remove URL param without reloading
  useEffect(() => {
    if (sectionID && window) {
      document
        .querySelector(`#${sectionID}`)
        ?.scrollIntoView({ behavior: 'smooth' });

      window.history.replaceState(
        window.history.state,
        document.title,
        config.routes.About,
      );
    }
  }, [sectionID]);

  return (
    <>
      <Hero index={0} />
      <CareerHistory index={1} />
      <PersonalProjects index={2} />
      <Services index={3} />
      <Contact index={4} />
    </>
  );
};

export default Wrapper;
