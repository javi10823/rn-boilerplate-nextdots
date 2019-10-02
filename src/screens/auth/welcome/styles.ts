import styled from 'styled-components/native';

import Typography from '../../../components/typography';
import { rs, theme } from '../../../styled';
import { Container as _Container } from '../../../components';

export const Container = styled(_Container)(() => ({
  backgroundColor: theme.color.white,
  justifyContent: 'center',
  alignItems: 'center',
}));

export const WelcomeImage = styled.Image(() => ({
  width: rs(80),
  height: rs(80),
}));

export const Title = styled(Typography)<any>(() => ({
  margin: rs(20),
  textAlign: 'center',
}));
