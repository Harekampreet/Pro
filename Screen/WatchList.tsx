import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  Touchable,
  TouchableOpacity,
  ScrollViewComponent,
} from 'react-native';
import React from 'react';
import { assets } from '../react-native.config';

const WatchList = (props: any) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{flex: 1}}>
        <View style={styles.pic1}>
          <Image
            source={require('../assets/Loc.png')}
            style={{height: 30, width: 25}}></Image>
          <View
            style={{flexDirection: 'column', marginLeft: 8, marginRight: 9}}>
            <Text style={{height: 15}}>hii</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{height: 19}}>Sector36 Chandigarh</Text>
              <Image
                source={require('../assets/LocArrow.png')}
                style={styles.arrow}
              />
            </View>
          </View>

          <Image source={require('../assets/notif.png')} style={styles.notif} />
        </View>
        <View style={styles.pic2}>
          <Image
            source={require('../assets/person1.png')}
            style={{height: 55, width: 55}}></Image>
          <View
            style={{flexDirection: 'column', marginLeft: 15, marginRight: 9}}>
            <Text style={{color: '#666666', fontSize: 14}}>Greetings</Text>
            <Text style={styles.text}>How Can we Help ? </Text>
          </View>
        </View>

        <View>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: '#DADADA',
              borderRadius: 14,
              marginHorizontal: 23,
              height: 55,
              width: 329,
              flexDirection: 'row',
            }}
            onPress={() => props.navigation.navigate('VerticalCarList',{})}
            >
            <Text style={styles.searchbar}>Search Vehicles</Text>
            <Image
              source={require('../assets/search.png')}
              style={styles.search}
            />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#AA1D1E',
              borderRadius: 12,
              marginHorizontal: 23,
              width: 60,
              height: 60,
              marginTop: 27,
            }}>
            <Text
              style={{color: '#FFFFFF', textAlign: 'center', marginTop: 20}}>
              All
            </Text>
          </TouchableOpacity>
          <Image
            source={require('../assets/logotes.png')}
            style={styles.pics}
          />
          <Image
            source={require('../assets/bmwlogo.png')}
            style={styles.pics}
          />
          <Image source={require('../assets/logomg.png')} style={styles.pics} />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              marginTop: 30,
              color: '#000000',
              fontSize: 16,
              fontWeight: 'bold',
              marginLeft: 23,
            }}>
            Watch List
          </Text>
          <Text
            style={{
              marginTop: 33,
              color: '#AA1D1E',
              fontSize: 11,
              fontWeight: 'bold',
              marginLeft: 227,
            }}>
            See All
          </Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection: 'row', marginTop: 23}}>
            <View style={{backgroundColor: '#FAFAFA'}}>
              <Image
                source={require('../assets/car10.jpg')}
                style={styles.car2}
              />
              <Image source={require('../assets/fav.png')} style={styles.fav} />
              <Text
                style={{
                  color: '#000000',
                  fontSize: 14,
                  marginTop: 28,
                  marginLeft: 35,
                  marginBottom: 7,
                  fontWeight: '600',
                }}>
                MG ZS 2021 Model
              </Text>
              <Text
                style={{
                  color: '#AA1D1E',
                  fontSize: 14,
                  fontWeight: 'bold',
                  marginLeft: 35,
                }}>
                ₹ 9.88 lakhs
              </Text>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#999999',
                    borderRadius: 100,
                    marginLeft: 35,
                    width: 83,
                    height: 28,
                    marginTop: 17,
                    marginBottom: 11,
                  }}>
                  <Text
                    style={{
                      color: '#FFFFFF',
                      textAlign: 'center',
                      fontSize: 12,
                      marginTop: 5,
                      marginBottom: 4,
                    }}>
                    Bid Now
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#AA1D1E',
                    borderRadius: 100,
                    marginLeft: 10,
                    width: 83,
                    height: 28,
                    marginTop: 17,
                    marginBottom: 11,
                  }}>
                  <Text
                    style={{
                      color: '#FFFFFF',
                      textAlign: 'center',
                      fontSize: 12,
                      marginTop: 5,
                      marginBottom: 4,
                    }}>
                    Buy Now
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{backgroundColor: '#FAFAFA'}}>
              <Image
                source={require('../assets/car5.jpg')}
                style={styles.car2}
              />
              <Image source={require('../assets/fav.png')} style={styles.fav} />
              <Text
                style={{
                  color: '#000000',
                  fontSize: 14,
                  marginTop: 28,
                  marginLeft: 35,
                  marginBottom: 7,
                  fontWeight: '600',
                }}>
                BMW X1 2019 Model
              </Text>
              <Text
                style={{
                  color: '#AA1D1E',
                  fontSize: 14,
                  fontWeight: 'bold',
                  marginLeft: 35,
                }}>
                ₹ 29.50 lakhs
              </Text>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#999999',
                    borderRadius: 100,
                    marginLeft: 35,
                    width: 83,
                    height: 28,
                    marginTop: 17,
                    marginBottom: 11,
                  }}>
                  <Text
                    style={{
                      color: '#FFFFFF',
                      textAlign: 'center',
                      fontSize: 12,
                      marginTop: 5,
                      marginBottom: 4,
                    }}>
                    Bid Now
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default WatchList;

const styles = StyleSheet.create({
  fav: {
    position: 'absolute',
    marginLeft: 240,
    marginTop: 10,
  },
  car2: {
    width: 260,
    height: 237,
    marginLeft: 33,
    marginRight: 25,
    borderRadius: 20,
  },
  pic1: {
    marginLeft: 23,
    marginTop: 49,
    flexDirection: 'row',
  },
  arrow: {
    marginLeft: 9,
    marginTop: 8,
  },
  notif: {
    marginLeft: 125,
    height: 20,
    width: 20,
    paddingLeft: 23,
  },
  pic2: {
    marginLeft: 23,
    marginTop: 31,
    flexDirection: 'row',
    marginBottom: 13,
  },
  text: {
    fontSize: 20,
    marginTop: 4,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 18,
  },
  searchbar: {
    fontSize: 14,
    paddingLeft: 16,
    paddingBottom: 15,
    paddingTop: 18,
  },
  search: {
    marginLeft: 183,
    marginTop: 18,
  },
  pics: {
    marginTop: 28,
    alignItems: 'center',
    marginRight: 28,
  },
});
