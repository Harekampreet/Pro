import {Image, StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';

const Splash = (props:any) => {
  useEffect(()=>{
    setTimeout(()=>{
      props.navigation.navigate('Language')
    },2000)
  })
  return (
    <View style={styles.container}>
      <Image source={require('../assets/splash.png')} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 250,
  },
});
