import React from "react";
import { View,
StyleSheet,
Dimensions,
Image,
Text,


} from "react-native";


const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

const url = '../../assets/Splash02'

export default function Splash(){

  return(
    <View style= {styles.container}>
      <Image source={require('/Volumes/MOSAIC/App/livingLab/assets/splash02.png')} style = {{position:'relative',width:'100%', height:H}}/>
     <View style={styles.box}>
      <Text style={{fontSize:30, textAlign:'center', textAlignVertical:'center', fontWeight:'500',letterSpacing:6,color:'#d2f' }}>어플이름 </Text>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
container:{
 justifyContent:'center',
 alignItems:'center'

},
box:{
  width:300,
  height:100,
  position:'absolute',
  top:'25%',
  
},




})
