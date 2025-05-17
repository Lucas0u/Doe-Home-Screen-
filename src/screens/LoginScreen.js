import React from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import { MaterialIcons } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScreenWrapper>

        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../assets/Logo.png')}
            resizeMode="contain"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Insira suas informações de login</Text>


          <View style={styles.inputWrapper}>
            <MaterialIcons name="email" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View style={styles.inputWrapper}>
            <MaterialIcons name="lock" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#999"
              secureTextEntry
              autoCapitalize="none"
            />
          </View>


          <View style={styles.forgotPasswordContainer}>
            <TouchableOpacity>
              <Text style={styles.forgotPasswordText}>Esqueci a senha</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <View style={styles.buttonback}>
            <TouchableOpacity
              onPress={() => navigation.navigate('WelcomeScreen')}
            >
              <Text style={styles.backtext}>Voltar</Text>
            </TouchableOpacity>
          </View>

        </View>

      </ScreenWrapper>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#699636',
  },

  logoContainer: {
    alignItems: 'center',
  },

  logo: {
    width: 450,
    height: 450,
  },

  inputContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    width: 600,

    alignSelf: 'center',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,

    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  label: {
    fontSize: 16,
    color: '#333333',
    fontWeight: 'bold',
    marginBottom: 60,
    fontFamily: 'Poppins-Regular',
  },

  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#F5F5F5',
    borderColor: 'rgba(121, 116, 126, 0.5)',
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 20,
    width: 450,
    height: 60,
    paddingHorizontal: 10,
  },

  icon: {
    marginRight: 10,
    color: 'rgba(105, 150, 54, 1)',
    fontSize: 24,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    height: '100%',
  },

  forgotPasswordContainer: {
    width: 450,
    alignItems: 'flex-end',
    marginBottom: 30,
  },

  forgotPasswordText: {
    color: 'rgba(105, 150, 54, 1)',
    fontWeight: 'bold',
    fontSize: 14,
  },

  button: {
    backgroundColor: 'rgba(105, 150, 54, 1)',
    padding: 20,
    borderRadius: 50,
    alignItems: 'center',
    width: 450,
  },

  buttonText: {
    color: 'rgba(255, 249, 249, 1)',
    fontWeight: 'bold',
    fontSize: 16,
  },

  backtext: {
    padding: 20,
    marginTop: 20,
    alignItems: 'center',

    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
    color: 'rgba(105, 150, 54, 1)',
  },
});
