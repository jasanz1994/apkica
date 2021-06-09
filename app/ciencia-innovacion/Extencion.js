import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';

export function ExtencionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/fondoxxx.png')} style={styles.background}>

        <ScrollView>
          <Text style={styles.text}>
            La agricultura cubana después del triunfo revolucionario de 1959 pasó por diferentes etapas y
            se considera de gran significación la desarrollada desde 1970 hasta 1989. La drástica reducción
            de los insumos importados a partir de 1990, impuso la reconversión organizativa y tecnológica
            de la ganadería, concentración de los esfuerzos en articular la tecnología a la factibilidad técnico
            económica, a partir de las alternativas generadas o asimiladas y la utilización eficiente de la
            fuerza calificada existente.{'\n'}{'\n'}
            El Instituto de Ciencia Animal desde su creación en 1965, como parte de su misión institucional,
            contempla no sólo generar sino transferir sus tecnologías en el campo de la producción animal.
            En sus 50 años de existencia ha trabajado en distintos modelos de extensión e introducción
            de una variada gama de tecnologías relacionadas con los pastos, forrajes, recursos locales,
            subproductos agroindustriales, nutrición y manejo animal, producción de leche y carne, y
            genética, entre otras.{'\n'}{'\n'}
            Desde sus inicios mantuvo la vinculación con la producción, un ejemplo fue el empleo de
            las mieles de caña en la ceba de toros. En el período 1971-1972 se realizaron los trabajos en
            las microestaciones de pastos del país con el objetivo de mejorar el rendimiento de los pastos,
            así como la evaluación e introducción de nuevas variedades.{'\n'}{'\n'}
            Las relaciones con los organismos de producción se fortalecieron en 1973 con la participación
            de los investigadores en consejos y comisiones científico-técnicas en empresas, provincias y
            direcciones de producción de los Ministerios de Agricultura, del Azúcar y de la Alimentación.
            Merece mención especial la relación de los especialistas con la Dirección Nacional de Genética 91
            Vacuna en los programas de cruzamiento y selección para el mejoramiento del potencial genético
            en la producción de leche y carne, incluyendo la creación de nuevas razas.{'\n'}{'\n'}
            La asesoría técnica a unidades, empresas y cooperativas de producción agropecuaria,
            mediante convenios de colaboración y por solicitudes directas, aportó soluciones a problemas
            concretos de la práctica ganadera, al adecuar la información científico-técnica a las condiciones
            y recursos disponibles en cada situación.{'\n'}{'\n'}
            Las comisiones de extensionismo nacional y ramales del Ministerio de la Agricultura, también
            constituyeron en su momento un importante vínculo. Investigadores del centro participaron
            como miembros y los resultados aprobados en sus sesiones fueron extendidos, generalizados
            o introducidos como normas técnicas.{'\n'}{'\n'}
            La impartición mensual de conferencias a los graduados de la producción, que comenzó en
            1974 también contribuyó a la introducción de resultados en las empresas de las que provenían
            y al vínculo con las direcciones de ganadería en las provincias.{'\n'}{'\n'}
            Otra importante forma de vinculación fue la realización de investigaciones conjuntas en
            condiciones de producción, en las que se condujeron un grupo de trabajos, entre los que se
            pueden citar:{'\n'}{'\n'}
            • Ceba intensiva del ganado vacuno con miel y urea{'\n'}{'\n'}
            • Amamantamiento restringido en terneros lecheras{'\n'}{'\n'}
            • Empleo del bagacillo predigerido en vacas lecheras y ganado en desarrollo{'\n'}{'\n'}
            • Utilización de residuos de centros de acopio en estabulados de ganado en desarrollo{'\n'}{'\n'}
            • Uso del excremielaje en estabulados de ganado en desarrollo{'\n'}{'\n'}
            • Uso de ensilaje de pescado en ganado lechero y en desarrollo{'\n'}{'\n'}
            • Uso del formol en dosis inocuas como preservante de la leche{'\n'}{'\n'}
            • Sistema de prueba de comportamiento del ganado Charolais{'\n'}{'\n'}
            • Sustitución total del cereal (maíz) por la miel rica para la ceba de cerdos{'\n'}{'\n'}
            • Utilización de la miel final hasta niveles de 40% en la ceba de cerdos{'\n'}{'\n'}
            • Desarrollo de la ceba de patos con miel final{'\n'}{'\n'}
            • Eliminación de los machos White Leghorn de un día de edad{'\n'}{'\n'}
            • Reducción de la edad de destete de los conejos{'\n'}{'\n'}
            • Utilización del sistema de cruzamiento rotacional en conejos{'\n'}{'\n'}
            • Desarrollo de la siembra directa de pastos durante el período poco lluvioso, cuando
            existan condiciones{'\n'}{'\n'}
            • Producción de semilla y establecimiento de pasto guinea{'\n'}{'\n'}
            • Utilización de leguminosas rastreras{'\n'}{'\n'}
            • Introducción y manejo de pasto estrella, king grass, bermuda y otros pastos{'\n'}{'\n'}
            • Uso de bloques multinutricionales y actibioles{'\n'}{'\n'}
            • Recursos locales en la atenuación de los efectos del período poco lluvioso{'\n'}{'\n'}
            Desde 1974 hasta 1990, el Instituto realizó una importante labor de extensión y las acciones 
