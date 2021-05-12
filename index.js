/**
 * @format
 */

import {
    AppRegistry,
    YellowBox,
    LogBox
} from 'react-native';
import App from './App';
import { name as appName } from './app.json';
console.disableYellowBox = true;
YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested',
    'Require cycle:',
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
]);
AppRegistry.registerComponent(appName, () => App);
