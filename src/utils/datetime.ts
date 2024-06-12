// constants
import config from '@constants/config';

export const getYearsOfExperience = () =>
  new Date(Date.now() - config.dateOfExperienceStart.getTime()).getFullYear() -
  1970;
