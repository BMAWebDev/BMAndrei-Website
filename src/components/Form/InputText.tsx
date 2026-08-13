// models
import { FieldGroupProps, InputTextType } from '@models/form';
// components
import FieldGroup from './FieldGroup';

type InputTextProps = Omit<FieldGroupProps, 'type'> & {
  type?: InputTextType;
  rows?: number;
};

const InputText = ({
  type = 'text',
  name,
  label,
  id,
  placeholder,
  className,
  inputClassName,
  requiredText,
  isDisabled,
  defaultValue,
  rows = 3,
  ...props
}: InputTextProps) => (
  <FieldGroup
    {...props}
    type={type}
    name={name}
    label={label}
    id={id}
    placeholder={placeholder}
    className={className}
    inputClassName={inputClassName}
    isDisabled={isDisabled}
    requiredText={requiredText}
    defaultValue={defaultValue}
    rows={rows}
  />
);

export default InputText;
