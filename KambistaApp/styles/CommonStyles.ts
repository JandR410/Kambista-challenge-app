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
        textAlign: 'left'
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
        color: Colors.selectPicker
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
        marginTop:'20%',
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
      timerText: {
        textAlign: 'center',
        marginBottom: 12,
        fontSize: 15,
        color: 'gray'
      },

      cardText: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        marginHorizontal: '7%',
        elevation: 3, // Sombra en Android
        shadowColor: '#000', // Sombra en iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    amountRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    containerStepper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
        paddingHorizontal: 20, 
        marginVertical: 20, 
      },
      stepContainer: {
        alignItems: 'center',
        flex: 1, 
      },
      stepCircle: {
        width: 12,
        height: 12,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: Colors.gray, 
        backgroundColor: 'gray',
      },
      stepActive: {
        backgroundColor: Colors.secondary, 
        borderColor: Colors.secondary, 
      },
      stepLine: {
        flex: 1,
        height: 2,
        backgroundColor: 'gray', 
  
      },
      stepLabel: {
        marginTop: 5,
        color: '#D9D9D9',
        fontSize: 12,
      },
      stepLabelActive: {
        color: Colors.secondary, 
        fontWeight: 'bold',
      },
      stepLineInner: {
          flex: 1,
          height: 1, 
          backgroundColor: Colors.secondary, 
        },
        contentCircle: { 
            flexDirection: 'row',
            alignItems: 'center',
        },
        aa: {
            flex: 1, 
                height: 2,
    backgroundColor: 'gray',
              
        },
        loadingContainer: {
            position: 'absolute', 
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            opacity: 0.5, 
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
        },
});

export default CommonStyles;