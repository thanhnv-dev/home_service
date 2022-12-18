import * as React from 'react';
import {
  NavigationContainer,
  // DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Splash, Onboarding, LetIsIn} from './General/Screens/index';

const Stack = createNativeStackNavigator();
const App = () => {
  const OnboardingStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{headerShown: false, gestureEnabled: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
      </Stack.Navigator>
    );
  };

  const LetIsInStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LetIsIn" component={LetIsIn} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer theme={DefaultTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="OnboardingStack" component={OnboardingStack} />
        <Stack.Screen name="LetIsInStack" component={LetIsInStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
