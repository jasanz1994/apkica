import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, Image } from 'react-native';

export function PostgradoScreen() {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/fondoxxx.png')} style={styles.background}>
                <Image source={require('../../assets/postgrado.png')} style={styles.image} />

                <ScrollView>
                    <Text style={styles.text}>
                        En 1968 se constituye y se estructura la docencia postgraduada. En aquel momento se
                        consideraba, en primer lugar, que proveería al país del aporte seguro e incrementado en
                        el tiempo, de científicos calificados, capaces de llevar a cabo tareas de alto nivel o
                        de impartir docencia a los futuros graduados y estudiantes. En segundo lugar, esto
                        serviría para valorar al Instituto como centro docente con reputación internacional.
                {'\n'}{'\n'}
                La estrategia fue la de enmarcar el trabajo experimental del estudiante de postgrado en el
                programa de investigación del centro, de forma que a la vez que elevaban su nivel teórico,
                participaban en la solución de problemas concretos del desarrollo agropecuario. Al mismo
tiempo, fue preocupación primordial asegurar alta exigencia, rigor y disciplina en el alcance de
los conocimientos teóricos requeridos.
{'\n'}{'\n'}
Esta formación de dos años de duración, aproximadamente, se evaluaba sobre la base
de la tesis de Maestría, presentada y discutida, así como los resultados de tres exámenes
(estadística y diseño experimental, idioma y especialidad). A esto se añadía la confección de
ensayos (revisiones temáticas) y seminarios individuales discutidos y entregados a plazo fijo.
El mecanismo fue puesto en práctica inicialmente por los doctores Preston, Willis y el resto del
personal inglés que trabajaba en el ICA. Los efectos en la superación de los graduados fueron
positivos, de tal forma que aún en la actualidad mantienen plena vigencia.
{'\n'}{'\n'}
Durante el primer año se pretendió que el estudiante se apropiara de los métodos y técnicas
utilizados en la especialidad. En el segundo año, sin abandonar el trabajo experimental, se
participaba en cursos y clases teóricas, la realización y presentación pública de los ensayos
y seminarios que le servían para entrenarse en el uso y consulta de publicaciones científicas,
desarrollar la habilidad para la síntesis, la selección de elementos primordiales y secundarios
de un trabajo, y ganar en el aprendizaje de las formas adecuadas de presentar la información
científica de acuerdo con los intereses del centro. Esto se complementaba con la presentación de
trabajos en eventos y becas. La política educacional era formulada por el Comité de Docencia,
pero con la supervisión del Director del Instituto.
{'\n'}{'\n'}
                Si hasta 1970 la docencia se limitó al personal técnico del propio Instituto y, en gran
                parte, era impartida por personal extranjero, a partir de 1971 se incorporaron a estos
                cursos graduados provenientes de otros centros docentes y de la producción, aunque se
                mantuvo el objetivo del período anterior, ya el personal técnico cubano comenzó a
                tomar parte activa en la impartición de la docencia superior.
                {'\n'}{'\n'}
                Es bueno destacar, que las temáticas de los cursos de postgrado se han mantenido siempre
                vinculadas con las especialidades de mayor importancia para el desarrollo de la
                investigación y de la introducción de técnicas modernas de explotación, en la práctica
                nacional de las empresas pecuarias. Entre las temáticas impartidas figuran: la
                producción de pastos, manejo y alimentación del ganado lechero y de carne, bioquímica
                nutricional, genética, métodos bioestadísticos aplicados a la producción agropecuaria
                y otras. En el período 1973-2014 recibieron cursos de postgrado en la Institución un
                total de 15 276 profesionales.

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