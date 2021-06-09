import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';

export function SubproductosScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/fondoxxx.png')} style={styles.background}>

        <ScrollView>
          <Text style={styles.text}>
            Muchos subproductos agrícolas e industriales no se procesan y pueden ocasionar serios
            problemas de contaminación ambiental. Esto determinó estudiar la posibilidad de convertir
estos subproductos, mediante procesos sencillos, en alimento animal.{'\n'}{'\n'}
Fue así que se desarrollaron tecnologías que permiten la inclusión de 20% de harina de
cítricos en los piensos para conejos, así como la utilización de la pulpa de cítricos o la citrurea
en las dietas integrales para la producción de carne bovina.{'\n'}{'\n'}
Los subproductos de la industria arrocera como la cabecilla y el polvo de arroz pueden formar
parte de las dietas para cerdos y aves como sustitutos parciales de los cereales con resultados
satisfactorios. En este mismo sentido, es factible el empleo de la yuca y los tubérculos como
sustitutos de los cereales en la alimentación de aves, cerdos y rumiantes.{'\n'}{'\n'}
La inclusión de 10% de harina de pulpa de tomate o de guayaba es capaz de suplir las
fuentes de proteína vegetal en las raciones para aves. Además, en esta misma especie se
demostró que es posible sustituir el 50% de la proteína que aporta la torta de soya por harina
de semillas de tabaco.{'\n'}{'\n'}
El empleo de los subproductos y desechos (fondajes, jaboncillos acidulados y sin acidular)
de la refinación de los aceites comestibles permitió su utilización como única fuente de lípidos
en dietas para las aves.
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