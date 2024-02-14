import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import OTP from '../components/OTP';
import Button from '../components/Button';

const Otpe = (props: any) => {
  return (
    <View>
      <OTP
        title1={'Check Email for OTP'}
        title2={
          'Please check your email account and click the "verify link inside"'
        }
        onPress={() => props.navigation.navigate('ResetPass', {})}
        props={undefined}
      />
    </View>
  );
};

export default Otpe;
