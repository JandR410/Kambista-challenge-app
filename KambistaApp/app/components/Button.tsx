import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StyleProp, ViewStyle, DimensionValue } from 'react-native';
import CommonStyles from '../../styles/CommonStyles';

interface CustomButtonProps {
    title: string;
    onPress: () => void;
    backgroundColor?: string;
    textColor?: string;
    width?: DimensionValue;
    height?: DimensionValue;
    borderRadius?: number;
    style?: StyleProp<ViewStyle>;
    disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    title,
    onPress,
    backgroundColor = 'blue',
    textColor = 'white',
    width = 'auto',
    height = 'auto',
    borderRadius = 0,
    style,
    disabled = false,
}) => {
    return (
        <TouchableOpacity
            style={[
                CommonStyles.button,
                { backgroundColor, width, height, borderRadius, opacity: disabled ? 0.5 : 1 },
                style,
            ]}
            onPress={disabled ? undefined : onPress}
            disabled={disabled}
        >
            <Text style={[CommonStyles.buttonText, { color: textColor }]}>{title}</Text>
        </TouchableOpacity>
    );
};

export default CustomButton;