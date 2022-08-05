import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Pressable, TextInput } from 'react-native';
import {useFonts} from 'expo-font'

export default function App() {

  const [load] = useFonts({
    Montserrat: require("./assets/fonts/Anjoman-ExtraBold.ttf"),
  });
  const [text, setText] = useState('hey! please see me!')
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50, fontFamily: "Anjoman-ExtraBold" }}>
        Hello im here
      </Text>
      <Text>{text}</Text>
      <Pressable style={styles.btn} onPress={() => setText("fuck you")}>
        <Text>hello</Text>
      </Pressable>
      <TextInput style={styles.input} defaultValue="whats youre name" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  input:{
    borderColor: 'black',
  }
});
