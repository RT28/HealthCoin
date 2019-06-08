/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';

import { name as appName } from './app.json';
import configureStore from './configureStore';
import RouteSetup from './routes';

const initialState = {};
const store = configureStore(initialState);

const AppNavigator = createAppContainer(RouteSetup);

const HealthCoin = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);
AppRegistry.registerComponent(appName, () => HealthCoin);
