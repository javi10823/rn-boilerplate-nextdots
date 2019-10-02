import { TextProperties, Text } from 'react-native';

import { TypographyVariant } from './Typography';
import styled from 'styled-components/native';
import { theme, nlz } from '../../styled';

type StyledTextProps = {
  color: keyof typeof theme.text;
  textAlign: 'left' | 'right' | 'center';
  size: number;
  variant: keyof typeof TypographyVariant;
} & TextProperties;

export const StyledText = styled(Text)((p: StyledTextProps) => ({
  color: theme.text[p.color],
  textAlign: p.textAlign,
  fontSize: nlz(p.size),
}));
