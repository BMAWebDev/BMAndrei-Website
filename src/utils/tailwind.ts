export const getClassNames = (...classes: (string | undefined)[]) =>
  classes.filter(Boolean).join(' ');
