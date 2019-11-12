import React from 'react';

import { ButtonTouchable, ButtonTouchableStyle, Title, getSizeStyle } from './styles';
import AnimatedSqueeze from '../AnimatedSqueeze';

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
  <AnimatedSqueeze 
    disabled={disabled}
    onPress={onPress} 
    touchableStyle={ButtonTouchableStyle({ disabled, type })}
    viewStyle={getSizeStyle(size)}
  >
    <Title type={type}>{text}</Title>
  </AnimatedSqueeze>
);

Button.defaultProps = {
  type: 'primary',
  disabled: false,
  size: 'medium',
  onPress: () => {},
};

export default Button;