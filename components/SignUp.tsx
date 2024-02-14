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
  import React from 'react';
  import Button from '../components/Button';
  type SignUpProps = {
    title1: string;
    title2: string;
    onPress: any;
    props:any
  };
const SignUp =  ({title1, title2, onPress,props}: SignUpProps) => {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex: 1}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{flex: 1, flexDirection: 'row', paddingTop: 60}}>
              <Image source={require('../assets/car2.jpg')} style={styles.pic} />
              <Image source={require('../assets/car3.jpg')} style={styles.pic} />
              <Image source={require('../assets/car5.jpg')} style={styles.pic} />
              <Image
                source={require('../assets/car11.webp')}
                style={styles.pic}
              />
  
              <Image source={require('../assets/car13.jpg')} style={styles.pic} />
            </View>
          </ScrollView>
  
          <Text style={styles.head}>Sign Up</Text>
          <Text style={styles.light}>Let's Create Your Account</Text>
  
          <TextInput
            style={styles.input}
            placeholderTextColor={'#999999'}
            placeholder={title1}
          />
          <TextInput
            style={styles.pass}
            placeholderTextColor={'#999999'}
            placeholder="Password"
          />
          <TextInput
            style={styles.pass}
            placeholder=" Confirm Password"
            placeholderTextColor={'#999999'}
          />
  
          <Button
            title={'Sign Up'}
            onPress={onPress}
          />
  
          <Text style={styles.afbut}>{title2}</Text>
  
          <Text
            style={{
              textAlign: 'center',
              color: '#1A1A1A',
              fontSize: 12,
              paddingTop: 25,
            }}>
            Already have an account ?
            <Text
              style={{color: '#AA1D1E', fontWeight: 'bold', paddingBottom: 15}}>
              Log In 
            </Text>
          </Text>
        </View>
      </ScrollView>
    );
  };
  
  export default SignUp;
  
  const styles = StyleSheet.create({
    afbut: {
      marginTop: 16,
      color: '#1A1A1A',
      fontSize: 14,
      textAlign: 'center',
      marginBottom: 80,
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
      fontSize: 14,
      paddingHorizontal: 30,
      color: '#999999',
    },
    input: {
      color: '#999999',
      fontSize: 12,
      padding: 10,
      borderWidth: 1,
      borderColor: '#E6E6E6',
      borderRadius: 30,
      marginTop: 15,
      marginHorizontal: 30,
    },
    pass: {
      color: '#999999',
      fontSize: 12,
      padding: 10,
      borderWidth: 1,
      borderColor: '#E6E6E6',
      borderRadius: 30,
      marginTop: 12,
      marginHorizontal: 30,
    },
    btn: {
      alignItems: 'center',
      backgroundColor: '#AA1D1E',
      marginTop: 15,
      marginHorizontal: 30,
      padding: 10,
      borderRadius: 30,
    },
  });
  