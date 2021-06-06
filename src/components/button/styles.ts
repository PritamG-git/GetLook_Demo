import {StyleSheet} from 'react-native';
import {appFonts, appTheme} from 'theme';

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '4%',
    marginVertical: 4,
    backgroundColor: appTheme.COLORS.primary,
    borderRadius: 6,
  },
  label: {
    color: appTheme.COLORS.white,
    fontFamily: appFonts.Bold,
    letterSpacing: 1,
  },
  textContainer: {
    maxWidth: '80%',
    marginRight: 10,
  },
  iconContainer: {
    maxWidth: '20%',
    marginRight: 5,
  },
});
