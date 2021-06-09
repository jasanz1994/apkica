import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';

export function CuniculaScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/fondoxxx.png')} style={styles.background}>

        <ScrollView>
          <Text style={styles.text}>
            La búsqueda de alternativas alimenticias para el concentrado y la forma de suministrarlo,
            así como recursos forrajeros que permitan la estabilidad de la alimentación para la eficiente
        cría del conejo, son objetivos prioritarios para esta especie animal.{'\n'}{'\n'}
        El uso de los cítricos en sus diversas formas (citroína, harina de cítricos y actualmente
        húmeda) ha resultado una fuente de energía y fibra importante.{'\n'}{'\n'}
        La ceba de conejos con piensos concentrados o criollos suministrados de forma restringida,
        en los que los cítricos y la caña de azúcar, sus productos y derivados participan de forma
        significativa con suplemento estable de forrajes verdes, aumentan la velocidad de crecimiento
        y mejoran la conversión.{'\n'}{'\n'}
        El uso de forrajes como Morera, Trichantera y harinas integrales de leguminosas contribuyen
        como suplemento estable que es la principal forma de garantizar la salud, viabilidad y crecimiento
        óptimos en esta categoría tan susceptible al déficit de fibra en la dieta.{'\n'}{'\n'}
        En dietas para conejos en crecimiento se puede incluir hasta 30% de harina de forraje de
        dólico y hasta 20% de harina de forraje de mucuna en sustitución de la harina de forraje de
        alfalfa. Además, en la etapa de crecimiento y ceba se puede emplear, sin dificultad, 10% y 15%,
        de levadura en los piensos, respectivamente.{'\n'}{'\n'}
        Se demostró que la harina de moringa puede ser utilizada como sustituto total y/o parcial
        de la proteína en dietas para conejos de engorde y reproductoras sin efectos negativos en el
        consumo, ganancia de peso, digestibilidad e indicadores reproductivos.{'\n'}{'\n'}
        El diseño de una bloqueadora para compactar los alimentos, así como el uso de otros equipos
        y utensilios facilitan la preparación de alimentos no convencionales. Estos resultados son de
        utilidad para los pequeños productores a través del apoyo brindado por la Agricultura Urbana
        y la Sociedad Cunícula.
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