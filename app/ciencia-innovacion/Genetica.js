import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';

export function GeneticaScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/fondoxxx.png')} style={styles.background}>

        <ScrollView>
          <Text style={styles.text}>
            El ICA ha contribuido a la formulación y aplicación de los programas genéticos de absorción
            de Holstein; en la formación y selección de nuevas razas; en la evaluación de sementales;
            selección y estructura del rebaño Holstein y recientemente en la adaptación de indicadores
            productivos a las nuevas circunstancias tecnológicas.{'\n'}{'\n'}
            Como parte del Programa Nacional de Mejoramiento Genético, para ganado de leche, el
            Instituto participó con la Dirección Nacional de Genética en su elaboración y evaluación; en la
            caracterización de los nuevos genotipos lecheros (Siboney de Cuba, Mambí de Cuba y Holstein
            tropical); estudios de tendencias genéticas; de longevidad de la raza Holstein y de estimación
            de los factores para la extensión de la lactancia hasta 244 días.{'\n'}{'\n'}
            El estudio más completo disponible de la raza Mambí de Cuba (3/4 H 1/4 C) se abordó 86
            por el centro y comprendió desde el comportamiento del crecimiento hasta la incorporación,
            la reproducción, la producción de leche, la supervivencia, la longevidad y la productividad
            por vida, por más de 25 años en las cuatro empresas genéticas que la han desarrollado.
            Se ofrecieron los valores y tendencias genéticas de sementales y reproductoras, desde la
            creación de la raza, para rasgos no lecheros como los del crecimiento hasta la incorporación,
            reproducción, supervivencia y longevidad y se estimaron las heredabilidades en diferentes
            lactancias.{'\n'}{'\n'}
            En ganado de carne se trabajó en la optimización del proceso de selección, mediante la
            estimación de parámetros genéticos y la definición de criterios de selección a utilizar y la
            comparación de métodos para la estimación del valor genético. Estos estudios permitieron
            trazar la política para el apareamiento con Cebú y la obtención de diferentes genotipos de carne
            (Cebú, Santa Gertrudis, Charolais y 3/4 Limousin x 1/4 Criollo) y hembras mestizas lecheras
            (5/8 Hostein 3/8 Cebú y 3/4 Holstein 1/4 Cebú).{'\n'}{'\n'}
            Resultó interesante el estudio de caracterización de grupos sanguíneos del Charolais
            cubano que poseía genes de la raza Cebú y Criollo que le aportaban mayor resistencia. Similar
            esfuerzo se ha realizado en los programas avícolas, porcinos, caprinos, cunículas, ovinos y
            equinos.{'\n'}{'\n'}
            En las principales razas porcinas con que cuenta el país (Yorkshire, Duroc, Hampshire
            y Landrace, y sus cruces F1) se caracterizó el comportamiento productivo y reproductivo.
            Se trabajó en la estimación de los parámetros genéticos para los principales rasgos
            de importancia económica en la especie porcina y su uso en la selección, tales como:
            determinación de factores de ajuste para el tamaño de la carnada, la importancia biológica
            y económica de criterios integrales como la productividad numérica y más recientemente
            el uso de métodos bioestadísticos para la estimación del progreso genético en las
            poblaciones.{'\n'}{'\n'}
            También se elaboró un paquete de programas para la tecnología de mejora genética del
            caprino.{'\n'}{'\n'}
            Durante años se trabajó en la introducción del gen cuello desnudo en el genofondo de
            las aves para mejorar la termorregulación al reducir entre 30 y 40% el plumaje y asociarse
            al mejor comportamiento y resistencia en condiciones cálidas. Se desarrollaron tres estirpes
            experimentales portadoras del gen cuello desnudo para carne y dos para huevos, una de estas
            de tamaño normal y la otra enana, además de un genotipo de pluma rizada.{'\n'}{'\n'}
            Las pruebas de comportamiento para la selección por crecimiento de los conejos
            se introdujeron en todas las razas de la empresa cunícula desde 1972. Por más de
            30 años se trabajó en la caracterización genética y productiva de las poblaciones genéticas
            nacionales e importadas, así como los cruzamientos F1, triple cruces, retrocruces y
            cruces de cuatro razas. A partir de estos estudios se conformó el esquema de cruzamiento
            aplicado en el Programa Nacional de Mejoramiento Genético del Conejo, liderado por el
            ICA.{'\n'}{'\n'}
            También se creó la línea élite seleccionada por prolificidad a partir de varias líneas del conejo 87
            Semigigante blanco y la sintética Caoba de Cuba (Gigante de Flandes-Nueva Zelandia Rojo)
            como línea paterna de la hembra híbrida.{'\n'}{'\n'}
            Se estimaron los parámetros del cruzamiento para rasgos de prolificidad y pesos predestete
            sugeridos por Dickerson en cuatro razas cunículas hasta el nivel de la hembra F1, como
            elementos esenciales para el diseño de la política de utilización racial en la cunicultura. Así
            como, la determinación de los efectos raciales y estimación de los parámetros genéticos del
            cruzamiento para los rasgos intervalo parto-parto, partos/año y de productividad al destete, muy
            poco estudiados a pesar de ser los de mayor importancia en la rentabilidad de las explotaciones
            cunículas.{'\n'}{'\n'}
            También, se estudió la influencia de efectos raciales en el comportamiento predestete de tres
            experimentos de cruzamientos dialélicos y dos con reproductoras F1, analizados de conjunto
            para atenuar los efectos de la interacción genotipo-ambiente. Todas estas investigaciones
            permitieron elaborar la metodología para la selección de las mejores razas y cruces a ser
            empleados en el Programa de Mejoramiento Genético del Conejo.
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