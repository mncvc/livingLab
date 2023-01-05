import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity

    
} from "react-native";

const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;



export default function Login(){


  return(
    <View style = {styles.container}>
      
      <View style={styles.logo}>
        <Text style = {styles.title}>LOGO</Text>  
      </View>      

      <View style = {styles.section}>
        <TextInput style ={styles.textBox} placeholder="user,email"></TextInput>
        <TextInput style ={styles.textBox} placeholder="password"></TextInput>
      </View>

    <View style = {[styles.section,{marginTop: 30}]}>     
      <View style ={styles.textBox} />
      <View style = {styles.textBox}/>
      <View style ={styles.textBox} />
      <View style = {styles.textBox}/>
    </View>

    <View style = {styles.section}>
      <TouchableOpacity style = {[styles.textBox,{backgroundColor:'blue'}]}><Text>로그인</Text></TouchableOpacity>
    </View>


    </View>
  )

}



const styles = StyleSheet.create({
  container:{
    width: W,
    height: H,
    backgroundColor:'#aaee9f',
    alignItems:'center',
    
  },

  logo:{    
    marginTop:80,
    marginBottom: 30
    
  },
  title:{
    fontWeight:'bold',
    fontSize:36,
    letterSpacing:5,
    textShadowColor:10

  },
  section:{
    width: W- 80,
    position:'relative',
    alignItems:'center',
    borderWidth: 2,
    marginBottom:10

  },
  textBox:{
    width: 240, 
    height: 35, 
    borderWidth:1, 
    borderRadius:8, 
    marginTop : 20,
    paddingLeft:10
  }



})




