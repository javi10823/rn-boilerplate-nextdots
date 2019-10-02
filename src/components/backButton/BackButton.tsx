import * as React from 'react';
import { TouchableOpacity, ViewStyle, TextStyle } from 'react-native';
import { nlz } from '../../styled';
import { Icon, Typography, Container, IconContainer, TextContainer } from './styles';
import { theme } from '../../styled/theme';

interface Props {
  text: string;
  style: ViewStyle;
  iconStyle: TextStyle;
  textSize: number;
  size: number;
  iconColor: keyof typeof theme.text | keyof typeof theme.color | keyof typeof theme.ui;
  onPress: () => void;
  textColor: keyof typeof theme.text;
}

const BackButton = ({
  text,
  style,
  iconStyle,
  textSize,
  size,
  iconColor,
  onPress,
  textColor,
}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container style={style}>
        <IconContainer>
          <Icon name="arrow-back" size={nlz(size)} color={iconColor} style={iconStyle} />
        </IconContainer>
        {!!text && (
          <TextContainer>
            <Typography size={textSize} color={textColor}>
              {text}
            </Typography>
          </TextContainer>
        )}
      </Container>
    </TouchableOpacity>
  );
};

BackButton.defaultProps = {
  text: '',
  style: {},
  iconStyle: {},
  textSize: 18,
  size: 20,
  iconColor: theme.text.primary,
  textColor: 'primary',
  onPress: () => {},
};

export default BackButton;
