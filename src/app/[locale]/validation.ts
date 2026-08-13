import * as yup from 'yup';

interface ServerPasswordData {
  password: string;
}

export const serverPasswordInitialValues: ServerPasswordData = {
  password: '',
};

export const serverPasswordValidationSchema = yup.object({
  password: yup.string().min(2).required('Server password is required'),
} satisfies Record<keyof ServerPasswordData, yup.AnySchema>);
