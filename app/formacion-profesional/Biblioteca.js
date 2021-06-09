import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, Image } from 'react-native';

export function BibliotecaScreen() {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/fondoxxx.png')} style={styles.background}>
                <Image source={require('../../assets/biblioteca.png')} style={styles.image} />

                <ScrollView>
                    <Text style={styles.text}>
                        La Biblioteca se funda en 1965 y radicó inicialmente en una de las casas de Nuevo
                        Vedado asignadas al Instituto en aquel momento. En 1966, pasa a uno de los locales
                        de los almacenes y se ubica, en junio de 1968, en el edificio de la administración.
                    {'\n'}{'\n'}
                    Al inicio, tenía el objetivo de actualizar e informar a los investigadores sobre la metodología
                    científica de la investigación y de la formación pre y posgratduada. Es decir, apoyar con
                    bibliografía los trabajos de investigación relacionados con la alimentación, manejo y producción
                    animal. Los primeros pasos de automatización se realizan a partir de1997 con la adquisición
                    de las computadoras.  {'\n'}{'\n'}
                    La Biblioteca constituye un centro de información especializada en temas agropecuarios, que
                    ha servido a la comunidad científica nacional e internacional mediante sus variados servicios
                    en la actualización de conocimientos.  {'\n'}{'\n'}
                    Tiene como misión: Brindar servicios especializados, rápidos y precisos en función de
                    satisfacer las necesidades de información actualizada para los proyectos de investigación,
                    la formación de investigadores y de estudiantes de pre y postgrado; su visión se centra
                    en: El desarrollo de un modelo de gestión de información de excelencia, con el uso de
                    las nuevas tecnologías y la publicación del catálogo, y los servicios en redes nacionales
                    e internacionales para su consulta.{'\n'}{'\n'}
                    La Biblioteca posee una sala de lectura, tres cubículos y el área de trabajo para procesar
                    información. El fondo documental impreso es de 5000 libros y folletos, 900 informes finales
                    de proyectos, tesis de diploma, maestría y doctorado, así como más de 50 colecciones de
                    títulos de revistas que se encuentran activos y que la vía de adquisición principal ha sido
                    el intercambio con las revistas del Instituto.{'\n'}{'\n'}
                    En los servicios que oferta se encuentran: la búsqueda y localización de información, el
                    préstamo de documentos en sala y domiciliario, la consulta de bases de datos en línea, la
                    diseminación de la información, la exposición de documentos, el boletín divulgativo y la
                    reproducción de documentos.{'\n'}{'\n'}
                    Como entidad partícipe y promotora de la cultura en la organización, brinda asesorías,
                    conferencias y cursos que contribuyen al proceso de alfabetización del usuario, en aras de
                    optimizar el empleo de las tecnologías de la información y las comunicaciones.{'\n'}{'\n'}
                    El sitio Web de la biblioteca es accesible desde la Intranet y a través de la red del
                    Ministerio de Educación Superior de Cuba, desde la dirección http://www.reduniv.mes.edu.cu
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