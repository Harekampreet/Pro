import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Button from '../components/Button'

const PlaceBid = (props:any) => {
  return (
    <View>
   
     <Button title={'Place Bid'}
             onPress={()=> props.navigation.navigate('',{})}

     />

    </View>
  )
}

export default PlaceBid

const styles = StyleSheet.create({})