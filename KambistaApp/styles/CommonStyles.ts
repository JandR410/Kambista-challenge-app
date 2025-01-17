import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const CommonStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    contentContainer: {
        flex: 1,
        backgroundColor: Colors.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: Colors.gray,
        padding: 18,
        marginBottom: 15,
        borderRadius: 10,
    },
    infoText: {
        fontSize: 14,
        color: '#666'
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 10,
    },
    checkbox: {
        width: 24,
        height: 24,
        borderWidth: 1,
        borderColor: Colors.gray,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        width: '100%',
        alignSelf: 'center',
    },
    buttonText: {
        color: Colors.gray,
        fontSize: 16,
        fontWeight: 'bold',
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: Colors.gray,
        borderRadius: 10,
        marginBottom: 15,
        padding: 2, 
        overflow: 'hidden',
    },
    picker: {
        height: 50,
        width: '100%',
        color: Colors.gray
    },
    roundedTop: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    iconContainer: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitleStyle: {
        color: 'white'
    },
    iconImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    headerLogoContainer: {
        position: 'absolute',
        height: 60,
        marginTop: '3.7%',
        marginStart: '30%',
        zIndex: 1
    },
    headerLogo: {
        height: 70
    },
    headerIconRight: {
        width: 30,
        height: 30,
        marginRight: 40,
    },
    fullScreenContainer: {
        flex: 1, // Asegura que ocupe toda la pantalla
    },
    
    botonCompra: {
        backgroundColor: Colors.compra,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        width: '48%',
    },
    botonVenta: {
        backgroundColor: Colors.venta,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        width: '48%',
    },
    botonText: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 5,
        margin:'5%', 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        width: '90%', 
        maxWidth: 400, 
    },
    separator: {
        height: 1, 
        backgroundColor: '#ccc',
        marginBottom: 20
      },
      iconContainerCard: {
        position: 'absolute', 
        backgroundColor: 'white', 
        padding: 5,
        marginTop:'15%',
        marginLeft:'58%',
        borderRadius: 50,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        zIndex:1
    },

    floatingButton: {
        position: 'absolute',
        bottom: 20, 
        right: 20, 
        backgroundColor: Colors.secondary, 
        borderRadius: 30, 
        width: 40, 
        height: 40, 
        justifyContent: 'center', 
        alignItems: 'center', // Centrar horizontalmente
        elevation: 5, // Sombra en Android
        shadowColor: '#000', // Sombra en iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
      },

});

export default CommonStyles;