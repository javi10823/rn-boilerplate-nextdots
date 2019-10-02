import styled from 'styled-components';
import { View } from 'react-native';

export const _Spacing = styled(View)<{
  isHorizontal: boolean;
  size: number;
}>`
  height: ${(p: any) => (!p.isHorizontal ? p.size : 'auto')};
  width: ${(p: any) => (p.isHorizontal ? p.size : 'auto')};
`;
