import { PropsWithChildren } from 'react';
// style
import Style from './style';
import { FlexProps, SectionProps } from '@models/layout';

type SectionComponentProps = SectionProps & FlexProps;

const Section: React.FC<PropsWithChildren<SectionComponentProps>> = ({
  index,
  children,
  ...restProps
}) => (
  <Style.SectionWrapper index={index}>
    <Style.SectionContainer {...restProps}>{children}</Style.SectionContainer>
  </Style.SectionWrapper>
);

export default Section;
