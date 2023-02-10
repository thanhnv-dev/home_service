import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import CustomerStack from './CustomerStack';
import {useSelector} from 'react-redux';
import {getUserType} from 'src/redux/selectors';
import PublicStack from './PulicStack';
import New from 'src/customer/persenter/screens/New';

const Stack = createNativeStackNavigator();
const AppNaviagtor = () => {
    const useType = useSelector(getUserType);

    switch (useType) {
        case 'CUSTOMER':
            return (
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{headerShown: false}}>
                        <Stack.Screen
                            name="CustomerStack"
                            component={CustomerStack}
                        />
                        <Stack.Screen name="New" component={New} />
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
