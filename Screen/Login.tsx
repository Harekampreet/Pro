import {useState} from 'react';
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import Button from '../components/Button';

const Login = (props:any) => {
  const [text, setText] = useState('');
  return (
   <ScrollView showsVerticalScrollIndicator={false}>
    <View style={{flex: 1}}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{flex: 1, flexDirection: 'row', paddingTop: 50}}>
          <Image source={require('../assets/car2.jpg')} style={styles.pic} />
          <Image source={require('../assets/car3.jpg')} style={styles.pic} />
          <Image source={require('../assets/car5.jpg')} style={styles.pic} />
          <Image source={require('../assets/car11.webp')} style={styles.pic} />

          <Image source={require('../assets/car13.jpg')} style={styles.pic} />
        </View>
      </ScrollView>
      <Text style={styles.head}>Log In</Text>
      <Text style={styles.light}>Login Your Account to continue</Text>

      <TextInput
        style={styles.input}
        placeholderTextColor={'#999999'}
        placeholder="Email"
      />
      <TextInput
        style={styles.pass}
        placeholder="Password"
        placeholderTextColor={'#999999'}
      />
      <Text
        style={{
          fontSize: 12,
          color: '#1A1A1A',
          paddingRight: 24,
          textAlign: 'right',
          fontWeight: '400',
          marginTop: 12,
        }}
        onPress={()=> props.navigation.navigate('ForgotPass',{})}
        >
        Forgot Password ?
      </Text>
<Button title={"Log In"}
 onPress={()=> props.navigation.navigate('WatchList',{})}
 
 />
      <Text style={styles.guest}>Login as a Guest User </Text>
      <Text style={styles.pn}>Continue with Phone number </Text>

      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
        <Image source={require('../assets/logo2.png')} style={styles.pic1} />
        <Image source={require('../assets/logo1.png')} style={styles.pic1} />
        <Image source={require('../assets/logo3.png')} style={styles.pic1} />
      </View>
      <Text
        style={{
          textAlign: 'center',
          color: '#1A1A1A',
          fontSize: 12,
          marginBottom: 15,
        }}>
        Doesn"t have an account ?{' '}
        <Text style={{fontSize: 12, color: '#AA1D1E', fontWeight: 'bold'}}
        onPress={()=> props.navigation.navigate('SUPhone',{})}                            
        >
          Sign Up 
        </Text>
      </Text>
    </View>
   </ScrollView>
  );
};

const styles = StyleSheet.create({
  pic1: {
    marginTop: 26,
    marginBottom: 28,
    borderRadius: 22,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: 'grey',
  },
  pic: {
    width: 250,
    height: 200,
    marginLeft: 5,
    marginRight: 8,
    borderRadius: 20,
  },
  head: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 24,
    color: '#1A1A1A',
    paddingBottom: 6,
    paddingTop: 17,
    fontWeight: 'bold',
  },
  light: {
    textAlign: 'center',
    fontSize: 12,
    paddingHorizontal: 30,
    color: '#999999',
  },
  input: {
    fontSize: 12,
    textAlign: 'left',
    borderWidth: 1,
    borderColor: '#E6E6E6',
    borderRadius: 30,
    marginTop: 27,
    marginHorizontal: 30,
    marginBottom: 12,
    paddingLeft: 10,
  },
  pass: {
    textAlign: 'left',
    fontSize: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    borderRadius: 30,
    marginHorizontal: 30,
  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#AA1D1E',
    marginTop: 10,
    marginHorizontal: 30,
    padding: 15,
    borderRadius: 30,
  },
  guest: {
    textAlign: 'center',
    fontSize: 10,
    color: '#999999',
    marginBottom: 20,
    marginTop: 15,
  },
  pn: {
    textAlign: 'center',
    color: '#1A1A1A',
    fontSize: 10,
    marginBottom: 5
    ,
  },
});

export default Login;
