import * as React from 'react';
import { ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SimpleLineIcons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { DrawerContent } from './CustomDrawer';

import { HomeScreen } from './app/drawer-item/Home';
import { CienciaInnovacionScreen } from './app/drawer-item/CienciaInnovacion';
import { CooperacionScreen } from './app/drawer-item/CooperacionInternacional';
import { FormacionScreen } from './app/drawer-item/FormacionProfesional';
import { MemoriaScreen } from './app/drawer-item/MemoriaGrafica';
import { ProductosScreen } from './app/drawer-item/Productos';
import { ReconocimientosScreen } from './app/drawer-item/ReconocientosExternos';
import { RetosScreen } from './app/drawer-item/Retos';
import { RevistaScreen } from './app/drawer-item/Revista';
import { ServiciosScreen } from './app/drawer-item/Servicios';
import { TecnologiasScreen } from './app/drawer-item/TecnologiasIntegrales';

import { BibliotecaScreen } from './app/formacion-profesional/Biblioteca';
import { ModalidadesScreen } from './app/formacion-profesional/ModalidadesCapacitacion';
import { PostgradoAcademicoScreen } from './app/formacion-profesional/PostgradoAcademico';
import { PostgradoScreen } from './app/formacion-profesional/Postgradro';
import { PregradoScreen } from './app/formacion-profesional/Pregrado';

import { BiomatematicaScreen } from './app/ciencia-innovacion/Biomatematica';
import { BioquimicaScreen } from './app/ciencia-innovacion/Bioquimica';
import { CanaScreen } from './app/ciencia-innovacion/CanaAzucar';
import { CrianzaScreen } from './app/ciencia-innovacion/Crianza';
import { CultivosScreen } from './app/ciencia-innovacion/Cultivos';
import { ExtencionScreen } from './app/ciencia-innovacion/Extencion';
import { GeneticaScreen } from './app/ciencia-innovacion/Genetica';
import { AvicolaScreen } from './app/ciencia-innovacion/ProduccionAvicola';
import { BufalinaScreen } from './app/ciencia-innovacion/ProduccionBufalina';
import { CarneScreen } from './app/ciencia-innovacion/ProduccionCarne';
import { CuniculaScreen } from './app/ciencia-innovacion/ProduccionCunicula';
import { LecheScreen } from './app/ciencia-innovacion/ProduccionLeche';
import { OvinoScreen } from './app/ciencia-innovacion/ProduccionOvino';
import { PorcinoScreen } from './app/ciencia-innovacion/ProduccionPorcina';
import { IntelectualScreen } from './app/ciencia-innovacion/PropiedadIntelectual';
import { ResidualesScreen } from './app/ciencia-innovacion/Residuales';
import { SubproductosScreen } from './app/ciencia-innovacion/Subproductos';
import { SuplementosScreen } from './app/ciencia-innovacion/Suplementos';
import { TorosScreen } from './app/ciencia-innovacion/Toros';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();

const TabsFormation = () => (
  <Tab.Navigator tabBarOptions={{ 
    scrollEnabled: true,
    }}
    >
    <Tab.Screen name="Formación Profesional" component={FormacionScreen} />
    <Tab.Screen name="Pregrado" component={PregradoScreen} />
    <Tab.Screen name="Postgrado" component={PostgradoScreen} />
    <Tab.Screen name="Postgrado Académico" component={PostgradoAcademicoScreen} />
    <Tab.Screen name="Biblioteca" component={BibliotecaScreen} />
    <Tab.Screen name="Otras Modalidades de Capacitación" component={ModalidadesScreen} />
  </Tab.Navigator>
);

const HomeStack = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#2d721c',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <Stack.Screen name='Home' component={HomeScreen}
      options={{
        headerTitle: 'ICA',
        headerTitleAlign: 'center',
        headerLeft: () => (<SimpleLineIcons name="menu" size={24} color="black"
          onPress={() => navigation.openDrawer()} />),
        headerLeftContainerStyle: {
          padding: 10,
          marginTop: 5
        }
      }}
    />
  </Stack.Navigator>
);

