import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import CommonStyles from '../../styles/CommonStyles';
import Colors from '../../constants/Colors';
import CustomButton from '../components/Button';
import { router } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';

export default function CasaDeCambio() {
    const PRECIO_COMPRA = 3.321;
    const [cantidad, setCantidad] = useState<number>(1000);
    const [unidad, setUnidad] = useState<'Soles' | 'Dolares'>('Dolares');
    const [cantidadRecibida, setCantidadRecibida] = useState<number>(0);
    const [ahorroEstimado] = useState<number>(5.15);
    const [tipoCambio] = useState<number>(3.466);
    const [selectedOption, setSelectedOption] = useState<'compra' | 'venta'>('compra');

    const calcularCambio = () => {
        if (unidad === 'Dolares') {
            setCantidadRecibida(cantidad * PRECIO_COMPRA);
        } else {
            setCantidadRecibida(cantidad / PRECIO_COMPRA);
        }
    };

    useEffect(() => {
        calcularCambio();
    }, [cantidad, unidad]);

    const handleIconPress = () => {
        setUnidad(unidad === 'Dolares' ? 'Soles' : 'Dolares');
    };

    const handleInputChange = (text: string) => {
        const parsedValue = parseFloat(text.replace(/[^0-9.]/g, ''));
        setCantidad(isNaN(parsedValue) ? 0 : parsedValue);
    };

    return (
        <View>
            <View style={{ paddingVertical: 18, flexDirection: 'row' }}>
                <Image
                    source={require('../../assets/images/img4.jpeg')}
                    style={[CommonStyles.headerLogo, { width: 30, marginStart:20    }]}
                    resizeMode="contain"
                />
                <View style={CommonStyles.headerLogoContainer}>
                    <Image
                        source={require('../../assets/images/logo.jpeg')}
                        style={[CommonStyles.headerLogo, { width: 150 }]}
                        resizeMode="contain"
                    />
                </View>
                <TouchableOpacity onPress={() => router.dismiss()}>
                    <FontAwesome6 name="times" size={24} color="white" style={{ marginLeft: 15, marginStart: '88%' }} />
                </TouchableOpacity>
            </View>
            <View style={CommonStyles.card}> { }

                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={[
                            CommonStyles.button,
                            {
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                                borderBottomLeftRadius: 0,
                                borderBottomRightRadius: 0,
                                width: '50%',
                                backgroundColor: selectedOption === 'compra' ? Colors.compra : 'white'
                            },
                        ]}
                        onPress={() => setSelectedOption('compra')}
                    >
                        <Text style={[CommonStyles.buttonText, { color: selectedOption === 'compra' ? 'white' : Colors.compra }]}>Compra: 3.321</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            CommonStyles.button,
                            {
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                                borderBottomLeftRadius: 0,
                                borderBottomRightRadius: 0,
                                width: '50%',
                                backgroundColor: selectedOption === 'venta' ? Colors.compra : 'white',
                            },
                        ]}
                        onPress={() => setSelectedOption('venta')}
                    >
                        <Text style={[CommonStyles.buttonText, { color: selectedOption === 'venta' ? 'white' : Colors.venta }]}>Venta: 3.321</Text>
                    </TouchableOpacity>
                </View>

                <View style={CommonStyles.separator}></View>

                <View style={{ flexDirection: 'row', marginHorizontal: '5%', marginBottom: 10 }}>
                    <View style={{ backgroundColor: Colors.cardCompraAndVenta, width: '60%', borderTopLeftRadius: 5, borderBottomLeftRadius: 5, padding: 10 }}>
                        <Text style={{ fontWeight: 'regular', fontSize: 14, paddingLeft: 9 }}>¿Cuánto envías?</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, paddingLeft: 16, color: Colors.secondary }}>1000</Text>
                    </View>
                    <TouchableOpacity style={CommonStyles.iconContainerCard} onPress={handleIconPress}>
                        <FontAwesome6 name="rotate" size={20} color={Colors.secondary} />
                    </TouchableOpacity>
                    <View style={{ backgroundColor: Colors.secondary, width: '40%', borderTopRightRadius: 5, borderBottomRightRadius: 5, padding: 10 }}>
                        <Text style={{ alignItems: 'center', fontSize: 16, paddingLeft: 9, color: 'white', marginTop: '10%', fontWeight: 'bold' }}>{unidad === 'Dolares' ? 'Dólares' : 'Soles'}</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', marginHorizontal: '5%' }}>
                    <View style={{ backgroundColor: Colors.cardCompraAndVenta, width: '60%', borderTopLeftRadius: 5, borderBottomLeftRadius: 5, padding: 10 }}>
                        <Text style={{ fontWeight: 'regular', fontSize: 14, paddingLeft: 9 }}>Entonces recibes</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, paddingLeft: 16, color: Colors.secondary }}>{cantidadRecibida.toFixed(2)}</Text>
                    </View>
                    <View style={{ backgroundColor: Colors.secondary, width: '40%', borderTopRightRadius: 5, borderBottomRightRadius: 5, padding: 10 }}>
                        <Text style={{ alignItems: 'center', fontSize: 16, paddingLeft: 9, color: 'white', marginTop: '10%', fontWeight: 'bold' }}>{unidad === 'Dolares' ? 'Soles' : 'Dólares'}</Text>
                    </View>
                </View>

                <View style={{ marginTop: 10, flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                    <Text style={[CommonStyles.infoText, { marginHorizontal: '5%' }]}>Ahorro estimado:</Text>
                    <Text style={[CommonStyles.infoText, { marginHorizontal: '5%', textAlign: 'right' }]}>Tipo de cambio:</Text>
                </View>

                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginBottom: 10 }}>
                    <Text style={[CommonStyles.infoText, { marginHorizontal: '5%', textAlign: 'left' }]}> S/ {ahorroEstimado}</Text>
                    <Text style={[CommonStyles.infoText, { marginHorizontal: '5%', textAlign: 'right' }]}> {tipoCambio}</Text>
                </View>

            </View>
            <CustomButton title="INICIAR OPERACIÓN" onPress={() => router.push('/cuentas')} style={{ marginTop: 20, width: '90%', borderRadius: 7, backgroundColor: '#00E3C2' }} textColor='#060F26' />
        </View>
    );
}