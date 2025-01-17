import { Stack, Tabs, useRouter } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from '../context/AuthContext';

export default function Layout() {
    const router = useRouter();
    return (
        <AuthProvider>
            <SafeAreaProvider style={{ backgroundColor: '' }}>
                <StatusBar style="light" backgroundColor="#060F26" />
                <Stack
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <Stack.Screen name="index" options={{ title: 'Inicio' }} />
                    <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
                    <Stack.Screen name="agregarCuenta" options={{ title: 'AgregarCuenta' }} />
                    <Stack.Screen name="(tabs)" /> {
                        <Tabs>
                            <Tabs.Screen name="casaDeCambio" options={{ title: 'Casa de Cambio' }} />
                        </Tabs>

                    }
                    <Stack.Screen name="constancia1" options={{ title: 'Constancia1' }} />
                    <Stack.Screen name="constanciaEnviada" options={{ title: 'ConstanciaEnviada' }} />
                    <Stack.Screen name="datosOperacion" options={{ title: 'DatosOperacion' }} />
                    <Stack.Screen name="transfiereKambista" options={{ title: 'TransfiereKambista' }} />
                </Stack>
            </SafeAreaProvider>
        </AuthProvider>
    );
}