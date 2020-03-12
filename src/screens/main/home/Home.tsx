import React from 'react';
import { connect } from 'react-redux';

import { Container, Title } from './styles';
import { Button, Spacing } from '../../../components';
import { goToPage, initApp } from '../../../navigation';
import { logOut } from '../../../actions/auth';

interface Props {
  logOut: Function;
}

const Home = ({ logOut }: Props) => {
  const onPressLogOut = async () => {
    initApp('Welcome');
    await logOut();
  };

  return (
    <Container testID="home_screen">
      <Title color="primary" variant="bold" size={14}>
        {`HOME`}
      </Title>
      <Button size="big" text="Go To FetchExample" onPress={() => goToPage('FetchExample')} />
      <Spacing />
      <Button size="big" text="Log Out" onPress={onPressLogOut} />
    </Container>
  );
};

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch: Function) => ({
  logOut: () => dispatch(logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
