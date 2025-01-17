import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome';
import CommonStyles from '../../styles/CommonStyles';
import { router } from 'expo-router';
import Colors from '../../constants/Colors';
import { Picker } from '@react-native-picker/picker';
import CustomButton from '../components/Button';
import Stepper from '../components/Stepper';


export default function DatosOperacion() {
    const [selectedBancoEnvio, setSelectedBancoEnvio] = useState<string | null>(null);
    const [selectedCuentaRecibo, setSelectedCuentaRecibo] = useState<string | null>(null);
    const [selectedOrigenFondos, setSelectedOrigenFondos] = useState<string | null>(null);

    const bancos = ['Selecciona', 'BCP', 'Interbank', 'BanBif', 'Otro'];
    const cuentas = ['Selecciona', 'Cuenta Corriente', 'Cuenta de Ahorros', 'Otro'];
    const origenes = ['Selecciona', 'Nómina', 'Ahorros', 'Ventas', 'Otro'];

    const initialTime = 30;
    const [timer, setTimer] = useState(initialTime);
    const [isButtonEnabled, setIsButtonEnabled] = useState(false)

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (timer > 0) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        } else {
            console.log("llego a 0")
        }

        return () => clearInterval(interval);
    }, [timer]);

    const formatTime = () => {
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');
        return `${formattedMinutes}:${formattedMinutes}:${formattedSeconds}`;
    };

    const steps = [
        { label: 'Completa', active: true },
        { label: 'Transfiere', active: false },
        { label: 'Constancia', active: false },
    ];

    const handleBancoEnvioChange = (value: string | null) => {
        setSelectedBancoEnvio(value);
        setIsButtonEnabled(value !== 'Selecciona');
    }

    return (
        <View style={{ flex: 1, backgroundColor: "#060F26", paddingVertical: 18 }}> { }
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
                <View style={[CommonStyles.contentContainer, { paddingHorizontal: 0 }]}>

                    <Stepper steps={steps} />




                    <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#F6F6F9' }} showsVerticalScrollIndicator={false}> { }
                        <Text style={[CommonStyles.timerText]}>El tipo de cambio podría actualizarse en <Text style={{ color: '##666666CC', fontWeight: 'bold' }}>{formatTime()}</Text></Text>
                        <Text style={{ fontFamily: 'Montserrat-BoldItalic', fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: Colors.text, textAlign: 'center', paddingHorizontal: 20 }}>Completa los datos de tu operación</Text>

                        <View style={CommonStyles.cardText}>
                            <View>
                                <View style={CommonStyles.amountRow}>
                                    <Text style={{ color: '#060F26', fontSize: 16 }}>Tú envías</Text>
                                    <Text style={{ fontWeight: 'bold' }}>$ 100.00</Text>
                                </View>
                                <View style={CommonStyles.amountRow}>
                                    <Text style={{ color: '#060F26', fontSize: 16 }}>Tú recibes</Text>
                                    <Text style={{ fontWeight: 'bold' }}>S/343.00</Text>
                                </View>
                                <View style={CommonStyles.separator}></View>
                                <Text style={{ fontWeight: 'bold', marginTop: -12, fontSize: 12 }}>Tipo de cambio utilizado <Text style={{ color: 'red', textDecorationLine: 'line-through' }}> 3.422 </Text>    3.433</Text>
                            </View></View>

                        <View style={{ flexDirection: 'row', borderRadius: 10, paddingHorizontal: 23, paddingVertical: 12, marginBottom: 20, backgroundColor: 'rgba(232, 243, 254, 0.95)', marginHorizontal: 20, marginTop: 16 }}>
                            <FontAwesome6 name="info-circle" size={20} color="black" />
                            <Text style={{ marginStart: 12, fontSize: 11, color: '#082774', textAlign: 'left', marginEnd: 23 }}>Tiempo estimado de espera <Text style={{ fontWeight: 'bold' }}>BCP, Interbank y BanBif: 15 min.</Text> (aplica para cualquier monto).<Text style={{ fontWeight: 'bold' }}>Otros bancos 1 día útil.</Text> </Text>
                        </View>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 10, color: Colors.gray2, marginHorizontal: 20 }}>¿Desde qué banco nos envías tu dinero?</Text>
                        <View style={[CommonStyles.pickerContainer, { marginHorizontal: 20 }]}>
                            <Picker
                                selectedValue={selectedBancoEnvio}
                                onValueChange={handleBancoEnvioChange}
                                style={CommonStyles.picker}
                                dropdownIconColor={Colors.text}
                            >
                                {bancos.map((banco) => (
                                    <Picker.Item key={banco} label={banco} value={banco} />
                                ))}
                            </Picker>
                        </View>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 10, color: Colors.gray2, marginHorizontal: 20 }}>¿En qué cuenta deseas recibir tu dinero?</Text>
                        <View style={[CommonStyles.pickerContainer, { marginHorizontal: 20 }]}>
                            <Picker
                                selectedValue={selectedCuentaRecibo}
                                onValueChange={() => setSelectedCuentaRecibo}
                                style={CommonStyles.picker}
                                dropdownIconColor={Colors.text}
                            >
                                {cuentas.map((cuentas) => (
                                    <Picker.Item key={cuentas} label={cuentas} value={cuentas} />
                                ))}
                            </Picker>
                        </View>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 10, color: Colors.gray2, marginHorizontal: 20 }}>Origen de fondos</Text>
                        <View style={[CommonStyles.pickerContainer, { marginHorizontal: 20 }]}>
                            <Picker
                                selectedValue={selectedOrigenFondos}
                                onValueChange={() => setSelectedOrigenFondos}
                                style={CommonStyles.picker}
                                dropdownIconColor={Colors.text}
                            >
                                {origenes.map((origenes) => (
                                    <Picker.Item key={origenes} label={origenes} value={origenes} />
                                ))}
                            </Picker>
                        </View>

                        <CustomButton
                            title="CONTINUAR"
                            onPress={() => {
                                router.navigate('/screens/TranfiereKambista');

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
};