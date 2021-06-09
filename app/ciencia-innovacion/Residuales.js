import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export function ResidualesScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/fondoxxx.png')} style={styles.background}>

        <Text style={styles.text}>
          Se trabajó en la producción de alimentos mediante el ensilaje de las excretas y miel
          (excremielaje) para rumiantes, cerdos y aves. Así como, en la sustitución del 50% de la harina
          de girasol por gallinaza en dietas para bovinos en crecimiento ceba, estabulados o en pastoreo,
          con ganancias de 600 g/animal/día. La inclusión entre 20-30% de gallinaza en el suplemento
          proteico de hembras bovinas en desarrollo, propició ganancias de 200 kg de peso vivo a los
15 meses de edad.{'\n'}{'\n'}
Se obtuvo una tecnología para la producción de biogás a partir de las excretas porcinas y
uso de los lodos en la alimentación de los cerdos.
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