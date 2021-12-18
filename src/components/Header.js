import styled from 'styled-components';

const StyledHeader = styled.header`
  height: 10%;
  padding: 10px;
  margin: 0 auto;
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