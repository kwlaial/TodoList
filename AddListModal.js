import React, { Component, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native';

export default function App() {

  //backend
  const getPosts = () => {
    fetch("https://4cfa-175-159-126-58.ngrok.io/posts")
    .then((res) => res.json())
    .then(resJson => {
      console.log(resJson)
    })
    .catch(e => {console.log(e)})
 
  }
  
  useEffect(() => {
    getPosts();
  }, [])

  //UI


  return (
    <View style={styles.container}>
      <Text>List modal</Text>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
