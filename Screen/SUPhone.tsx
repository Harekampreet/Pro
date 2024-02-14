import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SignUp from '../components/SignUp'

const SUPhone = (props:any) => {
  return (
    <View>
   <SignUp 
        title1={'Phone Number'}
        title2={'Sign Up with Email'} 
        onPress={() => props.navigation.navigate('Otpe', {})}
        props={undefined}
        />
    </View>
  )
}

export default SUPhone

const styles = StyleSheet.create({})