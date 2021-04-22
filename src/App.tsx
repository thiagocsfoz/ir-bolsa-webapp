import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/globals';
import { AuthProvider } from './contexts/auth';

function App() {
  return (
      <>
          <AuthProvider>
              <Routes />
          </AuthProvider>
          <GlobalStyle />
      </>
  );
}

export default App;
