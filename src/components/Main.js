import styled from 'styled-components';

const StyledMain = styled.main`
  padding: 10px;
  height: 80%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  box-shadow: inset 0px 0px 10px 0px #9e9e9e;
`;

const Main = () => {
  return <StyledMain></StyledMain>;
};

export default Main;