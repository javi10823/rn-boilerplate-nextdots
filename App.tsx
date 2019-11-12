
import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import * as Sentry from '@sentry/react-native';
import VersionNumber from 'react-native-version-number';

import AppNavigator from './src/navigation/AppNavigator';
import { theme } from './src/styled';
import Navigation from './src/navigation/Navigation';
import { store } from './src/store';
import config, { isProduction } from './src/config';

export default class App extends PureComponent {
  componentDidMount() {
    this.initSentry();
  }

  initSentry = () => {
    let sentryEnvironment = '';
    if (!isProduction && !__DEV__) {
      sentryEnvironment = 'staging';
    }
    if (isProduction && !__DEV__) {
      sentryEnvironment = 'production';
    }
    if (__DEV__) {
      sentryEnvironment = 'development';
    }
    if (!__DEV__) {
      Sentry.init({
        dsn: config.SENTRY_DSN,
      });
    }
    Sentry.setTag('environment', `${sentryEnvironment}`);
    Sentry.setTag('react', 'true');
    Sentry.setExtra('version', `${VersionNumber.appVersion}`);
    Sentry.setExtra('environmentAPI', isProduction ? 'production' : 'staging');
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <AppNavigator
            ref={(navigatorRef: any) => {
              Navigation.setTopLevelNavigator(navigatorRef);
            }}
          />
        </Provider>
      </ThemeProvider>
    );
  }
}
