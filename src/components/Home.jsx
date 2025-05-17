import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Componente com estilo
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao React Native!</Text>
    </View>
  );
};

// Estilos usando StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    color: '#333',
  },
});

export default HomeScreen;
