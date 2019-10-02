import { createAppContainer } from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';

import { MainStack, MainRoutes } from './MainNavigation';
import { AuthStack, AuthRoutes } from './AuthNavigation';

const AppStack = createAnimatedSwitchNavigator(
  {
    Auth: AuthStack,
    Main: MainStack,
  },
  { initialRouteName: 'Auth' },
);

export default createAppContainer(AppStack);

export type Routes = MainRoutes | AuthRoutes;
