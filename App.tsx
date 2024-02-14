


// import {View, Text, SafeAreaView, ScrollView} from 'react-native';
// import React from 'react';
// import Splash from './Screen/splash';
// import Language from './Screen/Language';
// import Login from './Screen/Login';
// import ForgotPass from './Screen/ForgotPass';
// import ResetPass from './Screen/ResetPass';
// import SUPhone from './Screen/SUPhone';
// import SUEmail from './Screen/SUEmail';
// import Otpp from './Screen/Otpp';
// import Otpe from './Screen/Otpe';
// import Profile from './Screen/Profile';
// import WatchList from './Screen/WatchList';
// import VerticalCarList from './Screen/VerticalCarList';

// const App = () => {
//   return (







//   // <VerticalCarList/>

// //<WatchList/> 
// //  <Profile />
//    //  <Otpe/>
// // {/* <Otpp/> */}



//   //  <SUEmail/>
// //  <SUPhone/>  
// /* <Language/> */

     
//     // <ResetPass/>
//     //<ForgotPass/>
//    // <SafeAreaView>
//    //    <ScrollView>
//     //    <Login />
//     //   </ScrollView>
//                // </SafeAreaView>
//   );
// };

// export default App;
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './HomeStack/Navigation';

const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;




