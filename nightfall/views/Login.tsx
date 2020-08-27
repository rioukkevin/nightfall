import React, { useState } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Text, TextInput, Button, Surface } from 'react-native-paper';
import LayoutHome from "./Home/LayoutHome";
import { useNavigation } from '@react-navigation/native';


const LoginScreen = () => {
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');

  const navigation = useNavigation();

  const loginAction = () => {
    // TODO store user and request
    let success = true

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
        />
        <TextInput
          label="Mot de passe"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          mode="flat"
          theme={{colors:{text: '#111'}}}
        />
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
  }
});

export default LoginScreen