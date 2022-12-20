import React from 'react';
import AppNaviagtor from './navigation/AppNavigator';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';

const App = () => (
  <ApplicationProvider {...eva} theme={eva.dark}>
    <AppNaviagtor />
  </ApplicationProvider>
);
export default App;
