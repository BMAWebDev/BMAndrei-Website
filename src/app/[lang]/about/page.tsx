'use client';

// components
import Hero from './Hero';
import CareerHistory from './CareerHistory';
import PersonalProjects from './PersonalProjects';
import Services from './Services';

const About = () => {
  return (
    <>
      <Hero index={0} />
      <CareerHistory index={1} />
      <PersonalProjects index={2} />
      <Services index={3} />
    </>
  );
};

export default About;
