import { TextProps, TouchableOpacityProps } from 'react-native';
import styled, { css } from 'styled-components/native';
import { Type, Size } from './Button';
import { rs, theme } from '../../styled';

type TitleProps = {
  type: Type;
} & TextProps;

type ButtonTouchableProps = {
  type: Type;
  disabled: boolean;
  size: Size;
} & TouchableOpacityProps;

const getTypeStyle = (type: Type, disabled: boolean) =>
  ({
    primary: {
      backgroundColor: disabled ? theme.color.inactive : theme.color.nextDotsPurple,
    },
    secondary: {
      backgroundColor: 'transparent',
    },
  }[type]);

export const getSizeStyle = (size: Size) =>
  ({
    small: {
      minWidth: '35%',
    },
    medium: {
      minWidth: '60%',
    },
    big: {
      minWidth: '85%',
    },
    auto: {
      /* fits to text width */
    },
  }[size]);

function getTextStyle(type: Type) {
  return {
    primary: css`
      color: ${p => p.theme.color.white};
    `,
    secondary: css`
      color: ${p => p.theme.color.lightBlue};
    `,
  }[type];
}

export const ButtonTouchableStyle = ({ disabled, type }) => ({
  borderRadius: rs(10),
  height: rs(55),
  justifyContent: 'center',
  padding: rs(5),
  ...getTypeStyle(type, disabled),
});

export const ButtonTouchable = styled.TouchableOpacity<ButtonTouchableProps>`
  justify-content: center;
  padding: ${rs(5)}px;
  border-radius: ${rs(10)}px;
  height: ${rs(55)}px;
  ${p => getTypeStyle(p.type, p.disabled)};
  ${p => getSizeStyle(p.size)};
`;

export const Title = styled.Text<TitleProps>`
  text-align: center;
  font-size: 16px;
  ${p => getTextStyle(p.type)}
`;