const FormacionStack = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#2d721c',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <Stack.Screen name='Formacion' component={TabsFormation}
      options={{
        headerTitle: 'Formación Profesional',
        headerTitleAlign: 'center',
        headerLeft: () => (<SimpleLineIcons name="menu" size={24} color="black"
          onPress={() => navigation.openDrawer()} />),
        headerLeftContainerStyle: {
          padding: 10,
          marginTop: 5
        }
      }}
    >
    </Stack.Screen>
  </Stack.Navigator>
);

const CienciaStack = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#2d721c',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <Stack.Screen name='Ciencia' component={CienciaInnovacionScreen}
      options={{
        headerTitle: 'Ciencia e Innovación',
        headerTitleAlign: 'center',
        headerLeft: () => (<SimpleLineIcons name="menu" size={24} color="black"
          onPress={() => navigation.openDrawer()} />),
        headerLeftContainerStyle: {
          padding: 10,
          marginTop: 5
        }
      }}
    />
  </Stack.Navigator>
);

const CooperacionStack = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#2d721c',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <Stack.Screen name='Cooperacion' component={CooperacionScreen}
      options={{
        headerTitle: 'Cooperación Internacional',
        headerTitleAlign: 'center',
        headerLeft: () => (<SimpleLineIcons name="menu" size={24} color="black"
          onPress={() => navigation.openDrawer()} />),
        headerLeftContainerStyle: {
          padding: 10,
          marginTop: 5
        }
      }}
    />
  </Stack.Navigator>
);

const MemoriaStack = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#2d721c',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <Stack.Screen name='Memoria' component={MemoriaScreen}
      options={{
        headerTitle: 'Memoria Gráfica',
        headerTitleAlign: 'center',
        headerLeft: () => (<SimpleLineIcons name="menu" size={24} color="black"
          onPress={() => navigation.openDrawer()} />),
        headerLeftContainerStyle: {
          padding: 10,
          marginTop: 5
        }
      }}
    />
  </Stack.Navigator>
);

const ProductosStack = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#2d721c',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <Stack.Screen name='Productos' component={ProductosScreen}
      options={{
        headerTitle: 'Productos',
        headerTitleAlign: 'center',
        headerLeft: () => (<SimpleLineIcons name="menu" size={24} color="black"
          onPress={() => navigation.openDrawer()} />),
        headerLeftContainerStyle: {
          padding: 10,
          marginTop: 5
        }
      }}
    />
  </Stack.Navigator>
);

const ReconocimientoStack = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#2d721c',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <Stack.Screen name='Reconocimiento' component={ReconocimientosScreen}
      options={{
        headerTitle: 'Reconocimientos Externos',
        headerTitleAlign: 'center',
        headerLeft: () => (<SimpleLineIcons name="menu" size={24} color="black"
          onPress={() => navigation.openDrawer()} />),
        headerLeftContainerStyle: {
          padding: 10,
          marginTop: 5
        }
      }}
    />
  </Stack.Navigator>
);

const RetosStack = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#2d721c',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <Stack.Screen name='Retos' component={RetosScreen}
      options={{
        headerTitle: 'Retos y Perspectivas',
        headerTitleAlign: 'center',
        headerLeft: () => (<SimpleLineIcons name="menu" size={24} color="black"
          onPress={() => navigation.openDrawer()} />),
        headerLeftContainerStyle: {
          padding: 10,
          marginTop: 5
        }
      }}
    />
  </Stack.Navigator>
);

const RevistaStack = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#2d721c',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <Stack.Screen name='Revista' component={RevistaScreen}
      options={{
        headerTitle: 'Revista',
        headerTitleAlign: 'center',
        headerLeft: () => (<SimpleLineIcons name="menu" size={24} color="black"
          onPress={() => navigation.openDrawer()} />),
        headerLeftContainerStyle: {
          padding: 10,
          marginTop: 5
        }
      }}
    />
  </Stack.Navigator>
);

const ServiciosStack = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#2d721c',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <Stack.Screen name='Servicios' component={ServiciosScreen}
      options={{
        headerTitle: 'Servicios',
        headerTitleAlign: 'center',
        headerLeft: () => (<SimpleLineIcons name="menu" size={24} color="black"
          onPress={() => navigation.openDrawer()} />),
        headerLeftContainerStyle: {
          padding: 10,
          marginTop: 5
        }
      }}
    />
  </Stack.Navigator>
);

