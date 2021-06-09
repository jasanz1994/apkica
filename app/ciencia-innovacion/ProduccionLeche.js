import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';

export function LecheScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/fondoxxx.png')} style={styles.background}>

        <ScrollView>
          <Text style={styles.text}>

            Para la producción de leche se elaboraron recomendaciones y tecnologías integrales,
            basadas en pastos para diferentes condiciones, genotipos e intensidad de producción,
            entre las cuales están las que basan su alimentación en los pastizales, durante el período
            lluvioso con 150 kg de N/ha y en el poco lluvioso complementar con caña integral molida,
            el bagazo predigerido o el ensilaje de gramíneas. Tecnologías que incluían la utilización
            estratégica de actibioles para potenciar la fermentación ruminal y se logró así, equilibrar
            la producción de leche en ambas épocas con un promedio de producción de leche de
10 L/día/vaca en ordeño.{'\n'}{'\n'}
Actualmente, se continúa trabajando para lograr tecnologías de bajos insumos, con la
mayor utilización de alimentos de origen nacional y con producciones competitivas en costos y
eficiencia en el mercado internacional. También, en el establecimiento y manejo de gramíneas,
leguminosas y sus combinaciones, el reciclaje de nutrientes en el sistema suelo-planta-animal,
el uso de fertilizantes químicos y orgánicos, el desarrollo de sistemas silvopastoriles y el control
de plagas y enfermedades.{'\n'}{'\n'}
Los resultados alcanzados han estado de acuerdo con las condiciones económicas por las
que ha transitado el país en cada momento, pero siempre en la búsqueda de ahorro de insumos
e importaciones. De esta forma, se encontró que con la bermuda cruzada 1 se podían alcanzar
producciones de leche de hasta 4 500 L por lactancia, sin suplementar concentrados, pero no
admitía cargas altas (más de 3 vacas/ha).{'\n'}{'\n'}
Mientras que el pasto estrella, de una gran agresividad y adaptación a un grupo importante
de suelos, con riego y fertilización más suplemento, admitía cargas de hasta 4,5 vacas/ha con
producciones por vaca de 3 500 a 4 500 L de leche/lactancia; en los bancos de proteína de
glycine (25-30% del área total) con acceso a pastos fertilizados y regados, sin suplementar
concentrados se producía 14-16 L de leche por vaca/día, pero si se combinaba con ensilado,
forraje o heno, la producción disminuía ligeramente hasta 11-13 L/vaca/día.{'\n'}{'\n'}
La leucaena como banco de proteína hasta el 30% del área agrícola permitió ahorro de
concentrados de 420 kg/lactancia y producciones de leche de hasta 15 L/vaca/día y la leucaena
en el 100% del área de pastoreo incrementó la producción en 0.85 L/día en relación con el pasto
solo. Los estudios fisiológicos acerca de la mimosina (aminoácido tóxico) y la presencia de la
enzima específica que degrada este aminoácido no proteico, producida por los microorganismos
de la flora ruminal en las condiciones de Cuba fueron decisivos para poder extender la leucaena
al 100% del área de pastoreo. Este sistema puede tener potencial máximo de 6000 L de
leche/ha/año si se logra natalidad de 80 a 85%, 65% de vacas en ordeño y carga máxima de
3 vacas/ha.{'\n'}{'\n'}
Para el período poco lluvioso, se establecieron tecnologías de alimentación con residuos
fibrosos de los centros de acopio de la caña de azúcar, para vacas con potencial de 3600 a
4000 L de leche /lactancia. Por supuesto, este producto no debe constituir la única fuente de
alimento voluminoso.También, se recomendó el sistema bagacillo tratado + miel-urea para
vacas lecheras con producciones medias de 7 a 8 L/vaca/día.{'\n'}{'\n'}
Los bloques multinutricionales como vía de suministrar sales minerales y otros
nutrientes se considera uno de los resultados con mayor vigencia en la actualidad,
mientras que el uso de suplementos nitrogenados activadores o activadores biológicos
(actibioles) en dietas con Solicaña para vacas lecheras, permitieron producciones de hasta
10 L de leche/animal/día.{'\n'}{'\n'}
Se efectuaron recomendaciónes del pastoreo vespertino-nocturno (4:30 pm-5:00 am) para
lograr incrementos de producción de 0.5 L/vaca/día y del pastoreo en línea como método para
incrementar el 10% de la producción total de leche en los rebaños y mejorar la utilización del pasto.
En la actualidad se han continuado los estudios sobre la base de aplicar los principios
fundamentales del pastoreo ajustados a las condiciones del país y al control de los índices de
sostenibilidad en los sistemas de explotación, que contribuyan a la recuperación de la producción
lechera. Para ello se tiene en cuenta el número de cuartones o subdivisiones a utilizar, el tipo
de cercado, el tiempo y tipo de restricción del pastoreo, los tiempos de ocupación y reposo,
número de grupos de animales, cargas y presiones de pastoreo, generalmente contempladas
en las normas.{'\n'}{'\n'}
El diagnóstico participativo dirigido, en lo fundamental, a solucionar la base alimentaria y
con reagrupe de las mejores vacas en las unidades con mejor disponibilidad de alimentos y
eliminación de las vacas problemas, demostró que era posible obtener 6 L de leche /vaca/día.

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