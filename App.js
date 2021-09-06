/*import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Carousel</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/

/*import React from "react";
import { Text, Button, View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import image from './assets/paisaje_1.png';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex', 
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function GroupOrientation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup orientation="horizontal">
        <Button style={styles.button}>NEXT</Button>
        <Button>PREVIOUS</Button>
      </ButtonGroup>
    </div>
  )

  {/*const App = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Hola carousel react native</Text>
        <Image
          source={image}
          style={styles.image}
        />
        <TouchableOpacity id={"button1"}
          onPress={() => Alert.alert("Pasa a la siguiente imagen")}
          style={styles.button1}
        >
          <Text style={styles.buttonText}>Next</Text>
          
        </TouchableOpacity>
        <TouchableOpacity id={"button2"}
          onPress={() => Alert.alert('')}
          style={styles.button}
        >
        <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
      </View>
    );
  };*/

{/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#292929"
  },
  title: {
    fontSize: 30,
    color: "#fff"
  },
  image: {
    height: 354,
    width: 537
  },
  button: {
    position: "relative",
    flex: 1,
    width: 100,
    alignItems: 'center',
    backgroundColor: '#61dafb',
    padding: 7,
    marginTop: 10,
    borderRadius: 10,
    textAlign: "center"
  },
  /*button1: {
    position: "relative",
    flex: '50%',
    alignSelf: 'flex-start',
    width: 120,
    backgroundColor: '#61dafb',
    padding: 7,
    marginTop: 10,
    borderRadius: 10,
    textAlign: "center",
  },
  button2: {
    position: "relative",
    alignSelf: 'flex-end',
    width: 120,
    backgroundColor: '#61dafb',
    padding: 7,
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 20,
  }
});
};

import React, { useState, useEffect } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import Loading from '../../components/Loading'
import { getDocumentById } from '../../utils/actions'

export default function Restaurant({ navigation, route }) {
  const { id, name } = route.params
  const [ app, setApp ] = useState(null)

  navigation.setOptions{{ title: name }}

  useEffect(() => {
    (async() => {
      const response = await getDocumentById("app", id)
      if (response.statusResponse) {
        setApp(response.document)
      }else {
        setApp({})
        Alert.alert("Ocurrio un problema cargando el carousel")
      }
    })()
  ), []}

  if(!app) {
    return <Loading isVisible={true} text="Cargando.."/>
  }

  return (
    <View>
      <Text>{app.description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})*/}

import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import Carousel from "react-native-snap-carousel";
import image from './assets/paisaje_1.png';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola carousel react native</Text>
      <Image
        source={image}
        style={styles.image}
      />
      <TouchableOpacity
        onPress={() => Carousel.MyPagination("Pasa a la siguiente imagen")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Next</Text>
        
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Alert.alert('')}
        style={styles.button}
      >
       <Text style={styles.buttonText}>Previous</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#292929"
  },
  title: {
    fontSize: 30,
    color: "#fff"
  },
  image: {
    height: 354,
    width: 537
  },
  button: {
    backgroundColor: '#61dafb',
    padding: 7,
    marginTop: 10,
    borderRadius: 10
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 20,
  }
});

export default App;