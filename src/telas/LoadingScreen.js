import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

function LoadingScreen({ navigation }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simule uma operação de carregamento (substitua isso pelo que for apropriado)
    setTimeout(() => {
      setLoading(false); // Quando o carregamento estiver completo, defina 'loading' como falso
    }, 2000); // Tempo em milissegundos
  }, []);

  useEffect(() => {
    if (!loading) {
      // Quando o carregamento estiver completo, navegue para a tela principal 'Home'
      navigation.replace('Home');
    }
  }, [loading, navigation]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingScreen;