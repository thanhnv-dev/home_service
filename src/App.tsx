import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import React from 'react';
import Toast from 'react-native-toast-message';
import AppNaviagtor from './navigation/AppNavigator';
// import {default as themeColorDark} from './utils/custom-theme-dark.json';
// import {default as themeColorLight} from './utils/custom-theme-light.json';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {Provider} from 'react-redux';
import FlipperAsyncStorage from 'rn-flipper-async-storage-advanced';
import {store} from 'src/redux';
import {ThemeContext} from './theme/theme-context';

const App = () => {
    const [theme, setTheme] = React.useState(eva.light);

    const toggleTheme = () => {
        const nextTheme = theme === eva.light ? eva.dark : eva.light;
        setTheme(nextTheme);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const themeValue = React.useMemo(() => ({theme, toggleTheme}), [theme]);

    return (
        <Provider store={store}>
            <IconRegistry icons={EvaIconsPack} />
            <ThemeContext.Provider value={themeValue}>
                <ApplicationProvider {...eva} theme={theme}>
                    <FlipperAsyncStorage />
                    <AppNaviagtor />
                </ApplicationProvider>
            </ThemeContext.Provider>
            <Toast />
        </Provider>
    );
};
export default App;
