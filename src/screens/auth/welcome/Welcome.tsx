import React from 'react';

import { Container, WelcomeImage, Title } from './styles';
import { goToPage } from '../../../navigation';
import { Button } from '../../../components';

const IMG_WELCOME = require('../../../assets/images/logo.png');

const Welcome = () => {
  return (
    <Container>
      <WelcomeImage source={IMG_WELCOME} />
      <Title color="primary" variant="bold" size={14}>
        {`REACT NATIVE TYPESCRIPT\nNEXTDOTS v0.59.9 AUGUST 2019`}
      </Title>
      <Button size="big" text="SignIn" onPress={() => goToPage('SignIn')} />
    </Container>
  );
};

export default Welcome;
