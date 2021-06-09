import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, Image } from 'react-native';

export function PregradoScreen() {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/fondoxxx.png')} style={styles.background}>
                <Image source={require('../../assets/pregrado.png')} style={styles.image} />

                <ScrollView>
                    <Text style={styles.text}>
                        Esta perspectiva de trabajo se tradujo desde sus inicios, en la existencia de un
                        determinado número de profesores vinculados a la investigación, así como investigadores
                        brindando docencia de pregrado. Merece destacar, durante la primera mitad de la historia
                        del Instituto, la participación de investigadores como profesores universitarios en
                        distintos países del continente africano, entre ellos Mozambique, Congo y Etiopía,
                        que de manera altruista, marcharon a brindar desinteresadamente su ciencia y cultura.
                {'\n'}{'\n'}
                La docencia tuvo otra expresión concreta en el proceso de categorización como Profesores
                Adjuntos que se llevó a cabo a principios de 1985. En él, 23 investigadores se
                categorizaron como Profesores Titulares Adjuntos (17), y Auxiliares (6).{'\n'}{'\n'}
                Se debe destacar que durante el quinquenio 1976-1980, se discutieron 113 tesis de diploma
                y entre 1981-1985 fueron 250. El 51% de ellas estuvieron relacionadas directamente con
                investigaciones en pastos y aspectos nutricionales en bovinos de leche, de carne y otras
                disciplinas. {'\n'}{'\n'}
                Con posterioridad estos indicadores disminuyeron, fundamentalmente, durante gran parte
de la década de los años 90 debido al periodo especial. Se notó mejoría sustancial a inicios del
siglo 21, con la vinculación de 63 profesores de la UNAH y de las Universidades de Matanzas,
Guantánamo, Sancti Spíritus, Camagüey, Villa Clara, Cienfuegos, Santiago de Cuba y Granma,
muchos de los cuales vinculados al Plan de Doctorado. {'\n'}{'\n'}
En el año 2002, se logró la presencia de 27 estudiantes en diferentes modalidades como
trabajos de curso y diplomas, 69 profesores e investigadores de otros centros se relacionaron
con trabajos de investigación, docencia, publicaciones y otras modalidades como tutoría,
doctorados y vinculados al proceso de extensión de los resultados de la Institución.
{'\n'}{'\n'}
El 10 de noviembre de 2003 se inauguró la Unidad Docente de Educación Superior “Carlos
Policarpo Díaz”. Esta fue el resultado del largo quehacer docente mantenido a través de la
historia y que se perfecciona con la integración de la Red Nacional de Producción Animal,
donde el claustro de profesores interactúa para responder a las necesidades actuales en el
sector ganadero, con una proyección amplia y multidisciplinaria que abarca no sólo el futuro
ganadero en Cuba, sino que trasciende las fronteras.
{'\n'}{'\n'}
El 10 de noviembre de 2003 se inauguró la Unidad Docente de Educación Superior “Carlos
Policarpo Díaz”. Esta fue el resultado del largo quehacer docente mantenido a través de la
historia y que se perfecciona con la integración de la Red Nacional de Producción Animal,
donde el claustro de profesores interactúa para responder a las necesidades actuales en el
sector ganadero, con una proyección amplia y multidisciplinaria que abarca no sólo el futuro
ganadero en Cuba, sino que trasciende las fronteras.
{'\n'}{'\n'}
Todo lo anterior contribuyó a garantizar la reserva científica del centro y el futuro relevo de
los investigadores, mediante la captación de los estudiantes integrales, con preferencia a los
que residen en los alrededores del Instituto.
{'\n'}{'\n'}
A pesar de los esfuerzos realizados, todos los objetivos no se lograron, pero durante el período
se ayudó decisivamente al perfeccionamiento de los componentes académicos, laborales e
investigativos en la formación de los insertados en la Unidad Docente que ascendieron a 1606,
de los cuales 1169 corresponden a la Universidad Agraria de la Habana “Fructuoso Rodríguez”


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