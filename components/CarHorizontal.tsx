import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';

type CarHorizontalProps = {
  data: any;
};

const CarHorizontal = ({data}: CarHorizontalProps, props: any) => {
  return (
    <View >
        <View style={styles.mainView}>
      <FlatList
        // showsVerticalScrollIndicator={false}
        // numColumns={1}
        data={data}
        renderItem={({item}) => (
          <View style={styles.itemView}>
            <Image source={item.url} style={styles.car2} />
            <View style={styles.textView}>
              <Text style={styles.carname}>{item.model}</Text>
              <Text style={styles.carprice}>{item?.price}</Text>
            </View>

            <View style={styles.btnView}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Language', {})}>
                {item.btn2}
              </TouchableOpacity>

              <TouchableOpacity>{item.btn}</TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
    </View>
  );
};

export default CarHorizontal;

const styles = StyleSheet.create({
    mainView:{
        flex:1,
        flexWrap:'wrap'
    },
    itemView:{
        flexDirection:'row',
        paddingTop:20,
    },
  carname: {
    color: '#000000',
    fontSize: 12,
    paddingTop: 15,
    // paddingBottom: 3,
    fontWeight: 'bold',
    width:100
  },
  carprice: {
    color: '#AA1D1E',
    fontSize: 12,
    paddingTop: 6,
    fontWeight: 'bold',
  },
  car2: {
    width: 88,
    height: 61,
    borderRadius: 20,
  },
  textView: {
    // paddingBottom: 30,
    paddingLeft: 12,
  },
  btnView: {
    marginLeft: 32,
    flexDirection: 'column',
    width: 100,

  },
});
