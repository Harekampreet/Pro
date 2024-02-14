import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

type buttonProps = {
  title: string;
  onPress: any;
};

const Button = ({title, onPress}: buttonProps) => {
  return (
    <View>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={{color: '#FFFFFF', fontWeight: 'bold', fontSize: 14}}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    backgroundColor: '#AA1D1E',
    marginTop: 15,
    marginHorizontal: 40,
    padding: 15,
    borderRadius: 30,
  },
});

export default Button;
