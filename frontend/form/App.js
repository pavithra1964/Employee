import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Form from './screen/Form';
import FlatListBasics from './screen/mainscreen';

export default function App() {
  return (
    <View style={styles.container}>
      <FlatListBasics />
      <Text>I am fine!!!</Text>
      <Text>Hello World</Text>
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
