import * as styledComponents from 'styled-components/native';
import * as Dimensions from '../utils/dimensions';

import { theme, Theme } from './theme';

// prettier-ignore
const { css, ThemeProvider } = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<Theme>;

const styled = styledComponents.default as styledComponents.ReactNativeStyledInterface<Theme>;

export default styled;
export { theme, ThemeProvider, css };
export const rs = Dimensions.responsiveSize;
export const nlz = Dimensions.normalize;
