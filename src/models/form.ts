import { HTMLAttributes, PropsWithChildren } from 'react';

export type InputTextType =
  | 'email'
  | 'text'
  | 'textarea'
  | 'checkbox'
  | 'radio';
export type InputPasswordType = 'password';
export type InputSelectType = 'select';
export type InputCalendarType = 'calendar' | 'multi-calendar';
export type InputType =
  | InputTextType
  | InputPasswordType
  | InputSelectType
  | InputCalendarType;

export type FieldGroupProps = PropsWithChildren<
  HTMLAttributes<HTMLDivElement>
> & {
  type: InputType;
  name: string;
  label?: string;
  id?: string;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  isDisabled?: boolean;
  requiredText?: boolean;
  onAdd?: () => void;
  deleteField?: () => void;
  rows?: number;
};
