import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export function TorosScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/fondoxxx.png')} style={styles.background}>

          <Text style={styles.text}>
        Se desarrolló la tecnología de alimentación y se elaboraron las normas sobre la base de
      relaciones óptimas de concentrados:forraje:heno, 40:40:20 y 15:65:20 para Holstein y Cebú,
      respectivamente. Se disminuyó el contenido de proteína de 17 a 13%, lo que elevó la calidad
      seminal en 22.5%.
      </Text>

      </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  },
  text: {
      flex: 1,
      textAlign: 'justify',
      padding: 20,
  },
  background: {
      height: '100%',
      width: '100%'
  },
});