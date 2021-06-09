import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';

export function OvinoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/fondoxxx.png')} style={styles.background}>

        <ScrollView>
          <Text style={styles.text}>
        Los primeros ensayos en ovinos establecieron el efecto de la suplementación con miel en
        corderos en pastoreo, así como en la reproducción de las ovejas. Asimismo, se evaluaron
        los componentes de un sistema de punteros y continuadores para la producción conjunta de
        carne ovina-vacuna en condiciones de pastoreo. Con posterioridad, se estudiaron raciones con
        subproductos fibrosos de la caña de azúcar predigeridos o no, para el engorde estabulado de
        corderos.{'\n'}{'\n'}
        Investigaciones relacionadas con las características productivas de las diferentes razas 80
        caprinas que existen en el país evaluaron la inclusión de pollinaza, cascarilla de café, bagazo de
        caña y bagazo más ceniza de central en la dieta de ovinos en crecimiento-ceba en condiciones
        de pastoreo, con incremento del peso final y el rendimiento en canal.{'\n'}{'\n'}
        Estudios recientes demostraron la posibilidad de incluir hasta 50% de harina de T. diversifolia
        en la dieta integral para cabritos a partir de los siete días de nacidos como suplemento proteico
        estable que garantizó el crecimiento acelerado, al favorecer el consumo voluntario de materia
        seca y mejorar indicadores productivos y de eficiencia de la ración. Hubo reducción del tiempo
        de crianza del cabrito lactante a 13 semanas (sistema convencional 18 semanas). En la etapa
        pre rumiantes se obtuvieron ganancias diarias de peso de 60-90 g, y mejoró la eficiencia de
        conversión alimentaría de manera que los animales puedan excluir a edades tempranas la
        alimentación láctea, sin que se produzcan estancamientos ni depresiones en el crecimiento.
        El costo estimado fue 11.75 pesos por cada kg de peso vivo producido.{'\n'}{'\n'}
        También se estudió la influencia de los factores vinculados con la edad y peso al sacrificio con la
        conformación, velocidad de crecimiento y componentes de la canal de caprinos criados en pastoreo.
        En razas Saanen, Alpina, Nubia y Toggenburg se determinaron las curvas de lactancia
        potencial lo que constituye una herramienta necesaria para la planificación de la producción
        de leche, la alimentación, selección y mejora de los indicadores productivos del rebaño.{'\n'}{'\n'}
        El empleo de la caña en mezcla integral con king grass como dieta básica, nivel óptimo de
        utilización, efectos de la ración integral en la producción y calidad de la leche, y el comportamiento
        alimentario también fue estudiado.{'\n'}{'\n'}
        Quedó demostrado que cuando la calidad nutritiva de la ración disminuye debido,
        fundamentalmente, al incremento de fibra, sobre todo en los periodos de menor disponibilidad
        de forraje, utilizar el aditivo microbiano VITAFER permite aumentar el consumo del voluminoso
        y elevar la producción de leche de las cabras en condiciones tropicales.{'\n'}{'\n'}
        Se dispone de información sobre el empleo de Moringa oleifera, en mezclas integrales
        con Pennisetum purpureum cv. Cuba OM-22, como dieta básica, en la alimentación de especie
        caprina, en aspectos relacionados con el consumo voluntario, la digestión ruminal, balance de
        nitrógeno e indicadores sanguíneos.
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