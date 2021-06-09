import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';

export function CanaScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/fondoxxx.png')} style={styles.background}>

        <ScrollView>
          <Text style={styles.text}>
            Por ser la producción azucarera uno de los principales sectores económicos del país, tuvo
            carácter prioritario los estudios acerca de la utilización de la caña de azúcar, sus productos y
            derivados en la alimentación animal.
{'\n'}{'\n'}
Se demostró que la deshidratación de la caña integral por exposición al sol es posible y su
uso como harina permite sustituir hasta el 50% de los cereales en los concentrados para vacas
y machos lecheros. A esta harina se le denominó Solicaña y también se empleó en engorda de
becerros con ganancias superiores a los 600, 800 y 1000 g/día en los períodos comprendidos
entre el nacimiento y los 3, 6 y 12 meses de edad, respectivamente. Permite obtener pesos
al sacrificio de 400 kg a los 13 meses, produce canales de alta calidad y altos rendimientos.
La caña molida y ensilada es otra opción para la ceba estabulada que también se empleó
satisfactoriamente en raciones integrales de terneros.
{'\n'}{'\n'}
La Saccharea, se obtuvo de la caña de azúcar limpia o del bagacillo desmenuzado de la industria
azucarera, mezclado con urea, sometido a choque térmico y deshidratado. Su combinación con la
harina de soya como dieta integral para el ganado bovino de ceba y vacas lecheras, permitieron
ganancias de peso superiores a los 900 g/día y producción de leche de 14.3 L/día.
La Saccharina, producto obtenido por vía biotecnológica, constituye un importante sustituto
manufacturado de los cereales que se puede incluir en diferentes proporciones en la dieta
de rumiantes, cerdos, aves y conejos. Debido a su connotación en el país, se utiliza en otros
países como Brasil que ha adoptado esta tecnología.
{'\n'}{'\n'}
La Saccharina se obtuvo por fermentación en estado sólido a partir de la caña de azúcar
limpia de paja y cogollo, molida y mezclada con urea y minerales.La variante de secado al sol
es la más extendida entre los productores y por ello se le conoce como Saccharina rústica.
{'\n'}{'\n'}
En terneros se puede añadir a los piensos entre 40-50%; en vacas lecheras, desde 50 hasta
90% con producciones de 10 L de leche/vaca/día, sin alteraciones en su composición.
En dietas para aves el nivel de inclusión está alrededor de 10%. Para las ocas, se puede
elevar entre 30-60%, en dependencia de la categoría. Similares valores máximos se pueden
utilizar en las dietas para conejos. Su incorporación en los piensos para cerdos varía desde 20
hasta 60%, según la categoría y sistema de alimentación.
{'\n'}{'\n'}
A partir de la década del 90, se comenzó a trabajar en variantes con la inclusión de ingredientes
ricos en sustancias amiláceas (Sacchaboniato, Sacchamaíz, Sacchasoya-maíz) e inóculos de
microorganismos o aditivos con actividad enzimática.
{'\n'}{'\n'}
El bagacillo tratado con 4% de hidróxido de sodio aumentó la digestibilidad hasta 50% y redujo
el suministro de miel en el sistema bagacillo-miel-urea para vacas lecheras con producciones
medias de 7-8 L/vaca/día. El procedimiento para realizar el tratamiento y sus formas de
utilización en ganado vacuno fue la primera patente obtenida por el instituto en Cuba y en
México. Se montaron plantas para su producción en 19 ingenios azucareros y en el período de
1980 a 1990 se obtuvo 1 817000 toneladas que soportaron la alimentación de más de 800000
animales anualmente.
{'\n'}{'\n'}
La cachaza fresca o deshidratada puede utilizarse en las raciones de los rumiantes, con
aporte de energía, minerales y proteínas. También, se demostró la utilización del aceite de
cachaza como fuente de lípidos para cerdos y aves.
{'\n'}{'\n'}
El desarrollo de una tecnología para incrementar el valor nutritivo y la utilización de los residuos
fibrosos de los centros de acopio y de limpieza de la caña de azúcar permitió la alimentación
de alrededor de 1 000000 de cabezas de ganado durante el período poco lluvioso.
El azúcar crudo en dietas integrales se incorporó hasta 65% en sustitución de los cereales
(maíz) para las vacas lecheras e incluso se pudo utilizar nitrógeno no proteico. En aves y cerdos,
con 40% de inclusión de azúcar, se realizó la sustitución total del cereal en la formulación de
las dietas.
{'\n'}{'\n'}
Las mieles y fundamentalmente la final, se evaluaron en todas las especies y categorías
animales. En la ceba intensiva de toros basada en miel-urea 3% suministrada a voluntad, con
forraje restringido, suplemento mineral y adición de pequeñas cantidades de fuentes proteicas de
baja solubilidad, fue el sistema empleado en el país para la ceba de todos los toros estabulados
(más de 300 000 anualmente desde 1970 hasta 1990). Es el único sistema comercial en el
mundo donde el 80% de la energía proviene de azúcares y el 70% del nitrógeno de la urea. Este
resultado hizo que la imagen del Instituto y sus investigaciones fueran conocidas y respetadas
en todos los continentes.
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