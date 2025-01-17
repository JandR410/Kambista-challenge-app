import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Step {
  label: string;
  active: boolean;
  color?: string;
  textColor?: string;
  lineVisible?: boolean;
}

interface StepperProps {
  steps: Step[];
}

const Stepper: React.FC<StepperProps> = ({ steps }) => {
  const totalSteps = steps.length;
  const circleRadius = 6;

  return (
    <View style={styles.container}>
      {steps.map((step, index) => (
        <View key={index} style={styles.stepContainer}>
          <View style={styles.stepGroup}>
            <View
              style={[
                styles.stepCircle,
                step.color && { backgroundColor: step.color },
                step.active && styles.stepActive,
              ]}
            />
            <Text
              style={[
                styles.stepLabel,
                step.textColor && { color: step.textColor },
                step.active && styles.stepLabelActive,
              ]}
            >
              {step.label}
            </Text>
          </View>
          {index < totalSteps - 1 && (
            <View
              style={[
                styles.stepLine,
                step.lineVisible ? styles.lineActive : null,
                step.color && { backgroundColor: step.color },
                {
                  width: '100%',
                  position: 'absolute',
                  left: circleRadius * 8 + 10,
                  top: 5,
                },
              ]}
            />
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
    width: '100%',
    position: 'relative',
  },
  stepContainer: {
    flex: 1,
    alignItems: 'center',
  },
  stepGroup: {
    alignItems: 'center',
  },
  stepCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'gray',
    zIndex: 1,
  },
  stepActive: {
    backgroundColor: 'black',
    borderColor: 'black',
  },
  stepLine: {
    height: 2,
    backgroundColor: 'gray',
  },
  lineActive: {
    height: 4,
    marginTop: -1
  },
  stepLabel: {
    marginTop: 5,
    color: '#D9D9D9',
    fontSize: 12,
    textAlign: 'center',
  },
  stepLabelActive: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default Stepper;