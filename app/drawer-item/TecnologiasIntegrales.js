import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';

export function TecnologiasScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/fondoxxx.png')} style={styles.background}>
        <ScrollView>
          <Text style={styles.title}>
            Tecnologías integrales de alto valor agregado que se ofertan
      </Text>

          <Text style={styles.text}>
            - Tecnologías de producción de leche y carne basadas en el máximo aprovechamiento
            de los pastos y forrajes y el empleo de subproductos agroindustriales y otros recursos
            locales{'\n'}
            -Manejo del bovino y búfalo para la producción de carne y leche{'\n'}
            - Manejo integrado de pastos y forrajes{'\n'}
            - Desarrollo de sistemas de producción avícola y porcina{'\n'}
            - Desarrollo de fincas integrales de producción de alimento animal{'\n'}
            - Desarrollo de plantas de producción de alimento animal{'\n'}
            - Sistemas locales de producción de semillas{'\n'}
            - Organización de cadenas productivas a ciclo completo{'\n'}
        </Text>

        </ScrollView>
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
    fontSize: 24,
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
