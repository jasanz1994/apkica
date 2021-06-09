import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';

export function ModalidadesScreen() {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/fondoxxx.png')} style={styles.background}>

                <ScrollView>
            <Text style={styles.text}>
                La tarea de capacitación de los trabajadores no profesionales se inició en 1968, pero no
                fue hasta 1969 cuando se consolidó con la creación de la Educación Obrero Campesina, Facultad
                Obrero-Campesina y Secundaria Obrero- Campesina. Más tarde, en 1970, se fundó la Escuela Taller
                con 48 jóvenes de la zona, de la Columna Juvenil del Centenario y de la granja “Cojímar” que se
                encontraban trabajando y estudiando en la Institución desde hacía algún tiempo.
                {'\n'}{'\n'}
                La batalla por el 6to y el 9no grados se desarrolló con el apoyo de la Institución y sus organizaciones
                políticas y de masas. Se graduaron 146 y 105 trabajadores en ambos niveles, respectivamente. La masiva
                incorporación de los trabajadores a los estudios universitarios y de técnico medio es un hecho histórico
                de trascendencia relevante y se ha repetido a través de estos 50 años.
                {'\n'}{'\n'}
                Se impartieron numerosos cursos de capacitación técnica a obreros vinculados o no a la investigación y a
                los técnicos medios incluyendo, entre otros, pastos y forrajes, fotografías, hematología, manejo de vacas
                lecheras y terneros, producción de leche basados en pastos, contabilidad, computación, experimentación
                avícola y porcina, selección y cruzamiento, entre otras. Un ejemplo de esto fue que desde 1985 hasta
                1989 se capacitaron 266 trabajadores.
                {'\n'}{'\n'}
                Dentro de este movimiento integral, merece especial mención la labor del técnico medio y del obrero
                agrícola vinculado a la investigación. Esta expresión de la fuerza laboral ha desempeñado un papel
                preferente y esencial a lo largo del proceso de investigación, por su vínculo directo entre el
                investigador y el proceso material de la experimentación.
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