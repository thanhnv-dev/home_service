import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {LetIsIn, Onboarding, SignIn, SignUp, Splash} from '~/general/index';
import CustomerStack from './CustomerStack';
import {useSelector} from 'react-redux';
import {getUser} from '~/redux/selectors/userSelector';

const Stack = createNativeStackNavigator();
const AppNaviagtor = () => {
    const userProfile = useSelector(getUser);
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

    const PublicStack = () => {
        return (
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen
                    name="OnboardingStack"
                    component={OnboardingStack}
                />
                <Stack.Screen name="AuthStack" component={AuthStack} />
            </Stack.Navigator>
        );
    };
    switch (userProfile.type) {
        case 'CUSTOMER':
            return (
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{headerShown: false}}>
                        <Stack.Screen
                            name="CustomerStack"
                            component={CustomerStack}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            );
        case 'PROVIDER':
            return (
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{headerShown: false}}>
                        <Stack.Screen
                            name="ProviderStack"
                            component={ProviderStack}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            );
        default:
            return (
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{headerShown: false}}>
                        <Stack.Screen
                            name="PublicStack"
                            component={PublicStack}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            );
    }
};

export default AppNaviagtor;
