import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
const Stack = createNativeStackNavigator();
import {LetIsIn, Onboarding, SignIn, SignUp, Splash} from '~/general/index';

const PublicStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="LetIsIn" component={LetIsIn} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    );
};

export default PublicStack;
