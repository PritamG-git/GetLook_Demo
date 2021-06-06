import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  primary: '#A61009',
  secondary: '#FFB198',

  black: '#000000',
  white: '#ffffff',
  grey: '#737373',

  background_color: '#F2F6F9',
  disabled: '#eff1f6',
  placeholder: '#A9A9A9',
  red: '#FD4242',
  PRIMARY_DISABLED: '#4E4E4E',
  SECONDARY_DISABLED: '#c8ccd0',
  transparent: 'transparent',
  lightGray: '#B9B6B6',
  yellow: '#FFFF00',
};

export const SIZES = {
  font_small: 12,
  font_medium: 14,
  font_large: 16,

  width,
  height,

  padding: 20,
};

const appTheme = {COLORS, SIZES};

export default appTheme;
