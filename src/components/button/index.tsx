import React, {ReactElement} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Text,
} from 'react-native';
import {appTheme} from 'theme';
import defaultStyle from './styles';

interface Props {
  label: string;
  btnStyle?: object;
  labelStyle?: object;
  onPress: any;
  isDisabled?: boolean;
  icon?: ReactElement;
  pending?: boolean;
}

const Button: React.FC<Props> = ({
  label,
  btnStyle,
  labelStyle,
  onPress,
  isDisabled = false,
  icon,
  pending = false,
}) => {
  const getButtonIcon = () => {
    let toBeRenderd;
    if (pending) {
      toBeRenderd = (
        <ActivityIndicator
          size={'small'}
          color={appTheme.COLORS.white}
          animating={true}
        />
      );
    } else if (icon) {
      toBeRenderd = icon;
    }

    if (toBeRenderd) {
      return <View style={defaultStyle.iconContainer}>{toBeRenderd}</View>;
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      disabled={isDisabled || pending}>
      <View
        style={{
          ...defaultStyle.wrapper,
          backgroundColor: isDisabled
            ? appTheme.COLORS.disabled
            : appTheme.COLORS.primary,
          ...btnStyle,
        }}>
        {getButtonIcon()}
        <View style={[getButtonIcon() ? defaultStyle.textContainer : {}]}>
          <Text
            style={{
              ...defaultStyle.label,
              color: isDisabled
                ? appTheme.COLORS.SECONDARY_DISABLED
                : appTheme.COLORS.white,
              ...labelStyle,
            }}>
            {label}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default Button;
