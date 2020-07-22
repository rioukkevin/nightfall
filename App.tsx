import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Views
import HomeView from './views/Home'
import NewsView from './views/News'


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={NewsView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App