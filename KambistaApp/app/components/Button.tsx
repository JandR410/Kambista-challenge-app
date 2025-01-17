import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ViewStyle, StyleProp, DimensionValue } from 'react-native';
import CommonStyles from '../../styles/CommonStyles';

interface CustomButtonProps {
    title: string;
    onPress: () => void;
    backgroundColor?: string;
    textColor?: string;
    width?: DimensionValue; // Tipo DimensionValue
    height?: DimensionValue; // Tipo DimensionValue
    borderRadius?: number;
    style?: StyleProp<ViewStyle>; // Tipo StyleProp<ViewStyle>
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
}) => {
    return (
        <TouchableOpacity
            style={[
                CommonStyles.button,
                { backgroundColor, width, height, borderRadius },
                style, 
            ]}
            onPress={onPress}
        >
            <Text style={[CommonStyles.buttonText, { color: textColor }]}>{title}</Text>
        </TouchableOpacity>
    );
};

export default CustomButton;