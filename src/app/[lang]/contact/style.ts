import styled from 'styled-components';
// constants
import config from '@constants/config';
// components
import Flex, { Col } from '@components/Flex';
import { PrimaryButton } from '@components/Buttons';
import { SubTitle } from '@components/Texts';

const PageSubtitle = styled(SubTitle)`
  max-width: 90%;

  @media (max-width: ${config.breakpoints.Medium}px) {
    max-width: 100%;
  }
`;

const PageRow = styled(Flex)`
  @media (max-width: ${config.breakpoints.Medium}px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const PageCol = styled(Col)`
  img {
    width: 100%;
    height: 100%;

    @media (max-width: ${config.breakpoints.XXLarge}px) {
      max-height: 200px;
      object-fit: contain;
    }
  }

  @media (max-width: ${config.breakpoints.Medium}px) {
    width: 100%;
  }
`;

const SubmitButton = styled(PrimaryButton)`
  width: 50%;

  @media (max-width: ${config.breakpoints.Medium}px) {
    width: 100%;
    padding: 20px;
  }
`;

const Style = { PageSubtitle, PageRow, PageCol, SubmitButton };

export default Style;
