import { ErrorMessage } from 'formik';
// style
import Style from './style';
import { Text } from '../Texts';
import Flex from '../Flex';

interface FieldProps {
  name: string;
  label: string;
  type?: 'email' | 'text' | 'number' | 'tel' | 'textarea';
  placeholder?: string;
  value?: any;
  asComponent?: 'input' | 'select' | 'textarea';
  rows?: number;
}

const Field: React.FC<FieldProps> = ({
  type = 'text',
  name,
  label,
  placeholder,
  value,
  asComponent,
  rows,
}) => (
  <Flex direction="column" align="flex-start" gap={5} isFullWidth>
    <Text>{label}</Text>

    <Style.Input
      value={value}
      type={type}
      name={name}
      placeholder={placeholder}
      component={asComponent}
      rows={rows}
    />

    <Style.Error>
      <ErrorMessage name={name} />
    </Style.Error>
  </Flex>
);

export default Field;