realizadas se destacaron en las provincias de La Habana, Cienfuegos, Sancti Spíritus, Camagüey, 
Granma, Las Tunas y Guantánamo. Estas estuvieron relacionadas fundamentalmente con los 
pastos y la alimentación del ganado.{'\n'}{'\n'}
Los cursos de postgrado y conferencias para profesionales de la producción y de cursillos de 
superación técnica para cooperativistas comenzaron a ser una necesidad, así como la edición 
de libros y folletos.{'\n'}{'\n'}
Estas formas de vinculación con la producción recibieron especial atención, no sólo como 
vías de introducción de resultados de la investigación, sino como retroalimentación necesaria 
que compromete a los especialistas con la problemática del campo que atienden, lo que genera 
nuevas investigaciones con sentido más práctico.{'\n'}{'\n'}
Motivados por la crisis económica, los cambios de tendencias en la extensión agraria y la 
ausencia de mecanismos que facilitaran la transferencia de tecnologías, se constituyó en 1996 
la Red Nacional de Transferencia de Tecnologías para la Ganadería (AGRORED), liderada por 
el ICA e integrada además por la Estación Experimental de Pastos y Forrajes “Indio Hatuey”, 
el Instituto de Investigaciones de Pastos y Forrajes y universidades de todo el país, cuyo 
objetivo fue la capacitación del productor primario y la preparación de equipos provinciales que 
asesoraran e introdujeran las tecnologías de acuerdo con las necesidades de las empresas. 
Esta red alcanzó a 62 empresas del país y 133 unidades del sector campesino.{'\n'}{'\n'}
Por otro lado, en 1998 comenzaron las acciones iníciales para la creación del Sistema 
Nacional de Extensión Agraria (SEA) del Ministerio de la Agricultura, con una orientación 
netamente tecnológica, aunque con algunos elementos socioeconómicos enfocados a brindar 
a los productores soluciones técnico-productivas, asistencia e información, de acuerdo con sus 
necesidades (un elemento inexistente en los anteriores modelos) y elevar sus niveles de educación 
técnica y general, considerando las dimensiones tecnológica, socioeconómica y medioambiental.{'\n'}{'\n'}
El Sistema de Transferencia de Tecnología (AGRORED) durante el año 2001 logró consolidar 
el frente de capacitación, difusión y la transferencia de tecnología al sector agropecuario, su 
metodología de trabajo fue integradora con el SEA que trasmitió, en sus grupos nacionales y 
provinciales, sus experiencias, incluso algunas provincias constituyeron la base del trabajo del SEA.
Al considerar la experiencia de sistemas como el SEA y AGRORED, se trabaja desde el año 
2003 en un programa de transferencia de tecnologías sobre la base de la colaboración con 
centros de investigación, universidades, ONGs y delegaciones territoriales del Ministerio de 
Ciencia Tecnología y Medio Ambiente y Ministerio de la Agricultura, para adecuar e introducir 
tecnologías en las diferentes formas productivas, creando una interacción entre el área de 
gestión del conocimiento y el sector productivo.{'\n'}{'\n'}
Este nuevo modelo de trabajo se denominó Sistema de Extensión del Instituto de Ciencia 
Animal (SEICA), el cual es una organización formada por especialistas multidisciplinarios 
del centro que se integran con otras instituciones y organizaciones del país y foráneas para 
acometer acciones de transferencia tecnológica y formación de recursos humanos en el sector 
ganadero. Oferta conocimientos, tecnologías, productos y servicios de alto valor agregado que 
permiten fortalecer el desarrollo de la ganadería cubana y del trópico con sostenibilidad técnica, 
económica, social y ambiental. Como sistema dinámico evalúa los comportamientos exitosos 
y no exitosos, y desarrolla un programa de mejoras.
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