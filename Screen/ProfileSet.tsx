import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
  } from 'react-native';
  import React from 'react';
  const ProfileSet = (props: any) => {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.mainView}>
          <View>
            <Text style={style.prflSet}>Profile Setup</Text>
          </View>
          <View style={style.prflSetImgView}>
            <Image
              style={style.prflSetImg}
              source={require('../assets/person1.png')}
            />
          </View>
          <View style={style.inputText}>
            <TextInput style={style.email} placeholder="User Type" />
          </View>
          <View style={style.inputText1}>
            <TextInput style={style.email} placeholder="First Name" />
          </View>
          <View style={style.inputText1}>
            <TextInput style={style.email} placeholder="Last Name" />
          </View>
          <View style={style.inputText1}>
            <TextInput style={style.email} placeholder="Email" />
          </View>
          <View style={style.inputText1}>
            <TextInput style={style.email} placeholder="Phone Number" />
          </View>
          <View style={style.inputText1}>
            <TextInput
              style={style.email}
              placeholder="VAT Registration Number"
            />
          </View>
          <View style={style.uploadViewMain}>
            <View style={style.uploadView}>
              <Image
                style={style.uploadImg}
                source={require('../assets/4.png')}
              />
              <View>
                <Text style={style.uploadDoc}>Upload Document</Text>
              </View>
            </View>
          </View>
          <View>
            <TouchableOpacity style={style.tch_btn}>
              <Text
                style={style.logn_btn}
                onPress={() => props.navigation.navigate('Profile', {})}>
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  };
  export default ProfileSet;
  const style = StyleSheet.create({
    mainView: {
      flex: 1,
      paddingTop: 20,
      paddingLeft: 20,
      paddingRight: 20,
      backgroundColor: '#FFFFFF',
    },
    prflSet: {
      fontSize: 16,
      textAlign: 'center',
      color: 'black',
      fontWeight: 'bold',
    },
    prflSetImgView: {
      alignItems: 'center',
      paddingTop: 10,
    },
    prflSetImg: {
      width: 80,
      height: 86,
    },
    inputText: {
      paddingTop: 30,
    },
    email: {
      paddingLeft: 25,
      color: '#DADADA',
      fontSize: 12,
      padding: 10,
      borderCurve: 'circular',
      borderColor: '#DADADA',
      borderRadius: 25,
      borderWidth: 1,
    },
    inputText1: {
      paddingTop: 10,
    },
    tch_btn: {
      padding: 15,
      borderRadius: 50,
      backgroundColor: '#AA1D1E',
    },
    logn_btn: {
      textAlign: 'center',
      color: 'white',
    },
    uploadViewMain: {
      paddingBottom: 70,
      paddingTop: 20,
    },
    uploadImg: {
      width: 29,
      height: 20,
    },
    uploadView: {
      padding: 20,
      backgroundColor: '#F6E8E8',
      alignItems: 'center',
      borderColor: '#F6E8E8',
      borderRadius: 10,
    },
    uploadDoc: {
      paddingTop: 10,
    },
  });
  
  
  
  
  
  