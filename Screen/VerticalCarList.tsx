// import {
//   Image,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   FlatList,
//   ScrollView,
// } from 'react-native';
// import React from 'react';
// import {fonts} from '../src/Constants/fonts';
// import Cars from '../components/Cars';

// const VerticalCarList = (props: any) => {
//   const Car = [
//     {
//       id: 1,
//       url: require('../assets/car10.jpg'),
//       model: 'MG ZS 2021 Model',
//       price: '₹ 15.88 lakhs',
//       btn: (
//         <TouchableOpacity style={styles.bidback}>
//           <Text style={styles.bid}>Bid Now</Text>
//         </TouchableOpacity>
//       ),
//       btn2: (
//         <TouchableOpacity style={styles.buyback}>
//           <Text style={styles.buynow}>Buy Now</Text>
//         </TouchableOpacity>
//       ),
//     },
//     {
//       id: 2,
//       url: require('../assets/car5.jpg'),
//       model: 'BMW X1 2019 Model',
//       price: '₹ 29.50 lakhs',
//       btn: (
//         <TouchableOpacity style={styles.bidback}>
//           <Text style={styles.bid}>Bid Now</Text>
//         </TouchableOpacity>
//       ),
//       btn2: (
//         <TouchableOpacity style={styles.buyback}>
//           <Text style={styles.buynow}>Buy Now</Text>
//         </TouchableOpacity>
//       ),
//     },
//     {
//       id: 3,
//       url: require('../assets/car15.jpg'),
//       model: 'Honda Amaze 2020 Model',
//       price: '₹ 6.50 lakhs',
//       btn: (
//         <TouchableOpacity
//           style={styles.bidback}>

//           <Text style={styles.bid}>Bid Now </Text>

//         </TouchableOpacity>
//       ),
//       btn2: (
//         <TouchableOpacity
//           style={styles.buyback}
//         >
//           <Text style={styles.buynow}>Buy Now</Text>
//         </TouchableOpacity>
//       ),
//     },
//     {
//       id: 4,
//       url: require('../assets/car11.webp'),
//       model: 'Honda Civic 2022 Model',
//       price: '₹ 16.50 lakhs',
//       btn: (
//         <TouchableOpacity
//           style={styles.bidback}
//         >
//           <Text style={styles.bid}>Bid Now</Text>
//         </TouchableOpacity>
//       ),
//       btn2: (
//         <TouchableOpacity
//           style={styles.buyback}
//          >
//           <Text style={styles.buynow}>Buy Now</Text>
//         </TouchableOpacity>
//       ),
//     },
//     {
//       id: 5,
//       url: require('../assets/car6.jpg'),
//       model: 'Mahindra KUV 3OO 2023 Model',
//       price: '₹ 10.70 lakhs',
//       btn: (
//         <TouchableOpacity
//           style={styles.bidback}
//         >
//           <Text style={styles.bid}>Bid Now</Text>
//         </TouchableOpacity>
//       ),
//       btn2: (
//         <TouchableOpacity
//           style={styles.buyback}
//          >
//           <Text style={styles.buynow}>Buy Now</Text>
//         </TouchableOpacity>
//       ),
//     },
//     {
//       id: 6,
//       url: require('../assets/car15.jpg'),
//       model: 'Toyata Innova Crysta 2020 Model',
//       price: '₹ 16.70 lakhs',
//       btn: (
//         <TouchableOpacity
//           style={styles.bidback}
//          >
//           <Text style={styles.bid}>Bid Now</Text>
//         </TouchableOpacity>
//       ),
//       btn2: (
//         <TouchableOpacity
//           style={styles.buyback}
//          >
//           <Text style={styles.buynow}>Buy Now</Text>
//         </TouchableOpacity>
//       ),
//     },
//   ];
//   return (
//       <ScrollView showsVerticalScrollIndicator={false}>
//     <View
//       style={{
//         flex: 1,
//         backgroundColor: '#FFFFFF',
//         paddingTop: 48,
//         paddingLeft: 24,
//         paddingRight: 24,
//       }}>
//         <View onTouchStart={() => props.navigation.navigate('WatchList', {})}>
//           <Image
//             source={require('../assets/arrowleft.png')}
//             style={styles.arrow}
//           />
//         </View>

