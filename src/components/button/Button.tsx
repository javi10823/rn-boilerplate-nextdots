import React from 'react';

import { ButtonTouchable, Title } from './styles';

export type Type = 'primary' | 'secondary';

export type Size = 'small' | 'medium' | 'big' | 'auto';

interface ButtonProps {
  text: string;
  type: Type;
  size: Size;
  onPress: () => void;
  disabled: boolean;
}

const Button = ({ text, onPress, type, size, disabled }: ButtonProps) => (
  <ButtonTouchable type={type} onPress={onPress} disabled={disabled} size={size}>
    <Title type={type}>{text}</Title>
  </ButtonTouchable>
);

Button.defaultProps = {
  type: 'primary',
  disabled: false,
  size: 'medium',
  onPress: () => {},
};

export default Button;
