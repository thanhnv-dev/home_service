import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Splash,
  Onboarding,
  LetIsIn,
  AccountForm,
  ChooseService,
} from '../general/index';

const Stack = createNativeStackNavigator();
const AppNaviagtor = () => {
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
        <Stack.Screen name="AccountForm" component={AccountForm} />
        <Stack.Screen name="ChooseService" component={ChooseService} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="OnboardingStack" component={OnboardingStack} />
        <Stack.Screen name="LetIsInStack" component={LetIsInStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNaviagtor;
