// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/AgregarCuentas'; // Asegúrate de que la ruta sea correcta
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
      <View>
        <Text>Tabs Layout</Text> {/* Contenido temporal */}
      </View>
    );
};

export default App;