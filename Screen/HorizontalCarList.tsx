import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import {fonts} from '../src/Constants/fonts';
import CarHorizontal from '../components/CarHorizontal';

const HorizontalCarList = (props: any) => {
  const CarH = [
    {
      id: 1,
      url: require('../assets/car10.jpg'),
      model: 'MG ZS 2021 Model',
      price: '₹ 15.88 lakhs',
      btn: (
        <TouchableOpacity style={styles.bidback}>
          <Text style={styles.bid}>Bid Now</Text>
        </TouchableOpacity>
      ),
      btn2: (
        <TouchableOpacity style={styles.buyback}>
          <Text style={styles.buynow}>Buy Now</Text>
        </TouchableOpacity>
      ),
    },
    {
      id: 2,
      url: require('../assets/car5.jpg'),
      model: 'BMW X1 2019 Model',
      price: '₹ 29.50 lakhs',
      btn: (
        <TouchableOpacity style={styles.bidback}>
          <Text style={styles.bid}>Bid Now</Text>
        </TouchableOpacity>
      ),
      btn2: (
        <TouchableOpacity style={styles.buyback}>
          <Text style={styles.buynow}>Buy Now</Text>
        </TouchableOpacity>
      ),
    },
    {
      id: 3,
      url: require('../assets/car15.jpg'),
      model: 'Honda Amaze 2020 Model',
      price: '₹ 6.50 lakhs',
      btn: (
        <TouchableOpacity style={styles.bidback}>
          <Text style={styles.bid}>Bid Now</Text>
        </TouchableOpacity>
      ),
      btn2: (
        <TouchableOpacity style={styles.buyback}>
          <Text style={styles.buynow}>Buy Now</Text>
        </TouchableOpacity>
      ),
    },
    {
      id: 4,
      url: require('../assets/car11.webp'),
      model: 'Honda Civic 2022 Model',
      price: '₹ 16.50 lakhs',
      btn: (
        <TouchableOpacity style={styles.bidback}>
          <Text style={styles.bid}>Bid Now</Text>
        </TouchableOpacity>
      ),
      btn2: (
        <TouchableOpacity style={styles.buyback}>
          <Text style={styles.buynow}>Buy Now</Text>
        </TouchableOpacity>
      ),
    },
    {
      id: 5,
      url: require('../assets/car6.jpg'),
      model: 'KUV 3OO 2023 Model',
      price: '₹ 10.70 lakhs',
      btn: (
        <TouchableOpacity style={styles.bidback}>
          <Text style={styles.bid}>Bid Now</Text>
        </TouchableOpacity>
      ),
      btn2: (
        <TouchableOpacity style={styles.buyback}>
          <Text style={styles.buynow}>Buy Now</Text>
        </TouchableOpacity>
      ),
    },
    {
      id: 6,
      url: require('../assets/car15.jpg'),
      model: ' Toyata Innova 2020 Model',
      price: '₹ 16.70 lakhs',
      btn: (
        <TouchableOpacity style={styles.bidback}>
          <Text style={styles.bid}>Bid Now</Text>
        </TouchableOpacity>
      ),
      btn2: (
        <TouchableOpacity style={styles.buyback}>
          <Text style={styles.buynow}>Buy Now</Text>
        </TouchableOpacity>
      ),
    },
  ];
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: 48,
        paddingLeft: 24,
        paddingRight: 24,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View onTouchStart={() => props.navigation.navigate('VerticalCarList', {})}>
          <Image
            source={require('../assets/arrowleft.png')}
            style={styles.arrow}
          />
        </View>

        <View style={styles.loc}>
          <Image source={require('../assets/locver.png')} />
          <Text style={styles.chd}>Chandigarh</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity
            style={{
                borderWidth: 1,
                borderColor: '#DADADA',
                borderRadius: 25,
               height:38,
                width: 255,
                flexDirection: 'row',
            }}>
            <Text style={styles.searchbar}>Search Cars, Categories</Text>
            <Image
              source={require('../assets/search.png')}
              style={styles.search}
            />
          </TouchableOpacity>
          <View onTouchStart={() => props.navigation.navigate('VerticalCarList', {})}>
        
        <Image source={require('../assets/4L.png')}
        style={{width:25,height:19,marginTop:9,marginLeft:12}}/></View>
         <View onTouchStart={() => props.navigation.navigate('ProfileSet', {})}>
      
        <Image source={require('../assets/4R.png')}
        style={{width:25,height:25,marginTop:6,marginLeft:10}}/>
        </View>
        </View>
        <View style={{flexDirection: 'row', paddingTop: 19}}>
          <Text style={styles.filterlist}> Filter </Text>
          <Text style={styles.filterlist}> Price </Text>
          <Text style={styles.filterlist}> Brand </Text>
          <Text style={styles.filterlist}> Model </Text>
          <Text style={styles.filterlist}> Year </Text>
        </View>
        <CarHorizontal data={CarH} />
      </ScrollView>
    </View>
  );
};

export default HorizontalCarList;

const styles = StyleSheet.create({
  filterlist: {
    fontSize: 12,
    padding: 10,
    marginRight: 15,
    color: '#1A1A1A',
    borderWidth: 1,
    borderRadius: 13,
    borderColor: '#EBEBEB',
  },

  bidback: {
    borderRadius: 30,
    backgroundColor: '#999999',
    marginLeft: 20,
    width:67,
    height:20
    
  },
  bid: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 10,
    padding: 2,
  },
  buyback: {
    borderRadius: 30,
    backgroundColor: '#AA1D1E',
    marginLeft: 20,
    marginBottom: 10,
    marginTop:5,
    width:67,
    height:20

  },
  buynow: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 10,
    padding: 2,
  },
  arrow: {
    marginBottom: 18,
  },
  loc:{
    marginBottom: 12,
    flexDirection: 'row',
  },
  chd: {
    marginLeft: 5,
    fontFamily: fonts.SEMI,
    fontSize: 15,
    color: '#1A1A1A',
  },
  searchbar: {
    fontSize: 14,
    paddingLeft: 19,
   textAlignVertical:"center",
    color: '#DADADA',
  },
  search: {
    marginLeft: 55,
    marginTop:11
  },
  car2: {
    width: 160,
    height: 147,
    borderRadius: 20,
  },
  carprice: {
    color: '#AA1D1E',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
