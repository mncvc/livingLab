import React,{useState} from "react";
import { View, 
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  
} from "react-native";

import userDataStorage from "../utils/useDataStorage";


const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;


export default function Login2() {

const [id, setId] = useState('');
const [pwd,setPwd] = useState('');
const [errCount, setErrCount] = useState(0);

const [state,setState] = useState('')

const login = () =>{
 
  if(id === 'user1'){
    if(pwd === '1234'){
      setErrCount(0);
      userDataStorage.set('auth',id).catch(console.error)
      userDataStorage.get('auth').then(setState).catch(console.error);
      console.log("Auth : "+ state);
      

    }else{
      Alert.alert("비밀번호 틀렸씁");
      setErrCount(errCount+1);  
    }

  }else{
    Alert.alert('아이디 틀렸슴');
    setErrCount(errCount+1);
  }



}


return(
  <SafeAreaView style={styles.container}>
     
    <View style = {styles.section}>
      


    <View style = {[styles.section2]}>
        <TextInput style = {styles.input_txt} placeholder="아이디" 
          onChangeText={(t => setId(t))}
          value = {id} 
          ></TextInput>
        <TextInput style = {styles.input_txt}
          placeholder="비밀번호"
          secureTextEntry
          onChangeText={t => setPwd(t)}
          value = {pwd}
        ></TextInput>

    </View>

    <View style = {styles.section2}>

      <TouchableOpacity style ={styles.login_btn} onPress = {()=>{login()}}>
        <Text style = {styles.login_btn_txt}>로그인</Text>
      </TouchableOpacity>
      <View style={styles.service}>
      
        <Text style={styles.service_txt} onPress = {()=> {Alert.alert('아이디찾기', '아이디찾기')}}>아이디 찾기</Text>
        <Text style={styles.service_txt} onPress = {()=> {Alert.alert('비밀번호 찾기', '비밀번호찾기')}}>비밀번호 찾기</Text>
        <Text style={styles.service_txt} onPress = {()=> {Alert.alert('Msg', '회원가입')}}>회원가입</Text>
        
      </View>


    </View>
    <View style = {styles.section2}>
      <Text>소셜 로그인 버튼 </Text>
    </View>

    </View>
    

  </SafeAreaView>
)
}




const styles = StyleSheet.create({

container:{
  width:W,
  height:H,
  flex: 1,
  backgroundColor:'#eee',
  flexDirection:'row',

},
section:{
  marginTop:60,
  marginRight: 30,
  marginLeft:30,
  flex:1,
  flexDirection:'column',
  backgroundColor:'#dedede'
},

section2:{
  width:'100%',
  marginTop:10,

},

input_txt:{
  height: 50,
  margin: 10,
  borderBottomWidth:1,
},
login_btn:{ 
  borderWidth:1, 
  height: 50,
  borderRadius:4,
  backgroundColor:'#1133dd',
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center'
},
login_btn_txt:{
  fontSize:24,
  color:'white'
},
service:{ 
  marginTop:25,
  flexDirection:'row',
  justifyContent:'space-around',
  paddingRight:40,
  paddingLeft:40,
  paddingBottom:4,
},
service_txt:{
  color:'#0000ff',
}

})


