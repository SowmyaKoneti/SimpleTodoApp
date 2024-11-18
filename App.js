import React from 'react';
import { Text, View, StyleSheet, AppRegistry } from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My First React Native Application</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

AppRegistry.registerComponent('SimpleTodo_App', () => App);
