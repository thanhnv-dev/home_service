import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {LetIsIn, Onboarding, SignIn, SignUp, Splash} from 'src/public/index';
import New from 'src/public/auth/presenter/screen/SignIn/index';
const Stack = createNativeStackNavigator();

const PublicStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="LetIsIn" component={LetIsIn} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            {/* <Stack.Screen name="New" component={New} /> */}
        </Stack.Navigator>
    );
};

export default PublicStack;
