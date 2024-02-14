import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Button from '../components/Button';

const Language = (props:any) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.pic}>
        <Image source={require('../assets/lang.png')} />
      </View>

      <Text style={styles.cl}>Choose Language</Text>
      <Text style={styles.para}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout
      </Text>

      <Text style={styles.eng}>English</Text>
      <Text style={styles.ara}>Arabic</Text>

      <View style={{flex: 1}}>
        <Button title ={'Next'}
         onPress={()=>props.navigation.navigate('Login',{})}
         
        
        />
      </View>
    </View>
  );
};

export default Language;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  pic: {
    alignItems: 'center',
    paddingTop: 104,
  },
  cl: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 22,
    color: '#1A1A1A',
    paddingBottom: 10,
    paddingTop: 11,
    fontWeight: 'bold',
  },
  para: {
    textAlign: 'center',
    fontSize: 14,
    paddingHorizontal: 19,
    color: '#999999',
    lineHeight: 22,
  },
  eng: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 22,
    color: '#1A1A1A',
    paddingBottom: 40,
    paddingTop: 50,
    fontWeight: 'bold',
  },
  ara: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 22,
    color: '#999999',
    fontWeight: 'bold',
    marginBottom:175
  },
});
