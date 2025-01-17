import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Linking, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import CommonStyles from '../../styles/CommonStyles';
import CustomButton from '../components/Button';
import { TextInputString, TextInputNumber } from '../components/Input';
import Colors from '../../constants/Colors';
import FontAwesome6 from '@expo/vector-icons/FontAwesome';
import { router } from 'expo-router';

export default function App() {
  const [selectedValueTipo, setSelectedValueTipo] = useState<string>('Ahorros');
  const [selectedValueBanco, setSelectedValueBanco] = useState<string>('Ahorros');
  const [checkedTerms, setCheckedTerms] = useState(false);
  const [nombreCuenta, setNombreCuenta] = useState('');
  const [numeroCuenta, setNumeroCuenta] = useState<number | undefined>();
  const [selectedOption, setSelectedOption] = useState<'soles' | 'dolares'>('soles');
  var isButtonEnabled = false

  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#060F26", paddingVertical: 18 }}>
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
          <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}> { }
            <Text style={{ fontFamily: 'Montserrat-BoldItalic', fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: Colors.text, textAlign: 'center' }}>Agregar Cuenta</Text>

            <Text style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 10, color: Colors.gray2 }}>Tipo de cuenta</Text>
            <View style={[CommonStyles.pickerContainer, { width: '98%' }]}>
              <Picker
                selectedValue={selectedValueTipo}
                onValueChange={(itemValue) => setSelectedValueTipo(itemValue)}
                style={CommonStyles.picker}
                dropdownIconColor={Colors.text}
              >
                <Picker.Item label="Ahorros" value="DNI" />
                <Picker.Item label="Cuenta Corriente" value="CC" />
                <Picker.Item label="Cuenta Dolares" value="CD" />
              </Picker>
            </View>

            <Text style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 10, color: Colors.gray2 }}>Banco</Text>
            <View style={[CommonStyles.pickerContainer, { width: '98%' }]}>
              <Picker
                selectedValue={selectedValueBanco}
                onValueChange={(itemValue) => setSelectedValueBanco(itemValue)}
                style={CommonStyles.picker}
                dropdownIconColor={Colors.text}
              >
                <Picker.Item label="Banco de Credito" value="BCP" />
                <Picker.Item label="Banco BBVA" value="BBVA" />
                <Picker.Item label="Caja Huancaya" value="CH" />
              </Picker>
            </View>

            <View style={{ flexDirection: 'row', borderRadius: 10, paddingHorizontal: 23, paddingVertical: 12, marginBottom: 20, backgroundColor: 'rgba(232, 243, 254, 0.95)' }}>
              <FontAwesome6 name="info" size={20} color="black" />
              <Text style={{ marginStart: 12, fontSize: 11, color: 'rgba(69, 109, 211, 0.8)', textAlign: 'left', marginEnd: 23 }}>Operamos en Lima con todos los bancos. Y en provincia con el BCP y cuentas digitales Interbank.</Text>
            </View>

            <Text style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 10, color: Colors.gray2 }}>Moneda</Text>

            <View  ></View>

            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
              <TouchableOpacity
                style={[
                  CommonStyles.button,
                  {
                    borderRadius: 10,
                    width: '45%',
                    marginRight: '10%',
                    backgroundColor: selectedOption === 'soles' ? Colors.compra : 'white',
                    borderWidth: 0.2,
                    elevation: 3
                  },
                ]}
                onPress={() => setSelectedOption('soles')}
              >
                <Text style={[CommonStyles.buttonText, { color: selectedOption === 'soles' ? 'white' : Colors.compra }]}>Soles</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  CommonStyles.button,
                  {
                    borderRadius: 10,
                    width: '45%',
                    backgroundColor: selectedOption === 'dolares' ? Colors.compra : 'white',
                    borderWidth: 0.2,
                    elevation: 3
                  },
                ]}
                onPress={() => setSelectedOption('dolares')}
              >
                <Text style={[CommonStyles.buttonText, { color: selectedOption === 'dolares' ? 'white' : Colors.venta }]}>Dolares</Text>
              </TouchableOpacity>
            </View>

            <Text style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 10, color: Colors.gray2 }}>Número de Cuenta</Text>
            <TextInputNumber placeholder="Escribe tu cuenta destino" value={numeroCuenta} onChangeText={setNumeroCuenta} />

            <Text style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 10, color: Colors.gray2 }}>Ponle nombre a tu cuenta</Text>
            <TextInputString placeholder="Escribe un alias" value={nombreCuenta} onChangeText={setNombreCuenta} />

            <View style={{ flexDirection: 'column', marginTop: 20 }}>
              <View style={CommonStyles.checkboxContainer}>
                <TouchableOpacity onPress={() => setCheckedTerms(!checkedTerms)} style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={[CommonStyles.checkbox, { backgroundColor: checkedTerms ? Colors.primary : 'transparent' }]}>
                    {checkedTerms && <Ionicons name="checkmark" size={16} color={Colors.white} />}
                  </View>
                </TouchableOpacity>
                <Text onPress={() => openLink("https://kambista.com/terminos-y-condiciones")} style={{ marginStart: 15, color: Colors.secondText, flexShrink: 1 }}>Declaro esta cuenta es mía</Text>
              </View>


            </View>
            {
              isButtonEnabled = checkedTerms
            }
            <CustomButton
              title="AGREGAR CUENTA"
              onPress={() => {
                router.navigate('/screens/DatosOperacion');

              }}
              style={{
                marginTop: 20,
                width: '90%',
                borderRadius: 7,
                backgroundColor: isButtonEnabled ? '#00E3C2' : '#00C896CC',
              }}
              textColor={isButtonEnabled ? Colors.secondary : '060F26'}
              disabled={!isButtonEnabled}
            />

          </ScrollView>

        </View>
      </View>
    </View>
  );
}