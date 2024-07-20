import styled from 'styled-components';

const Loader = styled.div`
  width: 35px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(farthest-side, #ffffff 94%, #0000) top / 6px 6px
      no-repeat,
    conic-gradient(#0000 30%, #ffffff);
  mask: radial-gradient(farthest-side, #0000 calc(100% - 6px), #000 0);
  animation: loaderAnimation 1s infinite linear;
  text-align: -webkit-center;

  @keyframes loaderAnimation {
    100% {
      transform: rotate(1turn);
    }
  }
`;

const Spinner = () => <Loader />;

export default Spinner;