const TecnologiasStack = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#2d721c',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <Stack.Screen name='Tecnologias' component={TecnologiasScreen}
      options={{
        headerTitle: 'Tecnologías Integrales',
        headerTitleAlign: 'center',
        headerLeft: () => (<SimpleLineIcons name="menu" size={24} color="black"
          onPress={() => navigation.openDrawer()} />),
        headerLeftContainerStyle: {
          padding: 10,
          marginTop: 5
        }
      }}
    />
  </Stack.Navigator>
);

const CultivosStack = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#2d721c',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>

    <Stack.Screen name='Cultivos' component={CultivosScreen}
      options={{
        headerTitle: 'Cultivos de Interés para la alimentación animal',
        headerTitleAlign: 'center',
        headerLeft: () => (<AntDesign name="arrowleft" size={24} color="black"
        onPress={() => navigation.goBack()} />),
        headerLeftContainerStyle: {
          padding: 10,
          marginTop: 5
        }
      }}
    />

  </Stack.Navigator>
);

const BioquimicaStack = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#2d721c',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>

    <Stack.Screen name='Bioquimica' component={BioquimicaScreen}
      options={{
        headerTitle: 'Bioquímica y Fisiología',
        headerTitleAlign: 'center',
        headerLeft: () => (<AntDesign name="arrowleft" size={24} color="black"
        onPress={() => navigation.goBack()} />),
        headerLeftContainerStyle: {
          padding: 10,
          marginTop: 5
        }
      }}
    />

  </Stack.Navigator>
);

const BiomatematicaStack = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#2d721c',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>

    <Stack.Screen name='Biomatematica' component={BiomatematicaScreen}
      options={{
        headerTitle: 'Biomatemática e Informatización',
        headerTitleAlign: 'center',
        headerLeft: () => (<AntDesign name="arrowleft" size={24} color="black"
        onPress={() => navigation.goBack()} />),
        headerLeftContainerStyle: {
          padding: 10,
          marginTop: 5
        }
      }}
    />

  </Stack.Navigator>
);

const CanaAzucarStack = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#2d721c',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>

    <Stack.Screen name='CanaAzucar' component={CanaScreen}
      options={{
        headerTitle: 'La Caña de Azucar',
        headerTitleAlign: 'center',
        headerLeft: () => (<AntDesign name="arrowleft" size={24} color="black"
        onPress={() => navigation.goBack()} />),
        headerLeftContainerStyle: {
          padding: 10,
          marginTop: 5
        }
      }}
    />

  </Stack.Navigator>
);

const CrianzaStack = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#2d721c',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>

    <Stack.Screen name='Crianza' component={CrianzaScreen}
      options={{
        headerTitle: 'Crianza de Terneros',
        headerTitleAlign: 'center',
        headerLeft: () => (<AntDesign name="arrowleft" size={24} color="black"
        onPress={() => navigation.goBack()} />),
        headerLeftContainerStyle: {
          padding: 10,
          marginTop: 5
        }
      }}
    />

  </Stack.Navigator>
);

const ExtencionStack = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#2d721c',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>

    <Stack.Screen name='Extencion' component={ExtencionScreen}
      options={{
        headerTitle: 'Extención y Tranferencia de Tecnologías',
        headerTitleAlign: 'center',
        headerLeft: () => (<AntDesign name="arrowleft" size={24} color="black"
        onPress={() => navigation.goBack()} />),
        headerLeftContainerStyle: {
          padding: 10,
          marginTop: 5
        }
      }}
    />

  </Stack.Navigator>
);

const GeneticaStack = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#2d721c',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>

    <Stack.Screen name='Genetica' component={GeneticaScreen}
      options={{
        headerTitle: 'Genética',
        headerTitleAlign: 'center',
        headerLeft: () => (<AntDesign name="arrowleft" size={24} color="black"
        onPress={() => navigation.goBack()} />),
        headerLeftContainerStyle: {
          padding: 10,
          marginTop: 5
        }
      }}
    />

  </Stack.Navigator>
);

