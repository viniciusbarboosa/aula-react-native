import React from 'react';
import { View, Text, StyleSheet,ActivityIndicator,StatusBar,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import Home from './src/telas/Home';
import Perfil from './src/telas/Perfil';
import Barbearias from './src/telas/Barbearias';
import { useState, useEffect } from 'react';
//import LoadingScreen from './src/telas/LoadingScreen';


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
      <Barbearias/>
    </View>
  );
}

function PerfilScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center',margin:10}}>
      <Perfil/>
    </View>
  );
}

function LoadingScreen() {
  return (
    <View style={styles.LoadingContainer}>
      <View style={styles.background}>
        <Image source={require('./src/imgs/logo.jpg')} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },LoadingContainer: {
    flex: 1,
    backgroundColor: '#333',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000); 
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'Agendamento') {
                iconName = 'calendar';
              } else if (route.name === 'Barbearias') {
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
          <Tab.Screen name="Barbearias" component={HorariosScreen} />
          <Tab.Screen name="Perfil" component={PerfilScreen} />
        </Tab.Navigator>
      )}
      <StatusBar barStyle="light-content" backgroundColor="black" />
    </NavigationContainer>
  );
}