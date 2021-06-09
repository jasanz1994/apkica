import * as React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, ImageBackground } from 'react-native';

export function ReconocimientosScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/fondoxxx.png')} style={styles.background}>

        <ScrollView>
          <Text style={styles.text}>
            Resultados de investigación, colectivos de investigadores e investigadores individuales
            han recibido el reconocimiento de las máximas instituciones del país tanto por su aporte al
            conocimiento como por la repercusión del impacto económico que han generado, los que se
            presentan de forma cronológica en las tablas 11,12,13,14,15,16 y 17; a partir del momento en
            que fueron instituidos por las organizaciones pertinentes.{'\n'}{'\n'}
            Desde 1989 al 2014 se han alcanzado un total de 18 premios Academia de Ciencias de Cuba,
            como entidad principal, un premio nacional de Innovación Tecnológica del CITMA Nacional, 79
            premios MINAG, 90 CITMA Territorial y 13 en el Forum Nacional de Ciencia y Técnica.{'\n'}{'\n'}
            En el año del 50 aniversario los científicos y trabajadores del Instituto se comprometen a
            mantener su liderazgo en la generación y aplicación de tecnologías integrales de alto valor
            agregado, de impacto en la ganadería de Cuba y el trópico, con énfasis en los aspectos
            relacionados con la producción de alimento animal a partir de pastos y forrajes, y el empleo
            de productos y subproductos agroindustriales, en contribución a la seguridad alimentaria y
            sustitución de alimentos importados.{'\n'}{'\n'}
            Se seguirá apostando a la biotecnología para la transformación de subproductos y desechos
            en productos de alto valor nutritivo y la obtención de nuevas variedades, que contribuyan a
            la biodiversidad y a la adaptación y mitigación de los efectos del cambio climático. El avance
            en los estudios bioquímicos, fisiológicos, genéticos, estadísticos e informáticos, el enfoque
            de sistema con el cierre de ciclode las investigaciones, unido a un fuerte trabajo de gestión
            institucional permitirá mayor impacto productivo, económico, ambiental y social de nuestros
            resultados.
        </Text>
        </ScrollView>
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