//         <View style={styles.loc}>
//           <Image source={require('../assets/locver.png')} />
//           <Text style={styles.chd}>Chandigarh</Text>
//         </View>
//         <View>
//           <TouchableOpacity
//             style={{
//               borderWidth: 1,
//               borderColor: '#DADADA',
//               borderRadius: 125,
//               borderCurve: 'circular',
//               width: 240,
//               flexDirection: 'row',
//             }}>
//             <Text style={styles.searchbar}>Search Cars, Categories</Text>
//             <Image
//               source={require('../assets/search.png')}
//               style={styles.search}
//             />
//           </TouchableOpacity>
//         </View>
//         <View style={{flexDirection: 'row', paddingTop: 19}}>
//           <Text style={styles.filterlist}> Filter </Text>
//           <Text style={styles.filterlist}> Price </Text>
//           <Text style={styles.filterlist}> Brand </Text>
//           <Text style={styles.filterlist}> Model </Text>
//           <Text style={styles.filterlist}> Year </Text>
//         </View>
//         <Cars data={Car} />
//     </View>
//     </ScrollView>
//   );
// };

// export default VerticalCarList;

// const styles = StyleSheet.create({
//   filterlist: {
//     fontSize: 12,
//     paddingRight: 40,
//     color: '#1A1A1A',
//     borderCurve: 'circular',
//     borderRadius: 13,
//   },

//   bidback: {
//     backgroundColor: '#999999',
//     borderRadius: 100,
//     width: 67,
//     height: 20,
//     marginTop: 9,
//     marginBottom: 11,
//   },
//   bid: {
//     color: '#FFFFFF',
//     textAlign: 'center',
//     fontSize: 10,
//     padding: 2,
//   },
//   buyback: {
//     backgroundColor: '#AA1D1E',
//     borderRadius: 100,
//     marginLeft: 10,
//     width: 67,
//     height: 20,
//     marginTop: 9,
//     marginBottom: 11,
//   },
//   buynow: {
//     color: '#FFFFFF',
//     textAlign: 'center',
//     fontSize: 10,
//     padding: 2,
//   },
//   arrow: {
//     marginBottom: 18,
//   },
//   loc: {
//     marginBottom: 12,
//     flexDirection: 'row',
//   },
//   chd: {
//     marginLeft: 5,
//     fontFamily: fonts.SEMI,
//     fontSize: 15,
//     color: '#1A1A1A',
//   },
//   searchbar: {
//     fontSize: 14,
//     paddingLeft: 10,
//     paddingBottom: 15,
//     paddingTop: 18,
//     color: '#DADADA',
//   },
//   search: {
//     marginLeft: 35,
//     marginVertical: 20,
//   },

//   car2: {
//     width: 160,
//     height: 147,
//     borderRadius: 20,
//   },
//   carprice: {
//     color: '#AA1D1E',
//     fontSize: 12,
//     fontWeight: 'bold',
//   },
// });

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
import Cars from '../components/Cars';

const VerticalCarList = (props: any) => {
  const Car = [
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
      model: 'Mahindra KUV 3OO 2023 Model',
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
      model: 'Toyata Innova Crysta 2020 Model',
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
        <View onTouchStart={() => props.navigation.navigate('WatchList', {})}>
          <Image
            source={require('../assets/arrowleft.png')}
            style={styles.arrow}
          />
        </View>

        <View style={styles.loc}>
          <Image source={require('../assets/locver.png')} />
          <Text style={styles.chd}>Chandigarh</Text>
        </View>
        <View style={{flexDirection:"row"}}>
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
           <View onTouchStart={() => props.navigation.navigate('HorizontalCarList', {})}>
        
          <Image source={require('../assets/4.png')}
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
        <Cars data={Car} />
        </ScrollView>
        </View>
  );
};

export default VerticalCarList;

const styles = StyleSheet.create({
  filterlist: {
    fontSize: 12,
    padding: 10,
    marginRight: 15,
    color: '#1A1A1A',
    borderWidth: 1,
    borderRadius: 13,
    borderColor:'#EBEBEB'
  },

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
  arrow: {
    marginBottom: 18,
  },
  loc: {
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
