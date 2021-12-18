import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 10%;
  font-size: 20px;
  padding: 10px;
`;

const Footer = () => (
  <StyledFooter>
    <span>API by</span>
    <span>
      <a target='_blank' rel='noreferrer' href='https://open-meteo.com/'>
        Weather data by Open-Meteo.com
      </a>
    </span>
  </StyledFooter>
);

export default Footer;