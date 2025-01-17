import React, { useCallback } from 'react';
import { TextInput, StyleProp, TextStyle } from 'react-native';
import Style from '../../styles/CommonStyles';

interface TextInputStringProps {
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string | undefined;
  style?: StyleProp<TextStyle>;
  secureTextEntry?: boolean;
  maxLength?: number;
  onBlur?: () => void;
  onFocus?: () => void;
}

const TextInputString: React.FC<TextInputStringProps> = ({
  placeholder,
  onChangeText,
  value,
  style,
  secureTextEntry,
  maxLength,
  onBlur,
  onFocus,
}) => {
  const handleOnChangeText = useCallback((text: string) => {
    onChangeText(text);
  }, [onChangeText]);

  return (
    <TextInput
      style={[Style.input, style]}
      placeholder={placeholder}
      onChangeText={handleOnChangeText}
      value={value ?? ''}
      secureTextEntry={secureTextEntry}
      textAlign={'left'}
      maxLength={maxLength}
      onBlur={onBlur}
      onFocus={onFocus}
    />
  );
};


interface TextInputNumberProps {
  placeholder: string;
  onChangeText: (value: number | undefined) => void;
  value: number | undefined;
  style?: StyleProp<TextStyle>;
  maxLength?: number;
  onBlur?: () => void;
  onFocus?: () => void;
}

const TextInputNumber: React.FC<TextInputNumberProps> = ({
  placeholder,
  onChangeText,
  value,
  style,
  maxLength,
  onBlur,
  onFocus,
}) => {
  const handleOnChangeText = useCallback((text: string) => {
    if (text === "") {
      onChangeText(undefined);
    } else {
      const parsed = Number(text);
      onChangeText(isNaN(parsed) ? undefined : parsed);
    }
  }, [onChangeText]);

  return (
    <TextInput
      style={[Style.input, style]}
      placeholder={placeholder}
      onChangeText={handleOnChangeText}
      value={value?.toString() ?? ''}
      keyboardType="numeric"
      maxLength={maxLength}
      onBlur={onBlur}
      onFocus={onFocus}
    />
  );
};

export { TextInputString, TextInputNumber };