import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Linking, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import CommonStyles from '../styles/CommonStyles';
import CustomButton from './components/Button';
import { TextInputString, TextInputNumber } from './components/Input';
import Colors from '../constants/Colors';
import FontAwesome6 from '@expo/vector-icons/FontAwesome';
import { router } from 'expo-router';

export default function App() {
    const [selectedValue, setSelectedValue] = useState<string>('DNI');
    const [checkedTerms, setCheckedTerms] = useState(false);
    const [checkedData, setCheckedData] = useState(false);
    const [nombre, setNombre] = useState('');
    const [numeroDoc, setNumeroDoc] = useState<number | undefined>(undefined);
    const [celular, setCelular] = useState<number | undefined>(undefined);
    const [dondeCambiaste, setDondeCambiaste] = useState('');
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
                        source={require('../assets/images/logo_top.jpeg')}
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
                        <Text style={{ fontFamily: 'Montserrat-BoldItalic', fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: Colors.text, textAlign: 'center' }}>¡Empecemos!</Text>
                        <Text style={{ fontSize: 16, marginBottom: 20, color: Colors.text, textAlign: 'center', marginHorizontal: 33 }}>Completa tus datos como figuran en tu DNI</Text>

                        <Text style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 20, color: Colors.gray2 }}>Nombres Completos</Text>
                        <TextInputString placeholder="Escribe tu nombre" value={nombre} onChangeText={setNombre} />

                        <View style={{ flexDirection: 'row', marginBottom: 10, marginTop: 20 }}>
                            <View>
                                <Text style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 20, color: Colors.gray2 }}>Nombres Completos</Text>
                                <View style={[CommonStyles.pickerContainer, { width: '130%' }]}>
                                    <Picker
                                        selectedValue={selectedValue}
                                        onValueChange={(itemValue) => setSelectedValue(itemValue)}
                                        style={CommonStyles.picker}
                                        dropdownIconColor={Colors.text}
                                    >
                                        <Picker.Item label="DNI" value="DNI" />
                                        <Picker.Item label="CE" value="CE" />
                                        <Picker.Item label="Pasaporte" value="Pasaporte" />
                                    </Picker>
                                </View>
                            </View>
                            <View style={{ marginStart: '14%', width: '100%' }}>
                                <Text style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 20, color: Colors.gray2 }}>Número</Text>
                                <TextInputNumber placeholder="Número Doc" value={numeroDoc} onChangeText={setNumeroDoc} style={{ width: '48%' }} />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', borderRadius: 10, paddingHorizontal: 23, paddingVertical: 12, marginBottom: 20, backgroundColor: 'rgba(232, 243, 254, 0.95)' }}>
                            <FontAwesome6 name="question" size={20} color="black" />
                            <Text style={{ marginStart: 12, fontSize: 11, color: 'rgba(69, 109, 211, 0.8)', textAlign: 'left', marginEnd: 23 }}>Tu documento de identidad debe coincidir con tus datos para evitar incovenientes al momento de hacer una primera operación.</Text>
                        </View>

                        <Text style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 10, color: Colors.gray2 }}>Número de celular</Text>
                        <TextInputNumber placeholder="Número celular" value={celular} onChangeText={setCelular} />

                        <Text style={{ fontSize: 14, marginBottom: 10 }}>¿Dónde cambiaste antes? (Opcional)</Text>
                        <View style={[CommonStyles.pickerContainer]}>
                            <Picker
                                selectedValue={dondeCambiaste}
                                onValueChange={(itemValue) => setDondeCambiaste(itemValue)}
                                style={CommonStyles.picker}
                                dropdownIconColor={Colors.text}
                            >
                                <Picker.Item label="Cambistas" value="Cambistas" />
                                <Picker.Item label="Bancos" value="Bancos" />
                                <Picker.Item label="Otros" value="Otros" />
                            </Picker>
                        </View>

                        <View style={{ flexDirection: 'column', marginTop: 20 }}>
                            <View style={CommonStyles.checkboxContainer}>
                                <TouchableOpacity onPress={() => setCheckedTerms(!checkedTerms)} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={[CommonStyles.checkbox, { backgroundColor: checkedTerms ? Colors.primary : 'transparent' }]}>
                                        {checkedTerms && <Ionicons name="checkmark" size={16} color={Colors.white} />}
                                    </View>
                                </TouchableOpacity>
                                <Text onPress={() => openLink("https://kambista.com/terminos-y-condiciones")} style={{ marginStart: 15, color: Colors.secondText, flexShrink: 1 }}>He leído y acepto los <Text style={{ textDecorationLine: 'underline', fontWeight: 'bold', color: 'black' }}>Términos y condiciones</Text></Text>
                            </View>

                            <View style={CommonStyles.checkboxContainer}>
                                <TouchableOpacity onPress={() => setCheckedData(!checkedData)} style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                                    <View style={[CommonStyles.checkbox, { backgroundColor: checkedData ? Colors.primary : 'transparent' }]}>
                                        {checkedData && <Ionicons name="checkmark" size={16} color={Colors.white} />}
                                    </View>
                                </TouchableOpacity>
                                <Text onPress={() => openLink("https://kambista.com/politica-de-tratamiento-de-datos-personales")} style={{ marginStart: 15, color: Colors.secondText, flexShrink: 1 }}>Acepto de manera expresa e informada la <Text style={{ color: 'black', textDecorationLine: 'underline', fontWeight: 'bold' }}>Política de Tratamiento de Datos personales de Kambista</Text></Text>
                            </View>
                        </View>
                        {
                            isButtonEnabled = checkedData && checkedTerms
                        }

                        <CustomButton
                            title="CONTINUAR"
                            onPress={() => {
                                if (isButtonEnabled) {
                                    router.navigate('/casaDeCambio');
                                } else {
                                    alert('¡Por favor, completa todos los campos y acepta los términos!');
                                }
                            }}
                            style={{
                                marginTop: 20,
                                width: '90%',
                                borderRadius: 7,
                                backgroundColor: isButtonEnabled ? '#00E3C2' : '#00C896CC',
                            }}
                            textColor={isButtonEnabled ? Colors.secondary : '060F26'}
                        />
                    </ScrollView>

                </View>
            </View>
        </View>
    );
}