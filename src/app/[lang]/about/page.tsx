'use client';

// components
import Hero from './Hero';
import CareerHistory from './CareerHistory';
import PersonalProjects from './PersonalProjects';

const About = () => {
  return (
    <>
      <Hero index={0} />
      <CareerHistory index={1} />
      <PersonalProjects index={2} />
    </>
  );
};

export default About;
