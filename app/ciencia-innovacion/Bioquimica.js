import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';

export function BioquimicaScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/fondoxxx.png')} style={styles.background}>

        <ScrollView>
          <Text style={styles.text}>
        Los estudios básicos desarrollados han servido de base para profundizar e interpretar
      los fenómenos fisiológicos que permiten optimizar el uso de los productos y subproductos
      alimenticios, de variedades de pastos, forrajes u otros cultivos para la alimentación animal y
      más recientemente el empleo de los aditivos.{'\n'}{'\n'}
      
      Los primeros estudios de fisiología digestiva y microbiología ruminal se encaminaron a 
caracterizar la fermentación ruminal de las dietas altas en mieles y la utilización del nitrógeno 
no proteico en las mismas. De esta forma se logró entender mejor los procesos digestivos y 
metabólicos que sustentaban la posibilidad de emplear los azúcares y el nitrógeno no proteico 
en adecuada proporción que garantizara la energía metabolizable necesaria, para este tipo 
de dieta, en animales rumiantes.{'\n'}{'\n'}
A la vez, se estudiaba la digestibilidad y producción de ácidos grasos volátiles de las principales 
especies de gramíneas utilizadas en la producción ganadera del país, así como los efectos de 
la predigestión química en la asociación de la lignina con los carbohidratos estructurales de 
subproductos fibrosos de la industria azucarera y la producción in vitro de ácidos grasos volátiles 
totales. Unido a esto se desarrollaba el análisis de la composición química de los principales 
pastos, forrajes y alimentos empleados en la alimentación animal en Cuba. Ello permitió en 
1975 publicar la tabla cubana de composición de alimentos como parte del libro “Metodología 
de balance alimentario para el ganado vacuno en Cuba”.{'\n'}{'\n'}
El estudio de los alimentos fibrosos como alternativa en las dietas para aves, cerdos y conejos 
implicó la determinación de los coeficientes de digestibilidad. Este estudio se desarrolló mediante 
un método in vitro que emplea inóculo fecal del cerdo. Se logró cuantificar la energía aportada 
por los ácidos grasos de cadena corta (AGCC) de las fuentes fibrosas y su contribución al 
metabolismo energético de aves y cerdos. Estos resultados permitieron elaborar las tablas de 
composición físico-química de alimentos fibrosos tropicales para especies monogástricas y el 
manual de su caracterización físico-química.{'\n'}{'\n'}
Se desarrollaron estudios microbiológicos dirigidos a conocer los cambios que se 
producen en el ecosistema ruminal de los animales cuando consumen diferentes fuentes de 
energía y proteína no convencionales. Esto contribuyó al aislamiento y caracterización de 
nuevas bacterias y otros microorganismos capaces de modificar la fermentación microbiana 
ruminal en dietas fibrosas de baja calidad y como resultado, incrementar la población y 
actividad de microorganismos celulolíticos, así como la eficiencia de utilización digestiva de 
nutrientes. {'\n'}{'\n'}
Los estudios también se encaminaron hacia la protección, por métodos físicos y químicos, de 
la proteína dietética al ataque ruminal mediante la reacción de glucosilación no enzimática de 
proteínas y al impacto de los aluminosilicatos (zeolita y bentonita) en la fermentación microbiana 
ruminal de compuestos nitrogenados.{'\n'}{'\n'}
Se elaboraron varias metodologías para: la evaluación de plantas proteicas como alimento 
animal; la determinación de la actividad de las enzimas proteasas, celulasas y amilasas 
ruminales; la asociación de plantas en sistemas silvopastoriles de acuerdo con su valor nutritivo 
y degradación ruminal, y el aislamiento, identificación y conservación de levaduras provenientes 
del ecosistema del rumen.
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