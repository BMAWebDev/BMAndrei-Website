'use client';

// components
import Hero from './Hero';
import Services from './Services';

const HomePage = () => {
  return (
    <>
      <Hero index={0} />
      <Services index={1} />
    </>
  );
};

export default HomePage;
