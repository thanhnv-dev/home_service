/**
 * @format
 */

import App from './src/App';
import AppExample from './src/AppExample';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppExample);
