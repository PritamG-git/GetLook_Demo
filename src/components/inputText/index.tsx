import React from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {appTheme} from 'theme';
import {Styles} from './styles';

interface inputTextProps {
  changeHandler?: any;
  placeholderText?: string;
  fieldValue?: string;
  changeTextHandler?: any;
  isEditable?: boolean;
  nonEditableStyle?: any;
  keyboardType?: any;
  maxLength?: number;
  inputFieldStyle?: any;
  inputLabelStyle?: any;
  handleKeyPress?: any;
  leftOnPress?: any;
  leftIcon?: string;
  leftColor?: any;
  placeholderColor?: any;
}

const InputText: React.FC<inputTextProps> = ({
  changeHandler,
  placeholderText,
  fieldValue,
  changeTextHandler,
  isEditable,
  nonEditableStyle,
  keyboardType,
  maxLength,
  inputFieldStyle,
  handleKeyPress,
  leftIcon,
  leftColor,
  leftOnPress,
  placeholderColor,
}): JSX.Element => {
  const fieldStyle =
    isEditable === false
      ? [Styles.disabledInput, nonEditableStyle]
      : [Styles.inputField, inputFieldStyle];

  return (
    <View style={Styles.inputTextWrap}>
      <View>
        <TextInput
          dense
          mode="outlined"
          onChange={changeHandler}
          placeholder={placeholderText}
          style={fieldStyle}
          placeholderTextColor={placeholderColor || appTheme.COLORS.placeholder}
          value={fieldValue}
          onChangeText={changeTextHandler}
          disabled={isEditable === false ? true : false}
          keyboardType={keyboardType || 'default'}
          maxLength={maxLength}
          left={
            leftIcon ? (
              <TextInput.Icon
                name={leftIcon}
                color={leftColor}
                size={20}
                onPress={leftOnPress}
              />
            ) : null
          }
          onKeyPress={handleKeyPress}
        />
      </View>
    </View>
  );
};

export default InputText;
