import { Dimensions, Platform, PixelRatio } from 'react-native';
import { REF_RATIO } from './responsive';

const { height, width } = Dimensions.get('window');

export const H = height;
export const W = width;

// based on iphone 5s's scale
const scale = width / 320;

export function normalize(size: number) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }

  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
}

export const iPhoneSE = () => height < 570;

export function responsiveSize(value: number) {
  return Math.round(value * REF_RATIO);
}

export function responsiveSizePlatForm(iphoneSize: number, androidSize: number) {
  return Platform.OS === 'ios' ? responsiveSize(iphoneSize) : responsiveSize(androidSize);
}
