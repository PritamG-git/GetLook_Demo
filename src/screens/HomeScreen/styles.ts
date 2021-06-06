import {StyleSheet} from 'react-native';
import {appFonts, appTheme} from 'theme';

const size_logo = appTheme.SIZES.height * 0.2;

export default StyleSheet.create({
  Section: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appTheme.COLORS.white,
    margin: 10,
    borderColor: appTheme.COLORS.lightGray,
    borderWidth: 1,
  },
  CustomText1: {
    fontFamily: appFonts.Bold,
    color: appTheme.COLORS.PRIMARY_DISABLED,
    paddingVertical: 5,
    fontSize: appTheme.SIZES.font_large,
  },
  Section1: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appTheme.COLORS.white,
    bottom: 55,
    marginHorizontal: 20,
  },
  CustomText2: {
    fontFamily: appFonts.Bold,
    color: appTheme.COLORS.primary,
    paddingVertical: 5,
    fontSize: appTheme.SIZES.font_small,
  },
});
