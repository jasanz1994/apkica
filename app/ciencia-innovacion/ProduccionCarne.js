import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';

export function CarneScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/fondoxxx.png')} style={styles.background}>

        <ScrollView>
          <Text style={styles.text}>
            Para la producción de carne vacuna también se elaboraron tecnologías basadas en pastos
            sin riego, las cuales permitieron producir entre 600 y 1000 g de peso vivo por animal/día
            en distintas razas. Se definieron métodos de manejo, número de cuartones, carga animal y
            suplementación proteico-energética para diferentes escenarios productivos. En sistemas con
            pasto de guinea sin fertilización ni riego y banco de proteína que ocupaba el 30% del área total,
            se logró cebar toros Cebú durante dos ciclos completos, con ganancias de 530 g/día y carga
            de 2.3 animales/ha.{'\n'}{'\n'}
            El establecimiento y siembra de pastos mejorados de gramíneas asociadas a leguminosas
            rastreras y leucaena, así como de otras arbustivas en áreas para la ceba de machos permitieron
            obtener ganancias de peso vivo superiores a 700 g/animal/día.{'\n'}{'\n'}
            En áreas de pastos naturales y artificiales o ambos asociados en el 100% de leucaena, así
            como en sistemas de leucaena con libre acceso de los animales a un banco de Cuba CT–115
            se desarrollaron tecnologías para animales en crecimiento-ceba.También se incursionó con
            otras leguminosas arbustivas para el mejoramiento de los pastizales, así como con mezclas de
            leguminosas rastreras que permitió alcanzar ganancias de peso de 800 g/animal/día y carga de
            2 animales/ha.{'\n'}{'\n'}
            Además, se estudió una variante donde se almacena en el propio campo, en el 30% del
            área de la finca la biomasa producida por el pasto Cuba CT-115 para pastarlo a inicios del
            período poco lluvioso y aprovechar sus reservas para hacer otras dos rotaciones en el año. A
            esta tecnología se le llamó bancos de biomasa de pasto Cuba CT-115 para la ceba de toros
            en condiciones de secano y permite obtener más de 500 kg de peso vivo/ha/año.{'\n'}{'\n'}
            Otra opción para la ceba de toros fue mezclar con 7% de gallinaza y 50% de cachaza los
            residuos de los centros de limpieza de la caña de azúcar. Esta es más eficiente si los residuos
            se tratan previamente, con hidróxido de sodio (4%) y se muelen finamente.{'\n'}{'\n'}
            El empleo de forraje de caña en dietas integrales generó una tecnología que incluía las
            variedades de caña más promisorias para estos fines y que no coincidía precisamente con
            aquellas más eficientes para la industria azucarera.{'\n'}{'\n'}
            Se evaluó el forraje fresco de caña de azúcar en la alimentación bovina con diferentes
            alternativas de suplementación para determinar su efecto en el comportamiento productivo,
            funcionamiento ruminal y conducta alimentaria. Se demostró que, cuando el forraje fresco de
            caña de azúcar representó más del 70% de la dieta en base húmeda que ingiere el bovino, es
            posible obtener ganancias de peso superiores a 1 kg/animal/día.{'\n'}{'\n'}
            El uso de diferentes alternativas de oferta de los alimentos voluminosos y el suplemento permitió
            mejorar los indicadores fisiológicos relacionados con la gravedad específica, tiempo de retención del
            alimento, recambio de liquido ruminal y poblaciones microbianas. La caracterización de los patrones
            de conducta alimentaria y los rendimientos en canal, contribuyen a optimizar estos sistemas de
            alimentación con vistas a buscar mayor eficiencia y beneficio. El análisis económico demostró la
            factibilidad de engordar con altos niveles de caña de azúcar con rentabilidad entre 30 y 40%.{'\n'}{'\n'}
            Para incrementar eficientemente la producción de carne se desarrolló la tecnología de ceba
en estabulación con el uso de forrajes de corte (caña, Pennisetum purpureum Cuba CT-169
y Cuba OM-22) y suplementación por fases con coproductos agroindustriales según la región
(vinaza, cítrico, gallinaza). Esta tecnología permite obtener ganancia diaria promedio de no
menos de 0.9 kg/animal/día de toda la masa y la venta anual de 120 toros en pie por lote o
corral de engorda, es decir 57 t de peso en pie o 31.92 t de canal.{'\n'}{'\n'}
También se evaluó en condiciones de producción, la siembra extradensa de forrajes (caña
y Cuba CT-169) en la alimentación de bovinos con raciones integrales y su fraccionamiento.
Esta variante permite rendimientos de forrajes de 30 500 a 32 000 y de 18 200 a
18 600 kg de MS/ha/año para la caña de azúcar y Cuba CT-169, respectivamente; con una carga
entre 8.18-8.47 UGM/ha/año. Las ganancias de peso vivo obtenidas en la ceba controlada fueron
de 0.53 y 0.81 kg animal/día y una conversión de 16.68 y 11.80 kg de alimento/kg de ganancia,
para el sistema tradicional y la innovación, respectivamente. Los trabajos desarrollados,
demostraron que la introducción de la innovación tecnológica, incrementa la producción de
carne en 35.1% comparado con el sistema tradicional. {'\n'}{'\n'}
La variante de ceba semi-estabulada para machos vacunos en condiciones de producción,
donde se integra la utilización de Cuba CT-115, en un sistema de pastoreo restringido durante
todo el año, combinado con una dieta integral fresca basada en recursos locales (91%) y
un mínimo de alimentos importados (9%), permitió duplicar las ganancias de peso (más de
300 g animal/día), disminución de la edad al sacrificio (entre 9 y 15 meses) e incremento en
los rendimientos de la canal entre 1 y 3%. {'\n'}{'\n'}
Las evaluaciones de la ganancia de peso y conversión de las diferentes dietas y sistemas
de alimentación estudiados, se acompañaron desde el principio de las investigaciones sobre
el rendimiento y las características de las canales de los animales. De esta forma se brindó
información acerca de la composición y características de las canales de las diferentes razas
de ganado bovino criadas en condiciones de estabulación y en pastoreo, con los diferentes
sistemas de alimentación utilizados en Cuba.{'\n'}{'\n'}
El Instituto también desarrolló investigaciones para la determinación de los requerimientos
nutricionales de toros en crecimiento-ceba. En esta última categoría se demostró que los
requerimientos de energía metabolizable de los animales Bos taurus en nuestras condiciones
son superiores a los recomendados por el NRC de Estados Unidos, y se elaboró una tabla
cubana de requerimientos, actualmente en uso.{'\n'}{'\n'}
En coordinación con el Ministerio de la Agricultura y Ministerio de la Industria Alimentaria,
se desarrolló y propuso un nuevo sistema de contratación de precios por pérdida de peso del
ganado de carne durante la transportación.
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