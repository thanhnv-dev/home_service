/**
 * @format
 */

import App from './src/App';
// import ExampleReduxCode from './src/ExampleReduxCode';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => ExampleReduxCode);
