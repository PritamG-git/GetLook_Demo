import React from 'react';
import {IconButton} from 'react-native-paper';

interface IconProps {
  iconName: any;
  color?: string;
  onPress?: Function;
  size?: number;
  disabled?: boolean;
}

const IconElement: React.FC<IconProps> = ({
  iconName,
  color,
  onPress,
  size,
  disabled,
}) => {
  return (
    <IconButton
      icon={iconName}
      color={color}
      size={size || 25}
      onPress={() => {
        onPress && onPress();
      }}
      style={{margin: 0}}
      disabled={disabled || false}
    />
  );
};

export default IconElement;
