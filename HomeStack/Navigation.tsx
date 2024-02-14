import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../Screen/Login.tsx';
import Language from "../Screen/Language.tsx";
import Splash from '../Screen/splash.tsx';
import WatchList from '../Screen/WatchList.tsx';
import SUPhone from '../Screen/SUPhone.tsx';
import ForgotPass from '../Screen/ForgotPass.tsx';
import VerticalCarList from '../Screen/VerticalCarList.tsx';
import PlaceBid from '../Screen/PlaceBid.tsx';
import HorizontalCarList from '../Screen/HorizontalCarList.tsx';
import OrderConfirm from '../Screen/OrderConfirm.tsx';
import Otpe from '../Screen/Otpe.tsx';
import ResetPass from '../Screen/ResetPass.tsx';
import ProfileSet from '../Screen/ProfileSet.tsx';
import Profile from '../Screen/Profile.tsx';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <Stack.Navigator 
    screenOptions={{headerShown:false}}
    > 
      <Stack.Screen name="Splash" component={Splash}/>
      <Stack.Screen name="Language" component={Language} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name='WatchList' component={WatchList}/>
      <Stack.Screen name='SUPhone' component={SUPhone}/>
      <Stack.Screen name='ForgotPass' component={ForgotPass}/>
      <Stack.Screen name='VerticalCarList' component={VerticalCarList}/>
      <Stack.Screen name='PlaceBid' component={PlaceBid}/>
      <Stack.Screen name='HorizontalCarList' component={HorizontalCarList}/>
      <Stack.Screen name="OrderConfirm" component={OrderConfirm}/>
      <Stack.Screen name="Otpe" component={Otpe}/>
      <Stack.Screen name="ResetPass" component={ResetPass}/>
      <Stack.Screen name="ProfileSet" component={ProfileSet}/>
      <Stack.Screen name="Profile" component={Profile}/>
    </Stack.Navigator>
  );
};
export default Navigation;