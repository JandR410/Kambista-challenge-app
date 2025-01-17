import React from 'react';
import { TextInput, KeyboardTypeOptions, StyleProp, TextStyle } from 'react-native';
import Style from '../../styles/CommonStyles';
import Colors from '../../constants/Colors';

interface InputProps {
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  onChangeText?: (text: string) => void;
  value?: string;
  style?: StyleProp<TextStyle>;
}

const Input: React.FC<InputProps> = ({ placeholder, keyboardType, onChangeText, value, style }) => {
  return (
    <TextInput
      style={[Style.input, style]} 
      placeholder={placeholder}
      keyboardType={keyboardType}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

export default Input;