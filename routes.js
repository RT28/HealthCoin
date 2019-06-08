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

const TabStack = createBottomTabNavigator({
  Home: {
    screen: Home,
    tabBarLabel: 'Home',
  },
  Steps: {
    screen: Steps,
    tabBarLabel: 'Steps',
  },
  Rewards: {
    screen: Rewards,
    tabBarLabel: 'Rewards',
  },
  Coins: {
    screen: Coins,
    tabBarLabel: 'Coins',
  },
  HealthScore: {
    screen: HealthScore,
    tabBarLabel: 'Health Score',
  },
});

const DashboardStack = createStackNavigator({
  Tabs: {
    screen: TabStack,
  }
},{
  initialRouteName: 'Home',
});

const PreLoginRoutes = {
  Login: {
    screen: Login,
  },
  Register: {
    screen: Register,
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
  initialRouteName: 'Init',
});

export default RootNavigator;