import styled from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

const Container = styled.div`
  height: 100vh;
`;

const App = () => {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
};

export default App;
