import * as yup from 'yup';
// models
import { IContactTemplate } from '@models/mail';
// hooks
import { dictionaries } from '@i18n/I18nProvider';

export const INITIAL_VALUES: IContactTemplate = {
  name: '',
  email: '',
  message: '',
};

export const getValidationSchema = (locale: keyof typeof dictionaries) => {
  const REQUIRED_FIELD = dictionaries[locale]['form.field_required'];

  return yup.object().shape({
    name: yup.string().required(REQUIRED_FIELD),
    email: yup.string().required(REQUIRED_FIELD).email(),
    message: yup.string().required(REQUIRED_FIELD),
  });
};
