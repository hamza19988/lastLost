import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import logo from '../../assets/images/Welly.gif';

const WellnessScreen = () => {
  return (
    <View style={styles.container}>
      <Animatable.Image 
        animation="pulse" 
        easing="ease-out" 
        iterationCount="infinite" 
        source={logo} 
        style={styles.logo} 
      />
      <Animatable.Text 
        animation="fadeInDown" 
        easing="ease-out" 
        style={styles.text}
      >
        Meet Welly!
      </Animatable.Text>
      <Animatable.Text 
        animation="fadeInDown" 
        delay={500} 
        easing="ease-out" 
        style={styles.text}
      >
        Welly is an Intelligent wellness bot.
      </Animatable.Text>
      <Animatable.Text 
        animation="fadeInDown" 
        delay={1000} 
        easing="ease-out" 
        style={styles.text}
      >
        Stay Tuned!
      </Animatable.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    marginBottom: 30,
  },
});

export default WellnessScreen;
