import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome';
import CommonStyles from '../../styles/CommonStyles';
import { router } from 'expo-router';
import Colors from '../../constants/Colors';
import CustomButton from '../components/Button';
import { AuthContext } from '../../context/AuthContext';

export default function Constancia1() {
    const [codigo, setCodigo] = useState('');
    const { cantidadRecividaGlobal } = useContext(AuthContext);
    const isButtonEnabled = codigo.length > 0;

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
                    <ScrollView
                        contentContainerStyle={{ flexGrow: 1, backgroundColor: '#F6F6F9' }}
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={CommonStyles.cardText}>
                            <View>
                                <Image
                                    source={require('../../assets/images/exito.jpeg')}
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
                                    ¡Constancia Enviada!
                                </Text>
                                <View style={CommonStyles.separator}></View>

                                <Text style={{ color: '#686868', fontSize: 14, fontWeight: 'bold' }}>Código Kambista</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontWeight: 'bold', marginLeft: 10 }}>km20ttfff</Text>
                                    <TouchableOpacity onPress={router.canDismiss}>
                                        <FontAwesome6 name="clone" size={18} color="black" style={{ marginLeft: 15 }} />
                                    </TouchableOpacity>
                                </View>

                                <Text style={{ color: '#060F26', fontSize: 14, marginTop: 8 }}>*Usa tu código para dar seguimiento a tu operación.</Text>

                                <Text style={{ color: '#686868', fontSize: 14, fontWeight: 'bold', marginTop: 8 }}>Monto a recibir</Text>
                                <Text style={{ fontWeight: 'bold', marginLeft: 10 }}>S/ {cantidadRecividaGlobal}</Text>

                                <Text style={{ color: '#686868', fontSize: 14, fontWeight: 'bold', marginTop: 8 }}>Tiempo estimado de espera</Text>
                                <Text style={{ fontWeight: 'bold', marginLeft: 10 }}>1 día útil</Text>



                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    source={require('../../assets/images/star.jpeg')}
                                    style={[CommonStyles.headerLogo, { width: '8%', marginRight: '4%', marginLeft: '20%', alignContent: 'center', alignItems: 'center' }]}
                                    resizeMode="contain"
                                />
                                <Text style={{ color: '##060F26', textDecorationLine: 'underline', fontSize: 16 }}>
                                    Recomienda y gana
                                </Text>
                            </View>
                        </View>
                        <Text style={[CommonStyles.timerText, { marginTop: 16, color: '###060F26', fontSize: 16, marginHorizontal: 25 }]}>
                            Verificaremos tu operación. Puedes ver su estado en “Operaciones”.
                        </Text>

                        <CustomButton
                            title="IR A MIS OPERACIONES"
                            onPress={() => router.navigate('/screens/ConstanciaEnviada')}
                            style={{
                                marginTop: 20,
                                width: '90%',
                                borderRadius: 7,
                                backgroundColor: isButtonEnabled ? '#00E3C2' : '#00C896CC',
                            }}
                            textColor={isButtonEnabled ? Colors.secondary : '060F26'}
                            disabled={!isButtonEnabled}
                        />

                        <TouchableOpacity onPress={() => router.push('/')}>
                            <Text style={[CommonStyles.timerText, { marginTop: 16, color: '#686868', fontSize: 16, marginHorizontal: 25, textDecorationLine: 'underline', fontWeight: 'bold' }]}>
                                Volver al inicio
                            </Text>
                        </TouchableOpacity>

                    </ScrollView>
                </View>
            </View >
        </View >
    );
}