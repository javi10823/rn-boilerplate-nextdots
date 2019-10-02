import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/react-hoc';
import { ThemeProvider } from 'styled-components';
import AppNavigator from './src/navigation/AppNavigator';
import { theme } from './src/styled';
import Navigation from './src/navigation/Navigation';
import { store } from './src/store';
import client from './src/apollo';

export default class App extends PureComponent {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <Provider store={store}>
            <AppNavigator
              ref={(navigatorRef: any) => {
                Navigation.setTopLevelNavigator(navigatorRef);
              }}
            />
          </Provider>
        </ApolloProvider>
      </ThemeProvider>
    );
  }
}
