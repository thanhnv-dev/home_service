import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import CustomerStack from './CustomerStack';
import {useSelector} from 'react-redux';
import {getUser} from '~/redux/selectors/userSelector';
import PublicStack from './PulicStack';

const Stack = createNativeStackNavigator();
const AppNaviagtor = () => {
    const userProfile = useSelector(getUser);

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
        // case 'PROVIDER':
        //     return (
        //         <NavigationContainer>
        //             <Stack.Navigator screenOptions={{headerShown: false}}>
        //                 <Stack.Screen
        //                     name="ProviderStack"
        //                     component={ProviderStack}
        //                 />
        //             </Stack.Navigator>
        //         </NavigationContainer>
        //     );
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
