// constants
import config from '@constants/config';

export const getYearsOfExperience = () =>
  new Date(Date.now() - config.dateOfExperienceStart.getTime()).getFullYear() -
  1970;

export const getCurrentAge = () =>
  new Date(Date.now() - new Date('02 Apr 2001').getTime()).getFullYear() - 1970;
