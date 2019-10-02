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
    <Container>
      <Title color="primary" variant="bold" size={14}>
        {`HOME`}
      </Title>
      <Button size="big" text="Go to FetchExample" onPress={() => goToPage('FetchExample')} />
      <Spacing />
      <Button size="big" text="LogOut" onPress={onPressLogOut} />
    </Container>
  );
};

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch: Function) => ({
  logOut: () => dispatch(logOut()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
