import { StyleSheet, Text, View,ScrollView,Image } from 'react-native'
import React from 'react'

const Images = () => {
  return (
    <View>
      <ScrollView horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <View style={{ flex: 1, flexDirection: 'row', paddingTop: 60 }}>
            <Image
                source={require('../assets/car2.jpg')}
                style={styles.pic}
            />
            <Image
                source={require('../assets/car3.jpg')}
                style={styles.pic}
            />
            <Image
                source={require('../assets/car5.jpg')}
                style={styles.pic} />
            <Image
                source={require('../assets/car11.webp')}
                style={styles.pic} />

            <Image
                source={require('../assets/car13.jpg')}
                style={styles.pic}
            />
        </View>
    </ScrollView>

    </View>
  )
}

export default Images

const styles = StyleSheet.create({
    pic: {
        width: 250,
        height: 200,
        marginLeft: 5,
        marginRight: 8,
        borderRadius: 20
    }
})