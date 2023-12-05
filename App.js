import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View, Image } from 'react-native';
import Home from './src/screens/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./src/img/pexels-aleksejs-bergmanis-681336.jpg')}
        style={styles.backgroundImage}
      />
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  backgroundImage: {
   
    resizeMode: 'cover',
    width: '100%',
    height: '30%',
  },
});
