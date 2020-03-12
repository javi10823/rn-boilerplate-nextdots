import * as React from 'react';
import { ViewStyle } from 'react-native';
import { _Container } from './styles';
import { SafeAreaViewProps } from 'react-navigation';

interface Props extends SafeAreaViewProps {
  children: React.ReactNode | React.ReactNodeArray;
  style: ViewStyle;
}

const Container = ({ children, ...props }: Props) => {
  return <_Container {...props}>{children}</_Container>;
};

Container.defaultProps = {
  style: {},
};

export default Container;
