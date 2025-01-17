import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import CommonStyles from '../../styles/CommonStyles';
import { router } from 'expo-router';
import FontAwesome6 from '@expo/vector-icons/FontAwesome';
import Colors from '../../constants/Colors';
import { Picker } from '@react-native-picker/picker';

export default function Cuentas() {
  const [selectedValue, setSelectedValue] = useState<string>('Cuentas bancarias');

  return (
    <View style={{ flex: 1, backgroundColor: "#060F26", paddingTop: 18 }}>
      <View style={{ paddingVertical: 18, flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => router.back()}>
          <FontAwesome6 name="chevron-left" size={24} color="white" style={{ marginLeft: 15 }} />
        </TouchableOpacity>
        <View style={CommonStyles.headerLogoContainer}>
          <Image
            source={require('../../assets/images/logo_top.jpeg')}
            style={CommonStyles.headerLogo}
            resizeMode="contain"
          />
        </View>
        <TouchableOpacity onPress={() => router.dismiss()}>
          <FontAwesome6 name="times" size={24} color="white" style={{ marginLeft: 15, marginStart: '88%' }} />
        </TouchableOpacity>
      </View>

      <View style={CommonStyles.container}>
        <View style={CommonStyles.contentContainer}>
          <Text style={{ marginStart: -30, marginTop: 34, fontFamily: 'Montserrat-BoldItalic', fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: Colors.text, textAlign: 'center' }}>Cuentas</Text>
          <View style={[CommonStyles.pickerContainer]}>
            <Picker
              selectedValue={selectedValue}
              onValueChange={(itemValue) => setSelectedValue(itemValue)}
              style={CommonStyles.picker}
              dropdownIconColor={Colors.text}
            >
              <Picker.Item label="Cuentas Bancarias" value="CuenB" />
              <Picker.Item label="Cuentas propias" value="CuenB1" />
              <Picker.Item label="Otrois bancos" value="CuenB2" />
            </Picker>
          </View>
          <TouchableOpacity
            style={CommonStyles.floatingButton}
            onPress={() => router.push('/screens/AgregarCuentas')}

          >
            <FontAwesome6 name="plus" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
