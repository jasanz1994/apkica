import * as React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.bannel}>
        <Image source={require('../../assets/download.jpeg')} style={styles.imageBannel} />
      </View>
      <View style={styles.content}>
        <ImageBackground style={styles.background} source={require('../../assets/fondo.jpg')}>
          <Text style={styles.frase}>
            …“Era necesario en la práctica, y en cierta forma con carácter
            urgente, dar determinados pasos para resolver el problema, partiendo
            de las pocas experiencias que existían y partiendo de las condiciones
            existentes en nuestro país. Fue así como se organizó el Instituto de Ciencia
            Animal, fue así como en la búsqueda de técnicos se hicieron los contactos
            con determinados técnicos, y fue así como se organizó la institución, se
            establecieron los arreglos pertinentes y se comenzó a trabajar en esta
            institución”.
          </Text>
          <Text style={styles.cita}>
            Fidel Castro Ruz
          </Text>
          <Text style={styles.cita}>
            I Congreso del ICA
          </Text>
          <Text style={styles.cita}>
            13 de mayo de 1969
          </Text>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: '100%',
    height: '100%'
  },
  bannel: {
    height: '30%',
    alignContent: 'center',
  },
  imageBannel: {
    flex: 1,
    width: '100%',
  },
  content: {
    flex: 2,
  },
  frase: {
    padding: 16,
    fontSize: 16,
    textAlign: 'justify',
    color: 'black',
    fontWeight: 'bold',
  },
  cita: {
    paddingRight: 25,
    textAlign: 'right', 
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  }
});