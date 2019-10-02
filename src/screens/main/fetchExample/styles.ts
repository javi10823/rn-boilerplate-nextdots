import styled from 'styled-components/native';

import Typography from '../../../components/typography';
import { theme, rs } from '../../../styled';
import { Container as _Container } from '../../../components';

export const Container = styled(_Container)(() => ({
  backgroundColor: theme.color.white,
  justifyContent: 'center',
  alignItems: 'center',
}));

export const Title = styled(Typography)<any>(() => ({
  margin: rs(20),
  textAlign: 'center',
}));

export const JSONContainer = styled.View(() => ({
  padding: rs(10),
  flex: 1,
  width: '100%',
  backgroundColor: theme.color.inactive,
  justifyContent: 'center',
  alignItems: 'center',
}));
