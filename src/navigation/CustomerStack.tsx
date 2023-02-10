import * as React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Bookings, Calendar, Inbox, Profile} from 'src/customer';
import {
    home_select,
    home_unselect,
    booking_select,
    booking_unselect,
    calendar_select,
    calendar_unselect,
    chat_select,
    chat_unselect,
    profile_select,
    profile_unselect,
} from 'src/assets/images';

const Tab = createBottomTabNavigator();
const CustomerStack = () => {
    const renderIcon = ({
        focused,
        image1,
        image2,
    }: {
        focused: boolean;
        image1: any;
        image2: any;
    }) => {
        return <Image source={focused ? image1 : image2} style={styles.icon} />;
    };
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({focused}: {focused: boolean}) =>
                        renderIcon({
                            focused: focused,
                            image1: home_select,
                            image2: home_unselect,
                        }),
                }}
            />
            <Tab.Screen
                name="Bookings"
                component={Bookings}
                options={{
                    tabBarIcon: ({focused}: {focused: boolean}) =>
                        renderIcon({
                            focused: focused,
                            image1: booking_select,
                            image2: booking_unselect,
                        }),
                }}
            />
            <Tab.Screen
                name="Calendar"
                component={Calendar}
                options={{
                    tabBarIcon: ({focused}: {focused: boolean}) =>
                        renderIcon({
                            focused: focused,
                            image1: calendar_select,
                            image2: calendar_unselect,
                        }),
                }}
            />
            <Tab.Screen
                name="Inbox"
                component={Inbox}
                options={{
                    tabBarIcon: ({focused}: {focused: boolean}) =>
                        renderIcon({
                            focused: focused,
                            image1: chat_select,
                            image2: chat_unselect,
                        }),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({focused}: {focused: boolean}) =>
                        renderIcon({
                            focused: focused,
                            image1: profile_select,
                            image2: profile_unselect,
                        }),
                }}
            />
        </Tab.Navigator>
    );
};
const styles = StyleSheet.create({
    icon: {
        width: 20,
        height: 20,
    },
});
export default CustomerStack;
