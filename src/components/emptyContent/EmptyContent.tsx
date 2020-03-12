import * as React from 'react';
import { ActivityIndicator } from 'react-native';
import { Container } from './styles';
import { theme } from '../../styled/theme';
import Typography from '../typography';

interface Props {
  text: string;
  spinnerColor: string;
  testID?: string;
}

const BackButton = ({ text, spinnerColor, testID }: Props) => {
  return (
    <Container testID={testID}>
      {text ? <Typography>{text}</Typography> : <ActivityIndicator color={spinnerColor} />}
    </Container>
  );
};

BackButton.defaultProps = {
  text: 'Empty content',
  spinnerColor: theme.color.primary,
};

export default BackButton;
