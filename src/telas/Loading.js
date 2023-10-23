import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const Loading = ({ navigation }) => {
  useEffect(() => {
    // Simule uma operação de carregamento (substitua isso pelo que for apropriado)
    setTimeout(() => {
      navigation.navigate('Home'); // Navega para a tela Home após o carregamento
    }, 2000); // Tempo em milissegundos
  }, []);

  return (
    <View style={styles.container}>
      <Text>CARREGAMENTO</Text>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loading;