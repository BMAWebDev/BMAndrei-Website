'use client';

// components
import Hero from './Hero';
import Services from './Services';
import SocialMedia from './SocialMedia';

const HomePage = () => {
  return (
    <>
      <Hero index={0} />
      <Services index={1} />
      <SocialMedia index={2} />
    </>
  );
};

export default HomePage;
