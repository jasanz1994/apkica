import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export function IntelectualScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/fondoxxx.png')} style={styles.background}>

        <Text style={styles.text}>
          A pesar de que no es hasta el 2003 en que en el Instituto comienza a funcionar el Sistema
          Interno de Propiedad Intelectual, como respuesta a la Resolución emitida por el CITMA, desde
          el año 1979 se trabajaba por proteger los activos de la Institución por cualquiera de las dos
          ramas de la Propiedad Intelectual.{'\n'}{'\n'}
          Hasta la actualidad se han realizado 20 solicitudes de patentes o invenciones; en la tabla
          10 se muestran las concedidas y las que están en examen. En cuanto a la rama de derecho
          de autor todas las obras literarias, software, base de datos y metodologías generadas se han
          protegido.
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