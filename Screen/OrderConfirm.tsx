import {Image, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';
import Button from '../components/Button';

const OrderConfirm = (props: any) => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF', alignItems: 'center'}}>
      <Image source={require('../assets/order.png')} style={styles.pic} />
      <Text style={styles.order}>Order Confirmed</Text>
      <Text style={styles.para}>
        Payment is the transfer of money services in exchange product or
        payments
      </Text>
      <View>
      <TouchableOpacity style={styles.btn}>
        <Text style={{color: '#1A1A1A', fontWeight: 'bold', fontSize: 14,paddingTop:15,paddingBottom:14}}>
         Get Your Reciept
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderConfirm;

const styles = StyleSheet.create({
  pic: {
    height: 193,
    width: 193,
    marginTop: 166,
  },
  order: {
    paddingTop: 46,
    fontWeight: 'bold',
    fontSize: 22,
    color: '#272727',
    textAlign: 'center',
  },
  para: {
    textAlign: 'center',
    color: '#7F7F7F',
    fontSize: 14,
    marginTop: 9,
    lineHeight: 23,
    paddingBottom: 46,
    paddingHorizontal: 37,
  },
  btn: {
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal:111 ,
    borderRadius: 23,
    borderWidth:1,
    borderColor:"#999999"
  },
});
