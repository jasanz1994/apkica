import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, Image } from 'react-native';

export function PostgradoAcademicoScreen() {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/fondoxxx.png')} style={styles.background}>
                <Image source={require('../../assets/Tipos-de-postgrado.png')} style={styles.image} />

                <ScrollView>
                    <Text style={styles.text}>
                        La formación académica de postgrado tiene como objetivo la alta competencia profesional
                        y avanzadas capacidades para la investigación y la innovación, lo que se reconoce con un
                        título académico o grado científico. Constituyen formas organizativas del postgrado
                        académico la especialidad de postgrado, la maestría y el doctorado. La formación
                        posdoctoral es un proceso de actualización permanente para profesores e investigadores
                        con el grado científico de doctor, que puede tener expresiones diferentes en la
                        diversidad de la educación de postgrado.
                {'\n'}{'\n'}
                Con el firme propósito de avanzar en la satisfacción de las necesidades de formación de
                los profesionales de la investigación, la docencia y la producción en el sector
                agropecuario, el Instituto inicia en el año 2004 el Programa de Maestría Producción
                Animal para la Zona Tropical.
                {'\n'}{'\n'}
                La preparación pedagógica y metodológica del claustro del programa se fortaleció
                con la colaboración de la UNAH. Para ello, se desarrolló un Taller Pedagógico con el
                objetivo de elevar la calidad en la planificación y organización del proceso
                docente-educativo, los métodos de enseñanza y la evaluación del aprendizaje.
                Se culminó con el taller expositivo evaluado por profesores de prestigio y experiencia.
                También, se realizaron otros talleres para intercambiar experiencias en el proceso de
                digitalización de las conferencias y la elaboración de las multimedias correspondientes.
                {'\n'}{'\n'}
                La segunda Edición comenzó en septiembre de 2006. Funcionó con 44 alumnos de la
esfera productiva, procedentes de diversos organismos de las provincias Pinar del Río, La
Habana, Matanzas y Cienfuegos. Muchos de estos alumnos después de finalizar su enseñanza
universitaria no habían tenido oportunidad de realizar estudios de postgrado y los que tuvieron
acceso, en su mayoría, lo hicieron de forma dispersa sin orientación hacia un posible diplomado,
especialidad o maestría
{'\n'}{'\n'}
Esta Edición debió culminar en marzo de 2009. Sin embargo, debido a los embates de los
huracanes Gustav e Ike en el año 2008 y su paso demoledor, que ocasionó severos daños a
la infraestructura productiva de las regiones donde los alumnos realizaban sus investigaciones,
se solicitó una prórroga al MES, la cual se concedió hasta el mes de diciembre de 2009. Los
trabajos finales constituyeron aporte científico a los diferentes territorios de procedencia de
los egresados en el tema seguridad y soberanía alimentaria, sustitución de importaciones y
desarrollo sostenible.

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
        width: '90%',
        height: '30%'
    }
});