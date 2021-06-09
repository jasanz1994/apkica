import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';

export function BiomatematicaScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/fondoxxx.png')} style={styles.background}>

        <ScrollView>
          <Text style={styles.text}>
            En el campo de la Biomatemática y la Informática se realizaron importantes estudios sobre
            diseño experimental, muestreo, simulaciones y programas de modelación de procesos biológicos
            para la producción animal, entre otros.{'\n'}{'\n'}
            En el tema de los pastos se investigó sobre tamaño de las parcelas experimentales, número
            de réplicas, tamaño de la muestra, aplicaciones vinculadas con la teledetección en la producción
            de biomasa y estimación de la disponibilidad.{'\n'}{'\n'}
            En 1975 se confeccionó la metodología de balance alimentario para el ganado vacuno en
            Cuba, la que se utiliza en la actualidad. Esta metodología se perfeccionó con la inclusión de dos
            elementos de importancia: el consumo controlado a través del complejo capacidad de ingestión
            e índice de consumo del alimento, y la proteína digestible en intestino (PDI).{'\n'}{'\n'}
            Desde la década del 80 comenzaron los trabajos encaminados a desarrollar programas
            para el racionamiento de los alimentos. En esta dirección se obtuvo y comercializó el software
            CONFOR, de amplia difusión nacional y también internacional, que empleó los óptimos
            fisiológicos y económicos para el establecimiento de los niveles de inclusión de los diferentes
            componentes de la ración. Actualmente, se dispone de programas computarizados (ANALIT
            y CALRAC) que incluyen la utilización de la modelación y la simulación para describir el
            comportamiento animal y métodos de optimización para la confección de balances alimentarios
            y raciones.{'\n'}{'\n'}
            Se desarrollaron otros programas relacionados con las investigaciones en nutrición y
            alimentación animal como SIMUL, MoviReb, AlimCerdos y otros como Proteolit y Amilolit
            vinculados a los procesos bioquímicos y fisiológicos que ocurren en el rumen.
            La Red-Est se creó para la asesoría y capacitación de profesores, investigadores y estudiantes
            de nivel superior en temas relacionados con la Estadística-Matemática y sus aplicaciones en
            el campo de las ciencias agropecuarias.{'\n'}{'\n'}
            En 1998 se obtuvo el Programa de cómputo “Analest” para análisis estadístico de diseños
            clásicos.{'\n'}{'\n'}
            El programa ALIMCONEJOS fue desarrollado para la formulación de dietas para conejos
            en plantas de fabricación o para el pequeño productor; en estos momentos está en fase de
            perfeccionamiento y actualización, así como el sistema de programas ALPROC en lenguaje
            SAS para el procesamiento primario de investigaciones con dietas no convencionales para
            estos animales.{'\n'}{'\n'}
            Recientemente, se generó un modelo para el consumo en pastoreo y el establecimiento del
            nivel de suplementación apropiado, para satisfacer los requerimientos de la vaca en producción,
            minimizar la cantidad de pienso a suministrar y hacer uso óptimo del pasto. En este sentido,
            se creó el software RacionICA, capaz de auxiliar al productor en el establecimiento del nivel
            de suplementación apropiado a sus animales, al tiempo que le brinda información evaluativa
            general respecto al manejo de la alimentación de su lechería.{'\n'}{'\n'}
            Se avanzó en el empleo de la programación lineal para el análisis cuantitativo y diseño
            prospectivo tecnológico, en entidades de producción de leche, lo que permitió simular
            alternativas tecnológicas basadas en aspectos productivos, económicos y ambientales; lo
            que constituye un paso de avance en la planificación, optimización de procesos, análisis
            de escenarios y en el desarrollo de herramientas para la toma de decisiones. En este
            mismo sentido, se logró la metodología para el análisis de los indicadores de eficiencia en
            la producción de leche, a partir de la combinación de métodos multivariados y la técnica no
            paramétrica del Análisis Envolvente de Datos que facilita la determinación de las fronteras
            de eficiencia.{'\n'}{'\n'}
            Sobresale la obtención del Modelo Estadístico de Medición de Impacto (MEMI), que permite
            a través de un valor absoluto evaluar y cuantificar el impacto en los sistemas en el tiempo
            y el espacio. Se aplica la estadística multivariada en el análisis de varias matrices de datos
            bidimensionales en un análisis integrador utilizando la triangulación de métodos novedosos
            como son: componentes principales, conglomerados e inferencia estadística. El índice de
            impacto obtenido se valida mediante el análisis de componentes principales de tres modos.
            Se puede determinar la eficiencia económica de los sistemas haciendo uso de los resultados
            obtenidos con el MEMI, al igual que la inclusión de las variables sociales mediante el uso de
            las tablas de contingencia.{'\n'}{'\n'}
            Estudios de tratamiento estadístico para el análisis de variables discretas y categóricas en
            investigaciones agropecuarias, que han sido de poca aplicación en esta rama de la ciencia,
            permitió obtener métodos estadísticos alternativos (Análisis de Varianza no paramétrico y
            Modelo Lineal Generalizado) de gran utilidad ante el incumplimiento de los supuestos teóricos
            del Análisis de Varianza. Se logró la integración de doce indicadores estadísticos y del diseño
            experimental, con la aplicación de Métodos de Escalamiento Óptimo (CATPCA y CATREG),
            que aportaron criterios de valor teórico–práctico que sirven para ampliar el ámbito de este tipo
            de investigaciones en lo estadístico y metodológico.{'\n'}{'\n'}
            En la última etapa se desarrolló el software SimForrVacas que permite simular el
            rendimiento de materia seca de forraje del Pennisetum purpureum, su aporte nutricional, las
            posibles vacas a alimentar y la producción de leche que se puede alcanzar; en diferentes
            épocas del año.{'\n'}{'\n'}
            También se desarrollaron aplicaciones para solucionar problemáticas internas del trabajo
            administrativo productivo, entre los que se encuentran: control de proyectos, gestión de
            relaciones internacionales, recopilación de datos climáticos e información científico-técnica,
            entre otros. Algunos de estos programas están en fase de comercialización. En la tabla 9 se
            presentan los programas computarizados desarrollados por la Institución.
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