const AvicolaStack = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#2d721c',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>

    <Stack.Screen name='Avicola' component={AvicolaScreen}
      options={{
        headerTitle: 'Producción Avícola',
        headerTitleAlign: 'center',
        headerLeft: () => (<AntDesign name="arrowleft" size={24} color="black"
        onPress={() => navigation.goBack()} />),
        headerLeftContainerStyle: {
          padding: 10,
          marginTop: 5
        }
      }}
    />
  </Stack.Navigator>
);

const BufalinaStack = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#2d721c',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>

    <Stack.Screen name='Bufalina' component={BufalinaScreen}
      options={{
        headerTitle: 'Producción Bufalina',
        headerTitleAlign: 'center',
        headerLeft: () => (<AntDesign name="arrowleft" size={24} color="black"
        onPress={() => navigation.goBack()} />),
        headerLeftContainerStyle: {
          padding: 10,
          marginTop: 5
        }
      }}
    />
  </Stack.Navigator>
);

const CarneStack = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#2d721c',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>

    <Stack.Screen name='Carne' component={CarneScreen}
      options={{
        headerTitle: 'Producción de Carne Vacuna',
        headerTitleAlign: 'center',
        headerLeft: () => (<AntDesign name="arrowleft" size={24} color="black"
        onPress={() => navigation.goBack()} />),
        headerLeftContainerStyle: {
          padding: 10,
          marginTop: 5
        }
      }}
    />
  </Stack.Navigator>
);

const CuniculaStack = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#2d721c',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>

    <Stack.Screen name='Cunicula' component={CuniculaScreen}
      options={{
        headerTitle: 'Producción Cunícula',
        headerTitleAlign: 'center',
        headerLeft: () => (<AntDesign name="arrowleft" size={24} color="black"
        onPress={() => navigation.goBack()} />),
        headerLeftContainerStyle: {
          padding: 10,
          marginTop: 5
        }
      }}
    />
  </Stack.Navigator>
);

const LecheStack = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#2d721c',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>

    <Stack.Screen name='Leche' component={LecheScreen}
      options={{
        headerTitle: 'Producción de Leche Vacuna',
        headerTitleAlign: 'center',
        headerLeft: () => (<AntDesign name="arrowleft" size={24} color="black"
        onPress={() => navigation.goBack()} />),
        headerLeftContainerStyle: {
          padding: 10,
          marginTop: 5
        }
      }}
    />
  </Stack.Navigator>
);

const OvinoStack = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#2d721c',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>

    <Stack.Screen name='Ovino' component={OvinoScreen}
      options={{
        headerTitle: 'Producción Ovino-Caprina',
        headerTitleAlign: 'center',
        headerLeft: () => (<AntDesign name="arrowleft" size={24} color="black"
        onPress={() => navigation.goBack()} />),
        headerLeftContainerStyle: {
          padding: 10,
          marginTop: 5
        }
      }}
    />
  </Stack.Navigator>
);

const PorcinoStack = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#2d721c',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>

    <Stack.Screen name='Porcino' component={PorcinoScreen}
      options={{
        headerTitle: 'Producción Porcina',
        headerTitleAlign: 'center',
        headerLeft: () => (<AntDesign name="arrowleft" size={24} color="black"
        onPress={() => navigation.goBack()} />),
        headerLeftContainerStyle: {
          padding: 10,
          marginTop: 5
        }
      }}
    />
  </Stack.Navigator>
);

const IntelectualStack = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#2d721c',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>

    <Stack.Screen name='Intelectual' component={IntelectualScreen}
      options={{
        headerTitle: 'Propiedad Intelectual',
        headerTitleAlign: 'center',
        headerLeft: () => (<AntDesign name="arrowleft" size={24} color="black"
        onPress={() => navigation.goBack()} />),
        headerLeftContainerStyle: {
          padding: 10,
          marginTop: 5
        }
      }}
    />
  </Stack.Navigator>
);

