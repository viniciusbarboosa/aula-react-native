import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import Home from './src/telas/Home';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{ padding: 10 }}>
      <Home></Home>
    </View>
  );
}

function AgendamentoScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Esta é a tela de Agendamento</Text>
    </View>
  );
}

function HorariosScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Esta é a tela de Horários</Text>
    </View>
  );
}

function PerfilScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Esta é a tela de Perfil</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Agendamento') {
              iconName = 'calendar';
            } else if (route.name === 'Horarios') {
              iconName = 'clock';
            } else if (route.name === 'Perfil') {
              iconName = 'user';
            }

            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { display: 'flex' },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Agendamento" component={AgendamentoScreen} />
        <Tab.Screen name="Horarios" component={HorariosScreen} />
        <Tab.Screen name="Perfil" component={PerfilScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
