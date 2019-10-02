import { View } from 'react-native';
import styled from 'styled-components';
import icon from 'react-native-vector-icons/MaterialIcons';
import { theme, rs, nlz } from '../../styled';
import { default as typography } from '../typography';

export const Container = styled(View)({
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
});

export const IconContainer = styled(View)({
  alignItems: 'center',
  padding: rs(5),
});

export const Icon = styled(icon)(p => ({
  color: p.color || theme.text.primary,
  fontSize: p.size || nlz(20),
}));

export const Typography = styled(typography)((p: any) => ({
  marginRight: rs(35),
  fontSize: p.size || nlz(18),
}));

export const TextContainer = styled(View)({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});
