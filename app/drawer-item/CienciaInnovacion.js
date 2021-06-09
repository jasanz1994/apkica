import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Pressable, ImageBackground } from 'react-native';

export function CienciaInnovacionScreen({ navigation }) {
  return (
    <View style={styles.container}>
   
      <ImageBackground source={require('../../assets/fondoxxx.png')} style={styles.background}> 
      <ScrollView>

        <Pressable onPress={() => navigation.navigate('Cultivos')}>
          <View style={styles.content} >
            <Image source={require("../../assets/ciencia-innovacion/57A1420.png")} style={styles.img} />
            <Text style={styles.text}>Producción de gramíneas, leguminosas y otros cultivos de interés para la
            alimentación animal
          </Text>
          </View>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Cana')}>
          <View style={styles.content}>
            <Image source={require("../../assets/ciencia-innovacion/caña-azucar.png")} style={styles.img} />
            <Text style={styles.text}>La caña de azúcar y sus subproductos en la alimentación animal
          </Text>
          </View>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Residuales')}>
          <View style={styles.content}>
            <Image source={require("../../assets/ciencia-innovacion/residuales.png")} style={styles.img} />
            <Text style={styles.text}>Utilización de los residuales de las explotaciones pecuarias
          </Text>
          </View>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Subproductos')}>
          <View style={styles.content}>
            <Image source={require("../../assets/ciencia-innovacion/subproductos.png")} style={styles.img} />
            <Text style={styles.text}>Subproductos agrícolas e industriales
          </Text>
          </View>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Suplementos')}>
          <View style={styles.content}>
            <Image source={require("../../assets/ciencia-innovacion/suplementos.png")} style={styles.img} />
            <Text style={styles.text}>Suplementos y aditivos nutricionales
          </Text>
          </View>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Bioquimica')}>
          <View style={styles.content}>
            <Image source={require("../../assets/ciencia-innovacion/fisiologia.png")} style={styles.img} />
            <Text style={styles.text}>Bioquímica y Fisiología
          </Text>
          </View>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Crianza')}>
          <View style={styles.content}>
            <Image source={require("../../assets/ciencia-innovacion/terneros.png")} style={styles.img} />
            <Text style={styles.text}>Crianza de terneros y reemplazos de leche y carne
          </Text>
          </View>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Leche')}>
          <View style={styles.content}>
            <Image source={require("../../assets/ciencia-innovacion/leche_vacuna.png")} style={styles.img} />
            <Text style={styles.text}>Producción de leche vacuna
          </Text>
          </View>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Carne')}>
          <View style={styles.content}>
            <Image source={require("../../assets/ciencia-innovacion/vacas.png")} style={styles.img} />
            <Text style={styles.text}>Producción de carne vacuna
          </Text>
          </View>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Toros')}>
          <View style={styles.content}>
            <Image source={require("../../assets/ciencia-innovacion/toros.png")} style={styles.img} />
            <Text style={styles.text}>Toros sementales
          </Text>
          </View>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Bufalina')}>
          <View style={styles.content}>
            <Image source={require("../../assets/ciencia-innovacion/bufalos.png")} style={styles.img} />
            <Text style={styles.text}>Producción bubalina
          </Text>
          </View>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Ovino')}>
          <View style={styles.content}>
            <Image source={require("../../assets/ciencia-innovacion/ovino-caprino.png")} style={styles.img} />
            <Text style={styles.text}>Producción ovino-caprina
          </Text>
          </View>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Avicola')}>
          <View style={styles.content}>
            <Image source={require("../../assets/ciencia-innovacion/avicola.png")} style={styles.img} />
            <Text style={styles.text}>Producción avícola
          </Text>
          </View>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Porcino')}>
          <View style={styles.content}>
            <Image source={require("../../assets/ciencia-innovacion/porcino.png")} style={styles.img} />
            <Text style={styles.text}>Producción porcina
          </Text>
          </View>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Cunicula')}>
          <View style={styles.content}>
            <Image source={require("../../assets/ciencia-innovacion/conejos.png")} style={styles.img} />
            <Text style={styles.text}>Producción Cunícola
          </Text>
          </View>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Genetica')}>
          <View style={styles.content}>
            <Image source={require("../../assets/ciencia-innovacion/genetica.png")} style={styles.img} />
            <Text style={styles.text}>Genética
          </Text>
          </View>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Biomatematica')}>
          <View style={styles.content}>
            <Image source={require("../../assets/ciencia-innovacion/informatizacion.png")} style={styles.img} />
            <Text style={styles.text}>Biomatemática e Informatización
          </Text>
          </View>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Intelectual')}>
          <View style={styles.content}>
            <Image source={require("../../assets/ciencia-innovacion/propiedad_intelectual.png")} style={styles.img} />
            <Text style={styles.text}>Propiedad Intelectual
          </Text>
          </View>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Extencion')}>
          <View style={styles.content}>
            <Image source={require("../../assets/ciencia-innovacion/transferencia_tecnologia.png")} style={styles.img} />
            <Text style={styles.text}>Extensión y transferencia de tecnologías agropecuarias
          </Text>
          </View>
        </Pressable>

      </ScrollView>
      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  bannel: {
    height: '40%',
  },
  imgBannel: {
    width: '100%',
    height: '100%'
  },
  content: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  img: {
    width: 70,
    height: 50,
    borderRadius: 5
  },
  text: {
    fontSize: 16,
    fontWeight: 'normal',
    marginLeft: 10,
    marginRight: 80,
    color: 'black',
  },
  background: {
    height: '100%',
    width: '100%'
  },
});