import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Step {
  label: string;
  active: boolean;
}

interface StepperProps {
  steps: Step[];
}

const Stepper: React.FC<StepperProps> = ({ steps }) => {
  const totalSteps = steps.length;

  return (
    <View style={styles.container}>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <View style={styles.stepGroup}>
            <View style={styles.circleContainer}>
              <View style={[styles.stepCircle, step.active && styles.stepActive]} />
              
            </View>
            <Text style={[styles.stepLabel, step.active && styles.stepLabelActive]}>{step.label}</Text>
          </View>
          {index < totalSteps - 1 && (
            <View style={styles.lineContainer}> {/* Contenedor para la línea */}
              <View
                style={[
                  styles.stepLine,
                  steps[index].active && steps[index + 1].active ? styles.lineActive : styles.lineInactive,
                ]}
              />
            </View>
          )}
        </React.Fragment>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
    width: '100%',
  },
  stepGroup: {
    alignItems: 'center',
    flex: 1, // Distribuye los grupos equitativamente
  },
  circleContainer: {
    alignItems: 'center', // Centra el círculo verticalmente
  },
  stepCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: 'gray',
    backgroundColor: 'white',
  },
  stepActive: {
    backgroundColor: 'black',
    borderColor: 'black',
  },
  lineContainer: { // Estilo para el contenedor de la línea
    flex: 1,
    alignItems: 'center', // Centra la línea verticalmente
    justifyContent: 'center'
  },
  stepLine: {
    height: 2,
    backgroundColor: 'gray',
    width: '100%', // La línea ocupa todo el ancho de su contenedor
  },
  lineActive: {
    backgroundColor: 'black',
  },
  lineInactive: {
    backgroundColor: 'gray',
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