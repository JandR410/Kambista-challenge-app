// app/_layout.tsx
import { Stack,Tabs, useRouter } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export default function Layout() {
    const router = useRouter();
    return (
        <SafeAreaProvider style={{ backgroundColor: '' }}>
            <StatusBar style="light" backgroundColor="#060F26" />
            <Stack
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="index" options={{ title: 'Inicio'}} />
                <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
                <Stack.Screen name="agregarCuenta" options={{title:'AgregarCuenta' }} />
            </Stack>
        </SafeAreaProvider>
    );
}