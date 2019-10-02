import { TextProps, TouchableOpacityProps } from 'react-native';
import styled, { css } from 'styled-components/native';
import { Type, Size } from './Button';
import { rs } from '../../styled';

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
    primary: css`
      background-color: ${p => (disabled ? p.theme.color.inactive : p.theme.color.lightBlue)};
    `,
    secondary: css`
      background-color: transparent;
    `,
  }[type]);

const getSizeStyle = (size: Size) =>
  ({
    small: css`
      min-width: 35%;
    `,
    medium: css`
      min-width: 60%;
    `,
    big: css`
      min-width: 85%;
    `,
    auto: css`
      /* fits to text width */
    `,
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
