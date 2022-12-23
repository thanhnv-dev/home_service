import React from 'react';
import AppNaviagtor from './navigation/AppNavigator';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
// import {default as themeColorDark} from './utils/custom-theme-dark.json';
// import {default as themeColorLight} from './utils/custom-theme-light.json';
import {ThemeContext} from './theme/theme-context';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

const App = () => {
  const [theme, setTheme] = React.useState(eva.light);

  const toggleTheme = () => {
    const nextTheme = theme === eva.light ? eva.dark : eva.light;
    setTheme(nextTheme);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const themeValue = React.useMemo(() => ({theme, toggleTheme}), [theme]);

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ThemeContext.Provider value={themeValue}>
        <ApplicationProvider {...eva} theme={theme}>
          <AppNaviagtor />
        </ApplicationProvider>
      </ThemeContext.Provider>
    </>
  );
};
export default App;
