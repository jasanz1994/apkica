import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';

export function CultivosScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/fondoxxx.png')} style={styles.background}>

        <ScrollView>
          <Text style={styles.text}>
            Durante años se evaluaron numerosas especies de pastos para el ganado productor
            de leche y carne. La introducción de nuevas especies de gramíneas para la alimentación
            animal, tales como: pasto estrella (Cynodon nlemfuensis cv. Panameño y Jamaicano), king
            grass (Pennisetum purpureum), bermuda cruzada 1 (Cynodon dactylon cv. cruzada-1) y otras
            variedades de Cynodon (bermuda 67, bermuda 68 y callie) permitió brindarle a la producción
            tecnologías integrales desde la preparación del suelo hasta la utilización por el animal, que
            tuvieron destacada y decisiva participación en la política ganadera de la década del 80 y 90
            del pasado siglo. De ellas, sólo las dos primeras especies mantienen elevado porcentaje en
            las áreas ganaderas del país.
        {'\n'}{'\n'}
        Se diseñaron tecnologías para el establecimiento y manejo de los pastos, en diferentes 59
        situaciones productivas, con recomendaciones de segregar el 25% del área de pastoreo en el
        periodo lluvioso y obtener el ensilado para utilizarlo en el poco lluvioso.
        {'\n'}{'\n'}
        A partir de la evaluación agronómica de diferentes variedades de alfalfa se comprobó que
en el período poco lluvioso, con regadío, es posible obtener hasta 12 t/ha en condiciones de
producción. No obstante, estas investigaciones sólo se realizaron en los primeros años de vida
de la Institución.{'\n'}{'\n'}
        También se evaluaron para la ganadería 12 variedades de caña de azúcar forrajera que
        permitió recomendar las de menores contenidos de fibra y mayores valores de digestibilidad.
        {'\n'}{'\n'}
        A partir de la introducción de híbridos de millo, procedentes de Israel y la antigua URSS se
        obtuvieron nuevas variedades, caracterizadas por elevado rendimiento, fácil mecanización
        de la cosecha, adaptables a diferentes condiciones edafoclimáticas, resistencia a plagas y
        enfermedades, y adecuado valor nutritivo. La más sobresaliente fue el híbrido Hazera 610 y
        se desarrolló su tecnología de producción.
        {'\n'}{'\n'}
        Mediante la evaluación de diferentes variedades de soya introducidas en Cuba se logró
la tecnología de producción de la variedad Pelikan, con rendimientos de 2 t/ha de granos en
100 días, aproximadamente. La variedad cubana V-9 alcanzó rendimientos de 2.2 t/ha cuando
se empleó la cepa de Rhizobium ICA-8001.
{'\n'}{'\n'}
Mediante la evaluación de diferentes variedades de soya introducidas en Cuba se logró
la tecnología de producción de la variedad Pelikan, con rendimientos de 2 t/ha de granos en
100 días, aproximadamente. La variedad cubana V-9 alcanzó rendimientos de 2.2 t/ha cuando
se empleó la cepa de Rhizobium ICA-8001.
{'\n'}{'\n'}
Se estudió el establecimiento de cultivos puros o en asociaciones de las leguminosas
Neonotonia withii (glycine), Macroptilium atropurpureum (siratro), Stylosanthes sp. y Desmodium
sp. con sus correspondientes tecnologías
{'\n'}{'\n'}
Además, se trabajó en metodologías de rehabilitación de pastizales para mejorar su
composición botánica y persistencia mediante el empleo de aradura y grada en áreas con
no menos de 45% de especies mejoradas. En el control de arvenses en los pastizales se
establecieron las dosis mínimas efectivas y los métodos de aplicación de productos químicos
para el control del caguazo (Paspalum virgatum L.), aroma (Acacia farnesiana (L.) Willd.) y
marabú (Dichrostachys cinerea (L.) Wight & Arn.). En los últimos años se estudió la biología
del espartillo (Sporobolus indicus (L.) R Br) en agrosistemas de pastizales y el desarrollo de
un programa de control y recuperación de áreas degradadas por la vía de la renovación o
siembras nuevas, con el empleo de especies agresivas de pastos, combinadas con labores
culturales al suelo
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