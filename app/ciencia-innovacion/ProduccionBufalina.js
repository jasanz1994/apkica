import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';

export function BufalinaScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/fondoxxx.png')} style={styles.background}>

        <ScrollView>
          <Text style={styles.text}>
            El Instituto contribuyó al conocimiento de la conducta y comportamiento productivo y
            reproductivo de búfalos de río; del ambiente ruminal; las poblaciones microbianas ruminales; la
            cinética de fermentación con diferentes fuentes de alimentación; la identificación de un grupo
            importante de elementos que justifican la superioridad de los búfalos en la utilización de los
alimentos fibrosos en comparación con los vacunos.{'\n'}{'\n'}
Con la adaptación y utilización de una lechería de vacas para búfalas de río, se evaluaron
sistemas integrales para su autosuficiencia alimentaria en las condiciones del país y el análisis
estratégico de la situación socio-económica de empresas a nivel territorial indicó las acciones
para avanzar hacia la sostenibilidad productiva con esta especie.{'\n'}{'\n'}
Las investigaciones demostraron que la especie bubalina realiza alto consumo de pastos de
mala calidad y la eficiencia productiva de las lecherías está determinada por las condiciones
edafoclimáticas, factores de organización y manejo de la finca, así como por la alimentación
básica y el confort en el pastoreo. La suplementación con concentrado proteico-energético y
premezclas minerales ajustadas a los requerimientos, así como las variaciones en las prácticas
de manejo mejoraron los índices productivos en las unidades.{'\n'}{'\n'}
Se dispone de la caracterización de la curva de lactancia y de crecimiento de búfalos
de la raza Buffalypso, así como la identificación del gen que produce el albinismo y la
frecuencia de este en la masa bubalina en el país. Además, se estableció un sistema para
la evaluación y la selección de las búfalas, mediante el control productivo lechero y la
curva de lactancia, lo que permite mayor objetividad en la determinación de la habilidad
productiva más probable.{'\n'}{'\n'}
Al considerar los parámetros genéticos de los rasgos de la curva de lactancia y morfométricos
que caracterizan a las hembras lecheras en las condiciones de Cuba, señalados con anterioridad,
crearon las bases para la selección del biotipo que permite la sostenibilidad de la especie.
También, se determinó el tipo de herencia de la coloración albinoide y su frecuencia de aparición
que resultan básicos para el estudio de las ventajas o desventajas de esta coloración. Los
mejores predictores lineales insesgados en cada indicador evaluado para la selección fueron
obtenidos en los estudios realizados. {'\n'}{'\n'}
El inicio de un programa de inseminación artificial con semen de la raza Mediterránea
estableció una estrategia integral con medidas de mejora genética y ambiental para alcanzar
niveles productivos superiores en el futuro.
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