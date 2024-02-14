import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Button from '../components/Button';
import { fonts } from '../src/Constants/fonts';

const ForgotPass = (props:any) => {
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={styles.pic}>
        <Image source={require('../assets/forpass.png')} />
      </View>
      <Text style={styles.fp}>Forgot Password</Text>
      <Text style={styles.para}>
        It is along established fact that a reader will be distracted the
        readable content of a page when looking at its layout
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={'#999999'}
      />

      <Button title={'Continue'}
      onPress={()=> props.navigation.navigate('Otpe',{state:"email"})}/>
        </View>
  );
};

export default ForgotPass;

const styles = StyleSheet.create({
  pic: {
    alignItems: 'center',
    paddingTop: 90,
  },
  fp: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 22,
    color: '#1A1A1A',
    paddingBottom: 15,
    paddingTop: 22,
    fontWeight: 'bold',
  },
  para: {
    textAlign: 'center',
    fontSize: 14,
    paddingHorizontal: 40,
    color: '#999999',
    lineHeight: 22,
    fontFamily:fonts.BOLD
  },
  input: {
    color: 'black',
    fontSize: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    borderRadius: 30,
    marginTop: 20,
    marginHorizontal: 40,
    textAlign: 'left',
  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#AA1D1E',
    marginTop: 16,
    marginHorizontal: 40,
    padding: 15,
    borderRadius: 30,
  },
});
