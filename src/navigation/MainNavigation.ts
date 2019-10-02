import { createStackNavigator } from 'react-navigation-stack';
import { Home, FetchExample } from '../screens';

const noHeader = { header: null };

const stack = {
  Home: {
    screen: Home,
    navigationOptions: noHeader,
  },
  FetchExample: {
    screen: FetchExample,
    navigationOptions: noHeader,
  },
};

export const MainStack = createStackNavigator(stack);
export type MainRoutes = keyof typeof stack;
