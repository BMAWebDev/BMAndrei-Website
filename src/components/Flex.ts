import styled from 'styled-components';

export default styled.div<{
  justify?: 'space-between' | 'flex-start' | 'flex-end' | 'center';
}>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ justify }) => justify};
`;
