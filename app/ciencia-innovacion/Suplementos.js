import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';

export function SuplementosScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/fondoxxx.png')} style={styles.background}>

        <ScrollView>
          <Text style={styles.text}>
            Los activadores de la fermentación ruminal son productos capaces de manipular los
            procesos fermentativos que ocurren en el rumen e incrementar la utilización digestiva de los
            alimentos propiciando incrementos en el consumo voluntario, producción de leche, carne y
            lana. Estos se pueden elaborar en forma líquida, sólida, granulados, sólida compacta o bloques
            multinutricionales (BMN), se deben suministrar en pequeñas cantidades y se formulan de manera
            que los animales regulen su consumo durante 24 horas, es decir no lo consumen de una sola
            vez sino que las pequeñas dosis que arriban al rumen en cada momento del día son capaces
            de activar la flora microbiana que vive en ese reservorio, todo lo cual garantiza que el rumen
      se mantenga como una gran cámara de fermentación continua.{'\n'}{'\n'}
      En la década del 70 se obtuvo y evaluó el efecto de un suplemento nitrogenado activador
(SNA) en la producción de leche en vacas que pastaban pangola (Digitaria decumbens) con
suplementación o no de heno y alcanzaron producciones de leche entre 7.7 y 8.9 L/vaca/día,
el peso vivo promedio de las vacas fue de 460 kg. El activador ejerció mejor efecto productivo
en los animales que pastaban la pangola a los 28 días de rebrote en relación con los de
21 días, lo que demostró su potencial en los alimentos de peor calidad. También, se manifestó
el efecto de los activadores ruminales obtenidos a partir de diferentes relaciones de nitrógeno
no proteico:proteína verdadera, en la producción de leche de vacas alimentadas en pastoreo
de diferentes pastos tropicales, así como caña de azúcar sola o suplementada con heno y
ensilaje de gramíneas.Toda una línea de actibioles se desarrolló y extendió a varias provincias
del país, en la ceba en pastoreo, principalmente.{'\n'}{'\n'}

A finales de la década del 80 e inicio de la del 90 se evidenció el papel de los activadores
ruminales en la cinética de degradación de la MS, la FDN, la velocidad de recambio ruminal
y el tiempo de retención de las partículas en el rumen de vacas con dietas de caña de azúcar
suplementadas o no con otra fuente fibrosa. Se generaron productos capaces de auto regular el
consumo voluntario, lo que coloca al rumen en mejores condiciones de degradar los materiales
fibrosos, manteniendo su propiedad de sistema de fermentación continua.{'\n'}{'\n'}

En el 2005 surge el activador ruminal denominado Granulado Jordán que también mostró
ventajas importantes cuando se utilizó en sistemas de ceba vacuna en pastos con riego y
fertilizantes. Entre 124 y 145 días de ceba se obtuvieron ganancias medias diarias de pesos
de 0.982 y 1.029 kg, con rendimientos en canal de 52-57%. Sin embargo, con esta misma
tecnología en sistemas de bajos insumos en pastoreo de Panicum maximum y Cynodon
nlemfuensis (50/50), las ganancias fueron de 0.900 y 1.12 kg/animal/día en períodos de ceba de
228 y 160 días, respectivamente. El consumo del activador fue 1.32 y 1.46 kg/animal/día. Este
producto, en comparación con la soya, duplicó la población de bacterias y hongos celulolíticos
ruminales. La actividad celulolítica y la actividad específica del complejo de enzimas celulasas
se quintuplicaron y, consecuentemente, se dispuso de mayor concentración de azúcares
reductores en el líquido ruminal.{'\n'}{'\n'}

El empleo de Microorganismos Eficientes, Benéficos y Activados (MEBA), al ser un producto
que se obtiene mediante técnicas de fermentación en estado líquido, se evaluó en su dinámica
fermentativa en el tiempo, lo que permitió informar que a las 48 h de fermentación en temperatura
entre 25 y 38ºC, el producto presenta pH de 4.2 y poblaciones de Lactobacillus y levaduras de
108 y 106 ufc/mL, respectivamente y listo para su suministro a los animales.{'\n'}{'\n'}

Todas estas investigaciones dieron lugar al diseño y evaluación de diferentes formulaciones de
productos con el nombre genérico de activadores ruminales, los que se encuentran disponibles
para su aplicación a escala comercial. Con los argumentos anteriormente señalados se transfirió
esta tecnología desde el Instituto de Ciencia Animal de Cuba a la República Oriental del Uruguay,
específicamente al ingenio azucarero “Alfredo Mones Quintela” (ALUR S. A), en la ciudad
norteña de Bella Unión. Esta planta produce activadores del rumen, tales como: Actibioles,
bloques nutricionales y el MEBA. Los productos ya registrados para su comercialización son:
ACTIBIOL®, NUTRIBIOL®, MEBA® ACTIBIOL-GL® y NUTRIBIOL-GL®.{'\n'}{'\n'}

La gallinaza se ha empleado como suplemento proteico y mineral en la ceba bovina y la
alimentación de novillas, lo que constituye una solución nutricional y ambiental, así como en
las tecnologías para la ceba de toros con dietas integrales con forraje de caña o de harina de
caña entera en aquellos lugares donde las regulaciones veterinarias lo permiten.{'\n'}{'\n'}

Las zeolitas naturales cubanas son productos naturales del grupo de los aluminosilicatos
hidratados de estructura cristalina muy porosa, que forma canales submicroscópicos que
contienen agua y cationes de intercambio. Su capacidad de intercambio es muy elevada y esto
le confiere fuerte actividad química. Posee amplia superficie específica que le confiere elevada
capacidad de adsorción, sin formar gel. En la agricultura se emplea para evitar la compactación
de los fertilizantes químicos durante el almacenaje. Permite reducir la dosis de fertilizantes
a emplear al menos en 25%, por su capacidad de liberar los elementos químicos, de forma
paulatina, según las necesidades del cultivo. En la producción de compost se adiciona para
obtener abonos orgánicos de calidad. A temperatura ambiente se pueden conservar granos y
semillas cuando la zeolita se mezcla con estas.{'\n'}{'\n'}
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