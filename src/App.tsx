import * as React from 'react';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Splash, Welcome} from './General/Screens/index';

const Stack = createNativeStackNavigator();
const App = () => {
  const WelcomeStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Welcome" component={Welcome} />
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer theme={DefaultTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="WelcomeStack" component={WelcomeStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
