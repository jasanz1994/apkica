import React from 'react';
import { View, StyleSheet, Image, ImageBackground } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

export function DrawerContent(props) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('./assets/fondoxxx.png')} style={styles.background}>
                <View style={styles.imageSection}>
                    <Image source={require('./assets/imgDrawer.jpg')} style={styles.image} />
                </View>
                <View style={styles.contentSection}>
                    <DrawerContentScrollView {...props}>
                        <View>
                            <DrawerItem
                                icon={() => (
                                    <Entypo name="home" size={24} color="#2d721c" />
                                )}
                                label='Inicio'
                                onPress={() => { props.navigation.navigate('ICA') }}
                            />
                            <DrawerItem
                                icon={() => (
                                    <Entypo name="graduation-cap" size={24} color="#2d721c" />
                                )}
                                label='Docencia'
                                onPress={() => { props.navigation.navigate('Formacion') }}
                            />
                            <DrawerItem
                                icon={() => (
                                    <Entypo name="book" size={24} color="#2d721c" />
                                )}
                                label='Revista'
                                onPress={() => { props.navigation.navigate('Revista') }}
                            />
                            <DrawerItem
                                icon={() => (
                                    <Entypo name="folder" size={24} color="#2d721c" />
                                )}
                                label='Cooperación Internacional'
                                onPress={() => { props.navigation.navigate('Cooperacion') }}
                            />
                            <DrawerItem
                                icon={() => (
                                    <MaterialIcons name="science" size={24} color="#2d721c" />
                                )}
                                label='Ciencia e Innovación Tecnológica'
                                onPress={() => { props.navigation.navigate('Ciencia') }}
                            />
                            <DrawerItem
                                icon={() => (
                                    <Entypo name="folder" size={24} color="#2d721c" />
                                )}
                                label='Tecnologias Integrales'
                                onPress={() => { props.navigation.navigate('Tecnologias') }}
                            />
                            <DrawerItem
                                icon={() => (
                                    <FontAwesome name="product-hunt" size={24} color="#2d721c" />
                                )}
                                label='Productos'
                                onPress={() => { props.navigation.navigate('Productos') }}
                            />
                            <DrawerItem
                                icon={() => (
                                    <MaterialIcons name="miscellaneous-services" size={24} color="#2d721c" />
                                )}
                                label='Servicios'
                                onPress={() => { props.navigation.navigate('Servicios') }}
                            />
                            <DrawerItem
                                icon={() => (
                                    <Entypo name="folder" size={24} color="#2d721c" />
                                )}
                                label='Reconocimientos Externos'
                                onPress={() => { props.navigation.navigate('Reconocimientos') }}
                            />
                            <DrawerItem
                                icon={() => (
                                    <Entypo name="folder" size={24} color="#2d721c" />
                                )}
                                label='Retos y Perspectivas'
                                onPress={() => { props.navigation.navigate('Retos') }}
                            />
                            <DrawerItem
                                icon={() => (
                                    <Entypo name="folder-images" size={24} color="#2d721c" />
                                )}
                                label='Memoria Grafica'
                                onPress={() => { props.navigation.navigate('Memoria') }}
                            />
                        </View>
                    </DrawerContentScrollView>

                </View>
            </ImageBackground>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageSection: {
        flex: 1,
        alignItems: 'center',
        zIndex: 9999,
    },
    contentSection: {
        flex: 3,
        zIndex: 1
    },
    image: {
        width: '100%',
        height: '100%',
        marginTop: 40,
    },
    buttomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    background: {
        height: '100%',
        width: '100%'
    }
});
