import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Init from './app/containers/Init';
import Login from './app/containers/Login';
import Register from './app/containers/Register';
import Home from './app/containers/Home';
import Steps from './app/containers/Steps';
import Rewards from './app/containers/Rewards';
import Coins from './app/containers/Coins';
import HealthScore from './app/containers/HealthScore';
import Profile from './app/containers/Profile';
import VerifyPhone from './app/containers/VerifyPhone';

import { Icon } from './app/components';
import { defaultProps } from 'recompose';

const TabBarIcon = (props) => {
  return (
    <Icon variant="fa" name={props.name} style={{ fontSize: 22, marginTop: 4, color: props.focused ? '#03A9F4' : '#BDBDBD' }} />
  );
}

const DashboardStack = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      tabBarLabel: 'Home',
      tabBarIcon: ({ focused }) => <TabBarIcon name="home" focused={focused} />,
    }),
  },
  Steps: {
    screen: Steps,
    navigationOptions: () => ({
      tabBarLabel: 'Steps',
      tabBarIcon: ({ focused }) => <TabBarIcon name="street-view" focused={focused} />,
    }),
  },
  Rewards: {
    screen: Rewards,
    navigationOptions: () => ({
      tabBarLabel: 'Rewards',
      tabBarIcon: ({ focused }) => <TabBarIcon name="gift" focused={focused} />,
    }),
  },
  Coins: {
    screen: Coins,
    navigationOptions: () => ({
      tabBarLabel: 'Coins',
      tabBarIcon: ({ focused }) => <TabBarIcon name="credit-card" focused={focused} />,
    }),
  },
  HealthScore: {
    screen: HealthScore,
    navigationOptions: () => ({
      tabBarLabel: 'Health Score',
      tabBarIcon: ({ focused }) => <TabBarIcon name="star" focused={focused} />,
    }),
  },
}, {
  initialRouteName: 'Home',
});

const PreLoginRoutes = {
  Login: {
    screen: Login,
  },
  Register: {
    screen: Register,
  },
  VerifyPhone: {
    screen: VerifyPhone,
  },
};
const InternalRoutes = {
  Profile: {
    screen: Profile,
  },
};

const routes = {
  Init: {
    screen: Init,
  },
  Dashboard: {
    screen: DashboardStack,
  },
  ...PreLoginRoutes,
  ...InternalRoutes,
};

const RootNavigator = createStackNavigator(routes, {
  initialRouteName: 'Dashboard',
});

export default RootNavigator;