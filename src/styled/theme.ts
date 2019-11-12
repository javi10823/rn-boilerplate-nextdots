const tintColor = '#62d0cf';

const color = {
  tintColor,
  tabIconDefault: '#ccc',
  tabIconSelected: '#00D3A7',
  tabBar: '#242529',
  errorBackground: 'red',
  errorText: '#fff',
  warningBackground: '#EAEB5E',
  warningText: '#666804',
  noticeBackground: tintColor,
  noticeText: '#fff',
  opacityBackground: '#00000080',
  primary: '#00dcda',
  white: 'white',
  primaryButton: 'rgb(65,176,202)',
  inactive: '#b1b1b1',
  black: 'black',
  lightBlue: '#2196F3',
  lightBlueDisabled: '#bfdce3',
  nextDotsPurple: '#401bc4',
};

export const theme = {
  color,
  text: {
    white: 'white',
    black: 'black',
    primary: 'rgb(53,53,55)',
  },
  ui: {
    error: 'red',
    primary: 'blue',
  },
};

export type Theme = typeof theme;