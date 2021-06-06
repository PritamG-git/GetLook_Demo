//import {goBack} from '@routes/navigationService';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {appImages, appTheme} from 'theme';
import IconElement from '../icon';
import Styles from './styles';

interface PageHeaderProps {
  iconColor?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({iconColor}) => {
  return (
    <View style={Styles.Header}>
      <View style={Styles.Section}>
        <IconElement
          iconName="menu"
          color={iconColor || appTheme.COLORS.grey}
          size={30}
        />
        <Image
          source={appImages.logo}
          resizeMode="contain"
          style={Styles.HeaderImage}
        />
      </View>
      <View style={Styles.Section}>
        <IconElement
          iconName="purse"
          color={iconColor || appTheme.COLORS.grey}
          size={30}
        />
        <IconElement
          iconName="dots-vertical"
          color={iconColor || appTheme.COLORS.grey}
          size={30}
        />
      </View>
    </View>
  );
};

export default PageHeader;
