import React,{useState,useEffect} from 'react';
import { SafeAreaView,
   ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';

const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

export default function Home(){



return(
<SafeAreaView style= {styles.container}>
  <View style= {styles.header}></View>
  <View style = {styles.profile}></View>

</SafeAreaView>

)
}

const styles = StyleSheet.create({
container:{
  width:W,
  height:H,
  alignItems:'center'
},
header:{
  width:W,
  height: '23%',
  borderBottomWidth:2,
  backgroundColor:'#eee',
  borderBottomLeftRadius:20,
  borderBottomRightRadius:20
},
profile:{
  width:150,
  height:150,
  borderRadius:'100%',
  backgroundColor:'#ed2',
  top:-60
}

})




