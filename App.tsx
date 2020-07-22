import React from 'react';

// Navigation
import Router from './router/Router'
import { Provider as PaperProvider } from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
      <Router />
    </PaperProvider>
  );
}

export default App