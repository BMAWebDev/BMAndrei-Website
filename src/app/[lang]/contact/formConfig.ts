import * as yup from 'yup';
import { REQUIRED_FIELD } from '@constants/texts';

interface IFormFields {
  name: string;
  email: string;
  message: string;
}

export const INITIAL_VALUES: IFormFields = {
  name: '',
  email: '',
  message: '',
};

export const validationSchema = yup.object().shape({
  name: yup.string().required(REQUIRED_FIELD),
  email: yup.string().required(REQUIRED_FIELD).email(),
  message: yup.string().required(REQUIRED_FIELD),
});
