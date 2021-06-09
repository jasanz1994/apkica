import * as React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, ImageBackground } from 'react-native';

export function RevistaScreen({ navigation }) {
  return (
    <View style={styles.container}>
            <ImageBackground source={require('../../assets/fondoxxx.png')} style={styles.background}>
                <Image source={require('../../assets/revista.png')} style={styles.image} />

                <ScrollView>
        <Text style={styles.text}>
          Transcurridos dos años de la fundación del Instituto, se vislumbró
          la necesidad de hacer llegar a la comunidad científica, profesores, estudiantes y productores,
          los resultados de la ciencia agropecuaria relacionados con la producción animal tropical,
          los avances científico-técnicos, sistemas, tecnologías y conocimientos relevantes obtenidos
          en este campo, por los científicos cubanos, así como por los colaboradores de otros países.
          Por ello, se tomó la decisión de crear, impulsar y desarrollar la actividad editorial y de
          difusión del conocimiento científico técnico que se ha desarrollado a partir de diferentes
          medios.
          {'\n'}{'\n'}
          En las publicaciones periódicas estuvieron la Revista Cubana de Ciencia Agrícola/Cuban Journal
          of Agricultural Science; Revista de Divulgación Agropecuaria, e Informe Técnico. Como
          publicaciones no periódicas, acerca de diversas especialidades agropecuarias, se editaron
          libros, folletos, manuales y monografías de diversa complejidad que mostraron el desarrollo y
          evolución de las ciencias agropecuarias nacional e internacionalmente.{'\n'}{'\n'}
          Es así que en 1967 aparece el primer número de la Revista Cubana de Ciencia Agrícola (RCCA) y
          la Cuban Journal of Agricultural Science (CJAS), como medios de difusión científica y fuentes
          de consulta para todos aquellos interesados en la producción animal. Desde ese momento se editan
          de forma ininterrumpida en español e inglés, respectivamente. Estas publicaciones periódicas
          han logrado mantener estable su frecuencia de publicación y su permanencia en prestigiosas
          bases de datos e índices internacionales.
          {'\n'}{'\n'}
          El objetivo principal de estas revistas es dar a conocer los resultados científico-técnicos,
          inéditos, novedosos y de impacto, obtenidos nacional e internacionalmente por profesionales y
          especialistas de la rama agropecuaria.
          Además, desde sus inicios hasta el segundo número del 2009 se mantuvo en formato impreso.
          A partir del número 43:3 se inició su edición en formato digital, su distribución en CD-ROM y se
          ubica en el sitio www.ciencia-animal.org/revista-cubana-de-ciencia-agricola/ (RCCA) desde donde
          se direcciona a la versión en inglés, ubicada en www.ciencia-animal.org/cuban-journalof-agricu
          ltural-science/ (CJAS).
          {'\n'}{'\n'}
          La CJAS desde marzo de 2010 hasta junio de 2015 (tomos del 44:1 al 49:2) se encuentra ubicada
          en Open Journal Systems en el sitio www.ediciones.edu.ica.cu.
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
      width: '100%',
      height: '30%'
  }
});