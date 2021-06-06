import {StyleSheet} from 'react-native';
import {appTheme} from 'theme';

const Styles = StyleSheet.create({
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: appTheme.COLORS.white,
    elevation: 10,
  },
  HeaderImage: {
    width: 130,
    height: 50,
  },
  Section: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Styles;
