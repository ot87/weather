import styled from 'styled-components';

const StyledMain = styled.main`
  padding: 10px;
  height: 80%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Main = () => {
  return <StyledMain></StyledMain>;
};

export default Main;