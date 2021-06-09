import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, Image } from 'react-native';

export function FormacionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/fondoxxx.png')} style={styles.background}>
        <Image source={require('../../assets/formacion_profesional.png')} style={styles.image} />

        <ScrollView>
          <Text style={styles.text}>Al crearse el Instituto de Ciencia Animal, quedaron definidos dos objetivos básicos;
          se consideró la necesidad de que se investigaran las cuestiones relacionadas con la nutrición
          animal y el desarrollo de la ganadería cubana, y que fuera además, la fragua de formación
          profesional. Todas estas actividades, se reverterían progresivamente, en la ganadería
      productiva y eficiente que necesitaba el país y el trópico.{'\n'}{'\n'}
      El trabajo docente durante estos 50 años de existencia, se ha regido por la indicación que le dio el
      Comandante en Jefe Fidel Castro, el 19 de mayo de 1964, al grupo de fundadores del ICA: “…..vayan,
      fórmense y formen a los demás…..”{'\n'}{'\n'}
      Un elemento de importancia que ayudó a lograr mayor integración entre la docencia pre y posgraduada,
      la investigación y la producción ganadera comercial fue la creación, en 1976 del Instituto Superior de
      Ciencias Agropecuarias de La Habana, actualmente Universidad Agraria de La Habana “Fructuoso Rodríguez”
      (UNAH) que unido al Centro Nacional de Sanidad Agropecuaria, Instituto Nacional de Ciencias Agrícolas e
      Instituto de Ciencia Animal conformaron el Complejo Científico-Docente-Productivo de San José de las Lajas.
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
  image: {
    alignSelf: 'center',
    width: '90%',
    height: '30%'
  }
});