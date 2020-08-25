
import React from "react";
import Router from "./router/Router";
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
// import { Theme } from 'react-native-paper/src/types'

const theme = {
    ...DefaultTheme,
    dark: true,
    colors: {
        ...DefaultTheme.colors,
        text: '#FFFFFF',
        primary: '#003348', // Brand color
        accent: '#fea500', // Button background color
    },
};

const App = () => {
    return (
        <PaperProvider theme={theme}>
            <Router></Router>
        </PaperProvider>
    );
};

export default App;
