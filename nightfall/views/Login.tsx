import React, { useState } from 'react';
import { StyleSheet, Dimensions, AsyncStorage } from 'react-native';
import { Text, TextInput, Button, Surface } from 'react-native-paper';
import LayoutHome from "./Home/LayoutHome";
import { useNavigation } from '@react-navigation/native';
import { loginUser } from '../services/auth';


const LoginScreen = () => {
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');

  const navigation = useNavigation();

  const loginAction = async () => {
    // TODO store user and request
    let success = true

    try {
      // v.delarue@nightfall.fr Not24get
      const userLogin : any = await loginUser(login, password)
      const bearerToken = userLogin.token;
      // On stocker et utiliser le bearer token
      await AsyncStorage.setItem('BEARER_TOKEN', bearerToken)
    } catch (e) {
      success = false
      if(e.message){
        console.log(e.message)
        setErrorMessage(e.message)
      }else{
        setErrorMessage('Une erreur est survenue')
      }
    }

    if(success){
      navigation.navigate('Root', { screen: 'Home'});
    }
  }

  return (
    <LayoutHome>
      <Surface style={styles.view}>
        <Text style={styles.title}> Se Connecter </Text>
        <TextInput
          label="Identifiant"
          value={login}
          onChangeText={text => setLogin(text)}
          style={styles.input}
          mode="flat"
          theme={{colors:{text: '#111'}}}
          error={errorMessage.length > 0}
        />
        <TextInput
          label="Mot de passe"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          mode="flat"
          theme={{colors:{text: '#111'}}}
          error={errorMessage.length > 0}
          secureTextEntry={true}
        />
        {errorMessage.length > 0 && <Text style={styles.error}> { errorMessage }</Text>}
        <Button icon="account" color="#fea500" mode="contained" theme={{}} style={styles.button} onPress={loginAction}>Connexion</Button>
      </Surface>
    </LayoutHome>
  );
}

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'transparent',
    padding: 10
  },
  title: {
    marginTop: 250,
    textAlign: 'center',
    fontSize: 30
  },
  button: {
    margin: 20
  },
  input: {
    margin: 20
  },
  error:{
    color: 'white',
    backgroundColor: 'red',
    padding: 10,
    marginHorizontal: 20
  }
});

export default LoginScreen