import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';

export function ServiciosScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/fondoxxx.png')} style={styles.background}>
        <ScrollView>
          <Text style={styles.title}>
            Servicios que se Ofertan
      </Text>
          <Text style={styles.subtitle}>
            Científico-Técnicos
      </Text>
          <Text style={styles.text}>
            - Diagnóstico integral en sistemas de producción de leche y carne{'\n'}
            - Diagnóstico en sistemas integrados agricultura-ganadería{'\n'}
            - Diagnóstico para el desarrollo de fincas integrales, plantas de producción de alimentos
            e introducción de tecnologías para la producción agropecuaria sobre bases sostenibles{'\n'}
            - Servicios de prueba de productos, tecnologías y variedades{'\n'}
            - Consultorías nacionales e internacionales en diseño y desarrollo de sistemas de gestión
            de la ciencia, calidad y la innovación agropecuarias{'\n'}
            - Transferencia de tecnologías integrales{'\n'}
            - Ofertas de variedades de pastos{'\n'}
        </Text>
          <Text style={styles.subtitle}>
            Académicos:
      </Text>
          <Text style={styles.text}>
            -Programas de Doctorado (3){'\n'}
            - Programa de Maestrías (1){'\n'}
            - Programa de Especialidades de Postgrado (2){'\n'}
            - Diplomados (6){'\n'}
            - Diferentes modalidades de incorporación de estudiantes nacionales y extranjeros a las
            Unidades Docentes (Práctica laboral, trabajo de diploma, pasantías, cursos, trabajos de
            cursos y ciclos específicos){'\n'}
            - Entrenamientos{'\n'}
            - Cursos de capacitación a productores{'\n'}
            - Circuitos temáticos{'\n'}
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
    fontSize: 26,
    color: '#2d721c',
    fontWeight: 'bold',
    paddingVertical: 10
  },
  subtitle: {
    padding: 10,
    fontSize: 24,
    color: '#2d721c',
    fontWeight: 'bold'
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
