import React from 'react';

import { Container, WelcomeImage, Title } from './styles';
import { goToPage } from '../../../navigation';
import { Button } from '../../../components';
import { NDLogo } from '../../../assets/images';

const Welcome = () => {
  return (
    <Container>
      <WelcomeImage source={NDLogo} />
      <Title color="primary" variant="bold" size={14}>
        {`REACT NATIVE TYPESCRIPT\nNEXTDOTS v0.61.5 FEBRUARY 2020`}
      </Title>
      <Button size="big" text="SignIn" onPress={() => goToPage('SignIn')} />
    </Container>
  );
};

export default Welcome;
