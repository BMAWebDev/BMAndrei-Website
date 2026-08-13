export const getIsOnClient = () => typeof window !== 'undefined';

export const redirectToSection = (
  section: 'hero' | 'services' | 'projects' | 'cta' | 'contact',
) => {
  document.dispatchEvent(
    new CustomEvent('sectionRedirect', {
      detail: {
        href: `#${section}`,
      },
    }),
  );
};
