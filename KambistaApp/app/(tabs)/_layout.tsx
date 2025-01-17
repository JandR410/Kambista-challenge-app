import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs, useRouter } from 'expo-router';
import { Pressable } from 'react-native';
import { Image, StyleSheet, View } from 'react-native';
import Colors from '@/constants/Colors';
import Style from '@/styles/CommonStyles';
import { useColorScheme } from '@/app/components/useColorScheme';
import { useClientOnlyValue } from '@/app/components/useClientOnlyValue';

function TabBarIcon(props: {
  name: 'inicio' | 'operaciones' | 'cuentas' | 'notificaciones' | 'perfil';
  color: string;
}) {
  const getImageSource = (name: string) => {
    switch (name) {
      case 'inicio':
        return require('../../assets/images/img1.jpeg'); 
      case 'operaciones':
        return require('../../assets/images/img2.jpeg');
      case 'cuentas':
        return require('../../assets/images/img3.jpeg');
      case 'notificaciones':
        return require('../../assets/images/img4.jpeg');
      default:
        return require('../../assets/images/img5.jpeg');
    }
  };

  const imageSource = getImageSource(props.name);

  return (
    <View style={Style.iconContainer}> {/* Contenedor View */}
      <Image
        source={imageSource}
        style={[Style.iconImage]} // tintColor AHORA en Image
        resizeMode="contain"
      />
    </View>
  );
}

export default function TabLayout() {
  const router = useRouter();
  const colorScheme = useColorScheme();

  return (


    
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="casaDeCambio"
        options={{
          tabBarLabel: 'Inicio',
          headerStyle: {
            backgroundColor: '#060F26',
          },
          headerShown: false,
          headerTitle: () => (
            <View style={Style.headerLogoContainer}> {}
              <Image
                source={require('../../assets/images/logo_top.jpeg')}
                style={Style.headerLogo}
                resizeMode="contain"
              />
            </View>
          ),
          headerLeft: () => (
            <Pressable onPress={() => router.back()}> {/* Flecha de retroceso */}
              <FontAwesome name="chevron-left" size={24} color="white" style={{ marginLeft: 15 }} />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable onPress={() => router.dismiss()}> {/* dismiss */}
              <FontAwesome name="times" size={24} color="white" style={{ marginRight: 15 }} />
            </Pressable>
          ),
          tabBarIcon: ({ color }) => <TabBarIcon name="inicio" color={color} />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Operaciones',
          tabBarIcon: ({ color }) => <TabBarIcon name="operaciones" color={color} />,
        }}
      />
      <Tabs.Screen
        name="cuentas"
        options={{
          headerShown:false,
          tabBarIcon: ({ color }) => <TabBarIcon name="cuentas" color={color} />,
        }}
      />
      <Tabs.Screen
        name="four"
        options={{
          title: 'Notificaciones',
          tabBarIcon: ({ color }) => <TabBarIcon name="notificaciones" color={color} />,
        }}
      />
      <Tabs.Screen
        name="five"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => <TabBarIcon name="perfil" color={color} />,
        }}
      />
    </Tabs>
    
  );
}
