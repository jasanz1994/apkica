import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';

export function ProductosScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/fondoxxx.png')} style={styles.background}>

        <Text style={styles.title}>
          Productos que se Ofertan
      </Text>

        <Text style={styles.text}>
          -Variedades de pastos generadas por la institución y certificadas para su comercialización
          y reproducción: Pennisetum purpureum CUBA CT-115, CUBA CT-169 y CUBA OM-22{'\n'}
          - Semillas de pastos y forrajes{'\n'}
          - Aditivos{'\n'}
          - Libros y folletos{'\n'}
          - Revista Cubana de Ciencia Agrícola{'\n'}
          - Multimedias{'\n'}
          - Software{'\n'}
        </Text>

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 26,
    color: '#2d721c',
    fontWeight: 'bold',
    paddingVertical: 10
  },

  text: {
    padding: 10,
    fontSize: 18,
    color: 'black'
  },
  background: {
    height: '100%',
    width: '100%'
  },
});
