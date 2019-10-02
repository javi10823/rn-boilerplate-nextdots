import * as React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import SplashScreen from 'react-native-splash-screen';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

import { initApp, goToPage, resetStack } from '../../../navigation';
import { Container as _Container } from '../../../components';
import { waitOneSecond } from '../../../utils/time';
import { USER_TOKEN } from '../../../utils/constant';

export const Container = styled(_Container)(() => ({
  justifyContent: 'center',
  alignItems: 'center',
}));

class Initializing extends React.Component {
  async componentDidMount() {
    try {
      await waitOneSecond(); // only for demo
      const userLogged = await AsyncStorage.getItem(USER_TOKEN);
      console.log('userLogged', userLogged);
      if (userLogged) initApp('Home');
      else resetStack('Welcome');
    } catch (err) {
      resetStack('Welcome');
    }
    SplashScreen.hide();
  }

  render() {
    return (
      <Container>
        <ActivityIndicator size="large" />
      </Container>
    );
  }
}

export default Initializing;
