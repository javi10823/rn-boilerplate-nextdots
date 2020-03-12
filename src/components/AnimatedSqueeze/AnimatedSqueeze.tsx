import React, { Component } from 'react';
import { Animated, Easing, TouchableOpacity } from 'react-native';
import { isIos } from '../../utils/responsive';

interface Props {
  children: React.ReactNode;
  disabled: boolean;
  onPress: Function;
  touchableStyle: object;
  viewStyle: object;
  testID?: string;
}

class AnimatedSqueeze extends Component<Props> {
  static defaultProps = {
    disabled: false,
    onPress: () => {},
    touchableStyle: {},
    viewStyle: {},
    testID: null,
  };

  SqueezeValue = new Animated.Value(0);

  animateIn = () => {
    this.SqueezeValue.setValue(0);
    Animated.timing(this.SqueezeValue, {
      duration: isIos ? 450 : 900,
      easing: Easing.linear,
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  animateOut = () => {
    this.SqueezeValue.setValue(0);
    Animated.timing(this.SqueezeValue, {
      duration: isIos ? 450 : 900,
      easing: Easing.linear,
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  scaleAndGoTo = () => {
    const { onPress } = this.props;
    this.animateOut();
    onPress();
  };

  render() {
    const { children, disabled, touchableStyle, viewStyle, testID } = this.props;
    const squeezee = this.SqueezeValue.interpolate({
      inputRange: [0, 0.3, 0.6, 1],
      outputRange: [1, 0.99, 0.98, 0.96],
    });

    return (
      <Animated.View testID={testID} style={[{ transform: [{ scale: squeezee }] }, viewStyle]}>
        <TouchableOpacity
          activeOpacity={1}
          disabled={disabled}
          onPress={this.scaleAndGoTo}
          onPressIn={this.animateIn}
          onPressOut={this.animateOut}
          style={touchableStyle}
        >
          {children}
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

export default AnimatedSqueeze;
