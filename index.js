/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import setup from './js/pages/setup'

AppRegistry.registerComponent(appName, () => setup);
