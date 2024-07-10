import * as yup from 'yup';
// models
import { IContactTemplate } from '@models/mail';
// constants
import { REQUIRED_FIELD } from '@constants/texts';

export const INITIAL_VALUES: IContactTemplate = {
  name: '',
  email: '',
  message: '',
};

export const validationSchema = yup.object().shape({
  name: yup.string().required(REQUIRED_FIELD),
  email: yup.string().required(REQUIRED_FIELD).email(),
  message: yup.string().required(REQUIRED_FIELD),
});
