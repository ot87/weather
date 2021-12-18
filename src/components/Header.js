import styled from 'styled-components';

const StyledHeader = styled.header`
  height: 10%;
  padding: 10px;

  display: flex;
  justify-content: center;

  box-shadow: inset 0px 0px 10px 0px #9e9e9e;
`;

const StyledHeadline = styled.h1`
  font-size: 48px;
  font-weight: 300;
  letter-spacing: 2px;
  line-height: 1;
`;

const Header = () => (
  <StyledHeader>
    <StyledHeadline>WEATHER</StyledHeadline>
  </StyledHeader>
);

export default Header;