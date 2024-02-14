import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import Button from '../components/Button';
const ResetPass = (props:any) => {
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={styles.pic}>
        <Image source={require('../assets/resetpass.png')} />
      </View>
      <Text style={styles.fp}>Reset Password</Text>
      <Text style={styles.para}>
        Please Setup your New Password to continue
      </Text>
      <TextInput
        style={styles.input}
        placeholderTextColor={'#999999'}
        placeholder="Enter New Password"
      />
      <TextInput
        style={styles.input2}
        placeholderTextColor={'#999999'}
        placeholder="Confirm New Password"
      />

<Button title={'Submit'}
      onPress={()=> props.navigation.navigate('Login',{})}/>
        
    </View>
  );
};

export default ResetPass;

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
    paddingBottom: 10,
    paddingTop: 20,
    fontWeight: 'bold',
  },
  para: {
    textAlign: 'center',
    fontSize: 15,
    paddingHorizontal: 82,
    color: '#999999',
    lineHeight: 30,
  },
  input: {
    color: '#E6E6E6',
    fontSize: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    borderRadius: 30,
    marginTop: 30,
    marginHorizontal: 40,
  },
  input2: {
    color: '#999999',
    fontSize: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    borderRadius: 30,
    marginTop: 20,
    marginHorizontal: 40,
  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#AA1D1E',
    marginTop: 30,
    marginHorizontal: 40,
    padding: 15,
    borderRadius: 30,
  },
});
