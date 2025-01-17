
import React, { useState, useEffect, ChangeEvent } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import CommonStyles from '../../styles/CommonStyles';
import Colors from '../../constants/Colors';

export default function CasaDeCambio() {
    const [cantidadDolares, setCantidadDolares] = useState<string>('');
    const [cantidadSoles, setCantidadSoles] = useState<number>(0);
    const [tipoCambio, setTipoCambio] = useState<number>(3.466);
    const [ahorroEstimado, setAhorroEstimado] = useState<number>(5.15);

    const calcularCambio = () => {
        const cantidadDolaresNum = parseFloat(cantidadDolares);
        if (!isNaN(cantidadDolaresNum)) {
            setCantidadSoles(cantidadDolaresNum * tipoCambio);
        } else {
            setCantidadSoles(0);
        }
    };

    useEffect(() => {
        calcularCambio();
    }, [cantidadDolares, tipoCambio]);

    const handleInputChange = (text: string) => {
        const value = text.replace(/[^0-9.]/g, '');
        setCantidadDolares(value);
    };

    return (
        <View style={CommonStyles.contentContainer}>
            <Text style={CommonStyles.title}>Kambista</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                <TouchableOpacity style={[CommonStyles.button, { width: '48%', backgroundColor: Colors.compra }]}>
                    <Text style={CommonStyles.buttonText}>Compra: 3.321</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[CommonStyles.button, { width: '48%', backgroundColor: Colors.venta }]}>
                    <Text style={CommonStyles.buttonText}>Venta: 3.321</Text>
                </TouchableOpacity>
            </View>

            <Text style={CommonStyles.label}>¿Cuánto envías?</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                <TextInput
                    style={[CommonStyles.input, { flex: 1 }]}
                    keyboardType="numeric"
                    value={cantidadDolares}
                    onChangeText={handleInputChange}
                    placeholder="Ingrese la cantidad"
                />
                <Text style={{ marginLeft: 10 }}>Dólares</Text>
            </View>

            <Text style={CommonStyles.label}>Entonces recibes</Text>
            <Text style={CommonStyles.infoText}>{cantidadSoles.toFixed(2)} Soles</Text>

            <Text style={CommonStyles.infoText}>Ahorro estimado: S/ {ahorroEstimado}</Text>
            <Text style={CommonStyles.infoText}>Tipo de cambio: {tipoCambio}</Text>

            <TouchableOpacity style={CommonStyles.button}>
                <Text style={CommonStyles.buttonText}>INICIAR OPERACIÓN</Text>
            </TouchableOpacity>
        </View>
    );
}