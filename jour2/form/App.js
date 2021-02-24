
import React from 'react';
import { Pressable, TextInput } from 'react-native';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

export default function App() {
  const [value, setValue] = React.useState('mail :');
  const [motDePass, setMDP] = React.useState('mot pass :');

  console.log("value,",value)
  return (
    <View style={styles.container}>
    
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 2 }}
        onChangeText={(text)=> setValue(text)}    //this.setState com par
      value={value}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 2 }}
        onChangeText={setMDP}    //this.setState com par
      value={motDePass}
      />
      <Pressable onPress={()=>{
        if(motDePass.length < 6){
          alert("affiche mot de pass")
        }
      }}
        
      >
        <Text>mot pass</Text>
      </Pressable>
    </View>
  );  
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: 'white',
    
  },
});
