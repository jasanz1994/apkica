import * as React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, ImageBackground } from 'react-native';

export function CooperacionScreen({ navigation }) {
  return (
    <View style={styles.container}>
            <ImageBackground source={require('../../assets/fondoxxx.png')} style={styles.background}>
                <Image source={require('../../assets/cooperacion.png')} style={styles.image} />

                <ScrollView>
      <Text style={styles.text}>
          La creación del Instituto en el momento singular que vivía el país, en cuanto al éxodo
          masivo de técnicos y profesionales, respaldó la decisión de contratar científicos europeos con
          resultados reconocidos en la ciencia animal. Fue así como desde su surgimiento se valió de
          la cooperación internacional para su desarrollo.
        {'\n'}{'\n'}
        Los primeros años se caracterizaron por la asesoría extranjera en investigación y postgrado,
        proveniente de Inglaterra, Escocia, Canadá, Bélgica, Israel y Australia.
        {'\n'}{'\n'}
        Con el derrumbe del socialismo europeo, la década de 1990 impuso un nuevo escenario
        para la cooperación. La necesidad de formar al joven relevo científico, unido a la difícil
        situación económica cubana, constituían un reto importante en el nuevo contexto nacional e
        internacional.
        Se fortalecieron las relaciones con la región, a través de países como: Venezuela, México,
        Brasil, Colombia y Argentina. Se desarrollaron eventos propios con alcance regional, funcionaron 45
        convenios interuniversitarios y se realizaron varios proyectos de colaboración.
        {'\n'}{'\n'}
        A partir del año 2000 se incrementó la obtención de becas y la concertación de entrenamientos,
        a través de convenios de colaboración internacional del Ministerio de Educación Superior o
        institucionales, para los jóvenes en proceso de formación. Estas acciones se desarrollaron
        fundamentalmente en universidades y centros de investigación de México, Brasil, Colombia,
        Costa Rica, España, Holanda, Italia, Austria e India. Igualmente, las estancias postdoctorales
        aumentaron en los últimos diez años. Se realizaron 16 postdoctorales en universidades de
        Brasil y México las que permitieron mejorar la especialización y la calidad de los resultados
        científicos.
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