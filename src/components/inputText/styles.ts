import {StyleSheet} from 'react-native';

import {appFonts, appTheme} from 'theme';

export const Styles = StyleSheet.create({
  inputTextWrap: {
    marginBottom: 16,
  },
  inputField: {
    lineHeight: 21,
    fontFamily: appFonts.Regular,
    fontSize: 13,
    borderColor: appTheme.COLORS.primary,
    borderRadius: 4,
    backgroundColor: appTheme.COLORS.white,
  },
  disabledInput: {
    lineHeight: 21,
    fontFamily: appFonts.Regular,
    fontSize: 13,
    backgroundColor: appTheme.COLORS.disabled,
  },
});
