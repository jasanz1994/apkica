import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';

export function CrianzaScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/fondoxxx.png')} style={styles.background}>

        <ScrollView>
          <Text style={styles.text}>
            Se estudió el consumo del calostro por los terneros directamente de la madre durante los
            primeros cuatro días de vida, así como sistemas artificiales de destete temprano, en los que
            Se estudió el consumo del calostro por los terneros directamente de la madre durante los
            primeros cuatro días de vida, así como sistemas artificiales de destete temprano, en los que
            la cantidad de fibra, tipo de sustituto lechero, aditivos, leches fermentadas y otras variantes
            permitieron acumular importantes conocimientos técnicos y prácticos que posibilitan el ahorro
            de cantidades apreciables de leche. Además, el amamantamiento restringido como método de
      crianza del ternero permitió ganancias superiores a 600 g/día.{'\n'}{'\n'}

      El RELAC, reemplazador lechero diseñado por el ICA, garantiza la inmunidad del
ternero al permitir el consumo del calostro durante los primeros días de edad y el correcto
estado de salud en el primer mes (período más crítico). En este remplazador se utiliza una
proporción mayor de 80% de productos no lácteos, lo que reduce marcadamente sus costos
en comparación con productos similares del mercado internacional; permite la sustitución
de 240 litros de leche fresca por ternero criado, la que puede ser destinada al consumo
humano; se ofrece a los terneros mediante una metodología que permite el consumo
temprano de alimentos sólidos y su desarrollo ruminal, adaptado a las condiciones futuras
de alimentación basadas en pastos y forrajes para garantizar ganancias superiores a
600 g/día hasta los 120 días de edad.{'\n'}{'\n'}
El uso de los reemplazadores lecheros (RL) requiere de las dietas integrales como alimento
sólido, ya que son el complemento que garantiza la correcta nutrición y desarrollo ruminal del
ternero.{'\n'}{'\n'}
Las investigaciones desarrolladas con levadura torula, como reemplazante lechero representó
ahorro de 30 USD por ternero, específicamente cuando se ofertaban 3 L de leche y 200 g de
levadura seca a la edad de 10-30 días, y solo 2 L de leche e igual cantidad de levadura cuando
tenían entre 30 y 60 días de edad.{'\n'}{'\n'}
Con posterioridad se evaluaron y recomendaron el uso de los RL de importación,
centrado por un grupo de especialistas del ICA y del MINAG, que realizaron varios trabajos
investigativos con el objetivo de crear y poner en la práctica productiva, una tecnología
para la alimentación de terneros que permitiera utilizar eficientemente estos alimentos y la
sustitución completa de los 330 litros de leche. Esta tecnología se aplicó a nivel nacional,
con impacto económico y social, su utilización en alrededor de 185 000 terneros, posibilitó
el acopio de unos 61 050 000 litros más de leche fresca por la industria, que representa un
ahorro en compra de leche en polvo de aproximadamente 21 367 500 USD; si a este valor
de sustitución de leche en polvo, se le resta la inversión realizada en la compra y aplicación
de los RL utilizados en el país, se obtiene un ahorro neto de 9 494 200 USD en el sistema
de crianza artificial del ternero.{'\n'}{'\n'}
Los machos lecheros que se destinan para la ceba pueden alcanzar 160-170 kg de peso
vivo a los seis meses de edad y disminuir la edad de entrada al cebadero en 60 días, con el
suministro del concentrado a voluntad desde los tres meses de edad e introducir la miel-urea
a voluntad con un suplemento proteico.{'\n'}{'\n'}
El sistema de pastoreo de punteros y continuadores, con animales jóvenes delante (punteros)
seguido de toretes o toros (continuadores), permitió mejorar las ganancias de peso vivo en
30% en relación con el sistema tradicional y mejorar los indicadores de salud al reducir el
parasitismo.
Para el desarrollo de las terneras y su incorporación a la reproducción como novillas a los
18-19 meses de edad y 320 kg de peso se recomendó un sistema que abarcaba desde la
distribución del concentrado y el heno, la edad de inicio del pastoreo hasta la desparasitación,
la carga y manejo a que debe ser sometido el pasto, tanto con el empleo de leguminosas como
sin ellas. {'\n'}{'\n'}
No obstante, en las actuales condiciones de bajos insumos, el sistema de manejo y
alimentación para hembras bovinas de reemplazo se basa en:{'\n'}{'\n'}
• Asociaciones múltiples de leguminosas rastreras, para balancear la ración
básica y disminuir la cantidad de suplemento requerido para ganancias superiores a
450 gramos/animal/día en la etapa de ternera{'\n'}{'\n'}
• En la etapa de crecimiento-desarrollo, posterior a los 240 kg de peso vivo y hasta la
gestación, utilizar el P. purpureum vc. Cuba CT-115 como pasto en rotación, combinado con
leguminosas y bloques multinutricionales {'\n'}{'\n'}
• Manejo de la crianza por etapa biológica y según las cargas recomendadas para disminuir
los costos por kilogramo de aumento de peso y disponer de un sistema rentable de crianza de
novillas{'\n'}{'\n'}
• Aplicación de la tecnología del uso diferenciado de leguminosas rastreras o arbustivas,
según etapa del crecimiento y la utilización de Cuba CT-115 en pastoreo racional{'\n'}{'\n'}
• Bloques multinutricionales en hembras de reemplazo
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