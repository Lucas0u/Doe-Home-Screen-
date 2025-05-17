import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenWrapper from '../components/ScreenWrapper';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScreenWrapper>
        <View style={styles.topContent}>
          <Image
            style={styles.logo}
            source={require('../assets/Logo.png')}
            resizeMode="contain"
          />

          <View style={styles.textContainer}>
            <Text style={styles.text}>
              Conectando quem pode ajudar a quem precisa.{"\n"}
              Juntos, combatemos a fome e o desperdício.
            </Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button1}
          >
            <Text style={styles.buttonText1}>Criar Conta</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button2}
            onPress={() => navigation.navigate('LoginScreen')}
          >
            <Text style={styles.buttonText2}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </ScreenWrapper>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#699636',
  },

  topContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 60,
  },

  logo: {
    width: 550,
    height: 550,
  },

  textContainer: {
    marginTop: -150,
    borderTopColor: '#F5F5F5',
    borderTopWidth: 2,
  },

  text: {
    fontSize: 16,
    color: '#F5F5F5',
    textAlign: 'justify',
    lineHeight: 24,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },

  buttonContainer: {
    alignItems: 'center',
    paddingBottom: 40,
    gap: 10,
  },

  button1: {
    backgroundColor: '#F5F5F5',
    paddingVertical: 15,
    width: 300,
    borderRadius: 50,
    alignItems: 'center',
  },

  buttonText1: {
    color: '#699636',
    fontSize: 18,
    fontWeight: 'bold',
  },

  button2: {
    backgroundColor: 'transparent',
    paddingVertical: 15,
    alignItems: 'center',
  },

  buttonText2: {
    color: '#F5F5F5',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
