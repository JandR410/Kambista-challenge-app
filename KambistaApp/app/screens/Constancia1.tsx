import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome';
import CommonStyles from '../../styles/CommonStyles';
import { router } from 'expo-router';
import Colors from '../../constants/Colors';
import CustomButton from '../components/Button';
import Stepper from '../components/Stepper';
import { TextInputString, TextInputNumber } from '../components/Input';

export default function Constancia1() {
    const [codigo, setCodigo] = useState<number | undefined>();
    const steps = [
        { label: 'Completa', active: true },
        { label: 'Transfiere', active: false },
        { label: 'Constancia', active: false },
    ];

    const isButtonEnabled = () => {
        if (codigo !== undefined) {
            return codigo > 0;
        }
        return false;
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
                <View style={[CommonStyles.contentContainer, { paddingHorizontal: 0 }]}>
                    <Stepper steps={steps} />
                    <ScrollView
                        contentContainerStyle={{ flexGrow: 1, backgroundColor: '#F6F6F9' }}
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={CommonStyles.cardText}>
                            <View>
                                <Image
                                    source={require('../../assets/images/constancia.jpeg')}
                                    style={[CommonStyles.headerLogo, { width: '100%', alignContent: 'center', alignItems: 'center' }]}
                                    resizeMode="contain"
                                />
                                <Text
                                    style={{
                                        fontFamily: 'Montserrat-BoldItalic',
                                        fontSize: 24,
                                        fontWeight: 'bold',
                                        marginBottom: 20,
                                        color: Colors.text,
                                        textAlign: 'center',
                                        paddingHorizontal: 20,
                                    }}
                                >
                                    Envia tu Constancia
                                </Text>

                                <Text style={{ color: '#060F26', fontSize: 16 }}>
                                    Escribe el código de operación del banco aquí
                                </Text>
                                <TextInputNumber
                                    style={{ marginTop: 10, textAlign: 'center' }}
                                    placeholder=""
                                    value={codigo}
                                    onChangeText={setCodigo}
                                />

                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}> { }
                                    <FontAwesome6 name="question" size={15} color="black" />
                                    <Text style={{ marginStart: 2, fontSize: 12, textAlign: 'left', marginEnd: 23 }}>
                                        ¿Donde encuentro el código de operación?
                                    </Text>
                                </View>

                                <Text style={{ color: '#060F26', fontSize: 14, marginVertical: 28, marginEnd: 40 }}>
                                    Verificaremos tu operación para depositar S/ 343.00 a tu cuenta.
                                </Text>
                            </View>
                        </View>

                        { }
                        {isButtonEnabled() && (
                            <Text style={[CommonStyles.timerText, { marginTop: 10, color: '#666666', textDecorationLine: 'underline', fontWeight: 'bold' }]}>
                                Detalle de tu operación
                            </Text>
                        )}

                        <CustomButton
                            title="ENVIA TU CONSTANCIA"
                            onPress={() => router.navigate('/screens/ConstanciaEnviada')}
                            style={{
                                marginTop: 20,
                                width: '90%',
                                borderRadius: 7,
                                backgroundColor: isButtonEnabled() ? '#00E3C2' : '#00C896CC',
                            }}
                            textColor={isButtonEnabled() ? Colors.secondary : '060F26'}
                            disabled={!isButtonEnabled()}
                        />
                    </ScrollView>
                </View>
            </View>
        </View>
    );
}