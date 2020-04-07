import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/global';
import ContainerApp from './components/ContainerApp';
import Menu from './components/Menu';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ContainerApp>
          <Menu />
          <Routes />
        </ContainerApp>
      </BrowserRouter>
    </>
  );
}

export default App;