const ResidualesStack = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#2d721c',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>

    <Stack.Screen name='Residuales' component={ResidualesScreen}
      options={{
        headerTitle: 'Residuales de las Explotaciones Precuarias',
        headerTitleAlign: 'center',
        headerLeft: () => (<AntDesign name="arrowleft" size={24} color="black"
        onPress={() => navigation.goBack()} />),
        headerLeftContainerStyle: {
          padding: 10,
          marginTop: 5
        }
      }}
    />
  </Stack.Navigator>
);

const SubproductosStack = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#2d721c',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>

    <Stack.Screen name='Subproductos' component={SubproductosScreen}
      options={{
        headerTitle: 'Subproductos Agrícolas e Industriales',
        headerTitleAlign: 'center',
        headerLeft: () => (<AntDesign name="arrowleft" size={24} color="black"
        onPress={() => navigation.goBack()} />),
        headerLeftContainerStyle: {
          padding: 10,
          marginTop: 5
        }
      }}
    />
  </Stack.Navigator>
);

const SuplementosStack = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#2d721c',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>

    <Stack.Screen name='Suplementos' component={SuplementosScreen}
      options={{
        headerTitle: 'Suplementos y Aditivos Nutricionales',
        headerTitleAlign: 'center',
        headerLeft: () => (<AntDesign name="arrowleft" size={24} color="black"
        onPress={() => navigation.goBack()} />),
        headerLeftContainerStyle: {
          padding: 10,
          marginTop: 5
        }
      }}
    />
  </Stack.Navigator>
);

const TorosStack = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#2d721c',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>

    <Stack.Screen name='Toros' component={TorosScreen}
      options={{
        headerTitle: 'Toros Sementales',
        headerTitleAlign: 'center',
        headerLeft: () => (<AntDesign name="arrowleft" size={24} color="black"
        onPress={() => navigation.goBack()} />),
        headerLeftContainerStyle: {
          padding: 10,
          marginTop: 5
        }
      }}
    />
  </Stack.Navigator>
);

export default function App () {
return (
  <SafeAreaProvider>
  <NavigationContainer>
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name='ICA' component={HomeStack} />
      <Drawer.Screen name='Formacion' component={FormacionStack} />
      <Drawer.Screen name='Revista' component={RevistaStack} />
      <Drawer.Screen name='Cooperacion' component={CooperacionStack} />
      <Drawer.Screen name='Ciencia' component={CienciaStack} />
      <Drawer.Screen name='Tecnologias' component={TecnologiasStack} />
      <Drawer.Screen name='Productos' component={ProductosStack} />
      <Drawer.Screen name='Servicios' component={ServiciosStack} />
      <Drawer.Screen name='Reconocimientos' component={ReconocimientoStack} />
      <Drawer.Screen name='Retos' component={RetosStack} />
      <Drawer.Screen name='Memoria' component={MemoriaStack} />
      <Drawer.Screen name='Biomatematica' component={BiomatematicaStack} />
      <Drawer.Screen name='Bioquimica' component={BioquimicaStack} />
      <Drawer.Screen name='Cana' component={CanaAzucarStack} />
      <Drawer.Screen name='Crianza' component={CrianzaStack} />
      <Drawer.Screen name='Cultivos' component={CultivosStack} />
      <Drawer.Screen name='Extencion' component={ExtencionStack} />
      <Drawer.Screen name='Genetica' component={GeneticaStack} />
      <Drawer.Screen name='Avicola' component={AvicolaStack} />
      <Drawer.Screen name='Bufalina' component={BufalinaStack} />
      <Drawer.Screen name='Carne' component={CarneStack} />
      <Drawer.Screen name='Cunicula' component={CuniculaStack} />
      <Drawer.Screen name='Leche' component={LecheStack} />
      <Drawer.Screen name='Ovino' component={OvinoStack} />
      <Drawer.Screen name='Porcino' component={PorcinoStack} />
      <Drawer.Screen name='Intelectual' component={IntelectualStack} />
      <Drawer.Screen name='Residuales' component={ResidualesStack} />
      <Drawer.Screen name='Subproductos' component={SubproductosStack} />
      <Drawer.Screen name='Suplementos' component={SuplementosStack} />
      <Drawer.Screen name='Toros' component={TorosStack} />
    </Drawer.Navigator>
  </NavigationContainer>
</SafeAreaProvider>
);
}