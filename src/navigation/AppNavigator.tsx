import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Splash, Onboarding, LetIsIn, SignIn, SignUp} from '~/general/index';
import CustomerStack from './CustomerStack';

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

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LetIsIn" component={LetIsIn} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="OnboardingStack" component={OnboardingStack} />
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="CustomerStack" component={CustomerStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNaviagtor;
