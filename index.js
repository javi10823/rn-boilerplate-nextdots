import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Sentry, SentryLog } from '@sentry/react-native';
import config from './src/config';

if (!config.isDev) {
  Sentry.config(config.SENTRY_DSN, {
    deactivateStacktraceMerging: false,
    logLevel: SentryLog.Debug,
    disableNativeIntegration: false,
    handlePromiseRejection: true,
  }).install();
}

AppRegistry.registerComponent(appName, () => App);
