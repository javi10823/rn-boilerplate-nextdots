/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect, PureComponent } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import * as Sentry from '@sentry/react-native';
import VersionNumber from 'react-native-version-number';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import config, { isProduction } from './config';

class App extends PureComponent {
  componentDidMount() {
    this.initSentry();
    SplashScreen.hide();
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
    const usingHermes = typeof HermesInternal === 'object' && HermesInternal !== null;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
            <Header />
            {!usingHermes ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Step One</Text>
                <Text style={styles.sectionDescription}>
                  Edit <Text style={styles.highlight}>App.tsx</Text> to change this screen and then
                  come back to see your edits.
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>See Your Changes</Text>
                <Text style={styles.sectionDescription}>
                  <ReloadInstructions />
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Debug</Text>
                <Text style={styles.sectionDescription}>
                  <DebugInstructions />
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Learn More</Text>
                <Text style={styles.sectionDescription}>
                  Read the docs to discover what to do next:
                </Text>
              </View>
              <LearnMoreLinks />
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
