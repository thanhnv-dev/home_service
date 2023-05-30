/**
 * @format
 */

import App from './src/App';
import AppCore from './src/AppCore';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
