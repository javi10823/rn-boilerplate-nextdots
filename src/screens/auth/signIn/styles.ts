import styled from 'styled-components/native';
import { rs, theme } from '../../../styled';
import { Container as _Container } from '../../../components';
import { View } from 'react-native';

export const Container = styled(_Container)(() => ({
  backgroundColor: theme.color.white,
}));

export const Content = styled(View)(() => ({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
}));
