import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome';
import CommonStyles from '../../styles/CommonStyles';
import { router } from 'expo-router';
import Colors from '../../constants/Colors';
import CustomButton from '../components/Button';
import Stepper from '../components/Stepper';


export default function TranfiereKambista() {

    const steps = [
        { label: 'Completa', active: true },
        { label: 'Transfiere', active: false },
        { label: 'Constancia', active: false },
    ];

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
                        <Text style={[CommonStyles.timerText]}>El tipo de cambio podría actualizarse a las <Text style={{ color: '##666666CC', fontWeight: 'bold' }}>13:15</Text></Text>

                        <View style={CommonStyles.cardText}>
                            <View>
                                <Image
                                    source={require('../../assets/images/tranfiere.jpeg')}
                                    style={[CommonStyles.headerLogo, { width: '100%', alignContent: 'center', alignItems: 'center' }]}
                                    resizeMode="contain"
                                />
                                <Text style={{ fontFamily: 'Montserrat-BoldItalic', fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: Colors.text, textAlign: 'center', paddingHorizontal: 20 }}>Transfiere a kambista</Text>


                                <Text style={{ color: '#060F26', fontSize: 16 }}>Transfiere desde tu app bancaria y guarda el número o código de operación para el siguiente paso.</Text>

                                <View style={[CommonStyles.cardText, { marginTop: 10, borderColor: Colors.secondary, borderWidth: 0.5 }]}>
                                    <Text style={{ color: '#060F26', fontSize: 16 }}>Banco</Text>
                                    <Text style={{ fontWeight: 'bold', marginLeft: 10 }}>Interbank</Text>

                                    <Text style={{ color: '#060F26', fontSize: 16, marginTop: 15 }}>Monto</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ fontWeight: 'bold', marginLeft: 10 }}>S/ 1,000.00</Text>
                                        <TouchableOpacity onPress={router.canDismiss}>
                                            <FontAwesome6 name="clone" size={18} color="black" style={{ marginLeft: 15 }} />
                                        </TouchableOpacity>
                                    </View>


                                    <Text style={{ color: '#060F26', fontSize: 16, marginTop: 15 }}>Número de cuenta</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ fontWeight: 'bold', marginLeft: 10 }}>201010000000000</Text>
                                        <TouchableOpacity onPress={router.canDismiss}>
                                            <FontAwesome6 name="clone" size={18} color="black" style={{ marginLeft: 15 }} />
                                        </TouchableOpacity>
                                    </View>

                                    <Text style={{ color: '#060F26', fontSize: 16, marginTop: 15 }}>RUC</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ fontWeight: 'bold', marginLeft: 10 }}>20601708141</Text>
                                        <TouchableOpacity onPress={router.canDismiss}>
                                            <FontAwesome6 name="clone" size={18} color="black" style={{ marginLeft: 15 }} />
                                        </TouchableOpacity>
                                    </View>

                                    <Text style={{ color: '#060F26', fontSize: 16, marginTop: 15 }}>Titular de la cuenta</Text>
                                    <Text style={{ fontWeight: 'bold', marginLeft: 10 }}>Kambista SAC</Text>

                                    <Text style={{ color: '#060F26', fontSize: 16, marginTop: 15 }}>Tipo de cuenta </Text>
                                    <Text style={{ fontWeight: 'bold', marginLeft: 10 }}>Corriente</Text>
                                </View>
                            </View>
                        </View>
                        <Text style={[CommonStyles.timerText, { marginTop: 10, color: '#666666', textDecorationLine: 'underline', fontWeight: 'bold' }]}>Detalle de tu operación</Text>

                        <CustomButton title="YA HICE MI TRANSFERENCIA" onPress={() => router.navigate('/screens/Constancia1')} style={{ marginTop: 20, width: '90%', borderRadius: 7, backgroundColor: '#00E3C2' }} textColor='#060F26' />

                    </ScrollView>
                </View>
            </View>
        </View>
    );
};