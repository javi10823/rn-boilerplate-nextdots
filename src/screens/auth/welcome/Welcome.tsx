import React from 'react';

import { Container, WelcomeImage, Title } from './styles';
import { goToPage } from '../../../navigation';
import { Button } from '../../../components';
import { NDLogo } from '../../../assets/images';

const Welcome = () => {
  return (
    <Container testID="welcome_screen">
      <WelcomeImage testID="nextdots_logo" source={NDLogo} />
      <Title color="primary" variant="bold" size={14}>
        {`REACT NATIVE TYPESCRIPT\nNEXTDOTS v0.61.5 FEBRUARY 2020`}
      </Title>
      <Button
        testID="go_to_signin_button"
        size="big"
        text="Go To Sign In"
        onPress={() => goToPage('SignIn')}
      />
    </Container>
  );
};

export default Welcome;
