import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

import OTPTextView from 'react-native-otp-textinput';
import Button from './Button';
type OTPProps = {
    title1: string;
    title2: string;
    onPress: any;
    props:any
  };
const OTP =  ({title1, title2, onPress,props}: OTPProps) => {
  return (
    <View style={{ flexDirection: 'column'}}>
      <View style={styles.pic}>
        <Image source={require('../assets/otp.png')} />
      </View>
      <Text style={styles.fp}>{title1}</Text>
      <Text style={styles.para}>
      {title2}

      </Text>

      <View>
        <OTPTextView
          containerStyle={{paddingHorizontal: 50, paddingBottom: 25}}
          textInputStyle={{
            borderWidth: 1,
            borderRadius: 50,
            borderColor: 'white',
          }}
        />
      </View>
      <Button
        title={'Continue'}
        onPress={onPress}
      />
      <Text
        style={{
          textAlign: 'center',
          color: '#999999',
          fontSize: 12,
          paddingTop: 16,
          paddingBottom: 9,
        }}>
        Didn't get the code
      </Text>
      <Text style={{textAlign: 'center', color: '#AA1D1E', fontSize: 14}}>
        Resend
      </Text>
    </View>
  );
};

export default OTP;

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
    paddingBottom: 39,
  },
});
