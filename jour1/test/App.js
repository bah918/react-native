import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Pressable, ActivityIndicator} from 'react-native';

export default function App() {

  
  return (
    <View style={styles.container}>
      <ScrollView style={styles.text}>
        <Text>
          Bonjour Tata
          </Text>
        <Text>
          Bonjour toto
          </Text>
        <Text>
          Bonjour titi
          </Text>
        <Image
          source={{uri:"https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png"}}
          style={styles.image} />

          <Image source={require("./img/konexio-logo_1.png")} 
	         style={{ width: 150, height: 50 }}/>
          <Pressable onPress={()=>{
            alert('BAH');
          }}>
            <Text>Touche</Text>
          </Pressable>
          <ActivityIndicator size="large"/>
          

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    backgroundColor: "white",
    marginTop: 80,
    marginBottom: 80,
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bolder',

  },
  image: {
    height: 50,
    width: 150,
  }
});
