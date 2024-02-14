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

type CarsProps = {
  data: any;
};

const Cars = ({data}: CarsProps, props: any) => {
  return (
    <View style={{marginTop: 27}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={data}
        renderItem={({item}) => (
          <View>
            <Image source={item.url} style={styles.car2} />
            <View style={{paddingRight: 35}}>
              <Text style={styles.carname}>{item.model}</Text>
              <Text style={styles.carprice}>{item?.price}</Text>

              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('Language', {})}>
                  {item.btn}
                </TouchableOpacity>

                <TouchableOpacity>{item.btn2}</TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Cars;

const styles = StyleSheet.create({
  bidback: {
    backgroundColor: '#999999',
    borderRadius: 100,
    width: 67,
    height: 20,
    marginTop: 9,
    marginBottom: 11,
  },
  bid: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 10,
    padding: 2,
  },
  buyback: {
    backgroundColor: '#AA1D1E',
    borderRadius: 100,
    marginLeft: 10,
    width: 67,
    height: 20,
    marginTop: 9,
    marginBottom: 11,
  },
  buynow: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 10,
    padding: 2,
  },
  carname: {
    color: '#000000',
    fontSize: 12,
    paddingTop: 5,
    paddingBottom: 3,
    fontWeight: '600',
  },
  carprice: {
    color: '#AA1D1E',
    fontSize: 12,
    fontWeight: 'bold',
  },
  car2: {
    width: 160,
    height: 147,
    borderRadius: 20,
  },
});
