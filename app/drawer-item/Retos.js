import * as React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, ImageBackground } from 'react-native';

export function RetosScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/fondoxxx.png')} style={styles.background}>

        <ScrollView>
          <Text style={styles.text}>
            El Instituto de Ciencia Animal en estas cinco décadas tiene la humilde satisfacción de haber
            contribuido al desarrollo de la ciencia agropecuaria cubana rigurosa, noble y revolucionaria al
            servicio del bien y de la sociedad, cómo nos pidió el líder histórico Fidel Castro, gestor intelectual
            de esta impronta. Sus científicos y demás trabajadores condicionaron las investigaciones a las
            posibilidades ambientales, económicos y sociales, con la visión de generar las tecnología, los
            productos y la formación de recursos humanos que necesitaría la ganadería cubana y la de
            otros países del trópico, como lo es la búsqueda de soluciones para el período poco lluvioso, a
            partir de tecnologías sostenibles sobre la base del uso de los pastos y forrajes, y la utilización y
            transformación de productos y subproductos agroindustriales que pudieran suplir la importación
        de los concentrados.{'\n'}{'\n'}
        Se trabajó por enaltecer la ciencia agropecuaria cubana y ponerla en el lugar que necesita
        el país, a través de los procesos de extensión, internacionalización y formación de recursos
        humanos, de manera integrada con otros centros de investigaciones, universidades y
        organizaciones de Cuba y de otros países del mundo. Los conocimientos y tecnologías obtenidas
        han llegado a todas las formas productivas de la ganadería y se ha contribuido a la formación de
        cientos de doctores, máster, especialistas y productores de Cuba y de otros países tropicales.
        {'\n'}{'\n'}
        Los próximos retos están en lograr el equilibrio entre la ciencia intensiva o básica y la ciencia
        conectada con la producción, la economía y la sociedad, lo que se traduce en ir de una política
        centrada en la ciencia a una política centrada en la innovación. El desarrollo de proyectos
        basados en invertir dinero para obtener conocimiento, ahora con un enfoque innovador sería
        invertir conocimiento para obtener retorno económico. Retomando los planteamientos de Agustín
        Lage, ¨los países pequeños no podemos asentar nuestra soberanía en una autosuficiencia
        económica imposible, sino en una inserción inteligente en la economía mundial, en sus flujos
        de bienes, servicios y conocimientos¨.
        {'\n'}{'\n'}
        Para alcanzar este objetivo es necesario evaluar las prácticas actuales de gestión de la
innovación en las empresas cubanas. Los hallazgos obtenidos en los estudios desarrollados por
el Centro de la Economía de Cuba trazaron pautas para mejorar las funciones básicas y hacer
que la gestión de la innovación se convierta en motor impulsor de la competitividad empresarial,
fuente de riqueza y bienestar para la sociedad. Para esto es necesario considerar múltiples
dimensiones, actores, enfoques y articulaciones, abordadas en su conjunto como un sistema
dinámico, abierto y multifactorial. Sin dudas, el Instituto de Ciencia Animal, en su estrategia de
promoción e implementación de un enfoque de desarrollo sostenible en la organización y en la
sociedad, se inserta como un actor decisivo en este empeño de país para lograr un socialismo
próspero y sostenible.
        {'\n'}{'\n'}
        Para ello, se continuará trabajando en el futuro en función de:{'\n'}{'\n'}
• Generar y ofertar tecnologías integrales, productos y servicios de alto valor agregado
para el mercado nacional e internacional{'\n'}{'\n'}
• Contribuir al incremento paulatino de los niveles de autofinanciamiento de la entidad y
elevar su capacidad exportadora{'\n'}{'\n'}
• Identificar opciones y oportunidades de negocios para las tecnologías, los productos y
los servicios nacional e internacionalmente, con énfasis en la región latinoamericana{'\n'}{'\n'}
• Fomentar la competitividad de gestión y cultura innovadora, conectada con empresas y
cadenas de valores de las producciones agropecuarias{'\n'}{'\n'}
• Lograr que el sector productivo vea la incorporación de los resultados de la ciencia y la
innovación como una inversión estratégica{'\n'}{'\n'}
• Dar solución al relevo generacional, lo que demanda de claridad conceptual, evaluación
detallada de las experiencias internas y externas mediante fórmulas y mecanismos eficientes,
sin dejar de emplear a los más experimentados y otorgarles responsabilidades concretas{'\n'}{'\n'}
• Incrementar la calidad, eficiencia y racionalidad de la gestión en la entidad, con mayor
integración de los procesos de la Institución{'\n'}{'\n'}
• Lograr que los valores se formen en la actividad diaria, con mejores relaciones sociales,
una comunicación fluida y sincera entre las personas que influya de manera positiva en el
trabajo{'\n'}{'\n'}
En el año del 50 aniversario los trabajadores del ICA están convencidos de que aún queda
mucho por hacer, sólo se cumplirá la misión encomendada por el Comandante en Jefe Fidel
cuando de conjunto con el sector productivo de la ganadería, se disponga de tecnologías de
producción de leche y carne que con sostenibilidad técnica, económica, ambiental y social
cubran las necesidades de alimento del pueblo. Por la Ciencia y por la ganadería cubana
seguiremos adelante.
        
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