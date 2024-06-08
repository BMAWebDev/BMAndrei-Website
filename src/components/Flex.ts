import styled from 'styled-components';

export default styled.div<{
  justify?: 'space-between' | 'flex-start' | 'flex-end' | 'center';
  gap?: number;
  align?: 'flex-start' | 'flex-end' | 'center';
}>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ justify }) => justify};
  gap: ${({ gap }) => `${gap}px`};
  align-items: ${({ align }) => align || 'center'};
`;
