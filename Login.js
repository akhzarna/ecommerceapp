import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image , onpress, TouchableOpacity,TextInput,Alert, Button} from 'react-native';

export default function Login({route, navigation}) {
  return (
    <View style={{flex:1 ,backgroundColor:'white'}}>

     <View style={{flex:0.25,alignItems:'center',justifyContent:'center'}}>
      <Image style={{width:100,height:100, backgroundColor:'grey'}}
          source={require('./assets/logo.png')}
          />
          <Text style={{alignItems:'center',justifyContent:'center'}}>Login Page</Text>
       </View>


       <View style={{flex:0.5,alignItems:'center',justifyContent:'center'}}>

        <Text style={{alignItems:'left',justifyContent:'left',marginBottom:10}}>UserName</Text>

        <TextInput style={{width:140, height:30, backgroundColor:'lightgrey',marginBottom:20,marginTop:20}}
        placeholder=" ******@***"
        />
        <Text style={{alignItems:'left',justifyContent:'left',marginBottom:10}}>Password</Text>

        <TextInput style={{width:140, height:30, backgroundColor:'lightgrey',marginBottom:20,marginTop:20}}
        placeholder=" ********"
        />
        </View>
        <View style={{flex:0.25,alignItems:'center',justifyContent:'center'}}>
        <Button style={{width:100, height:40, backgroundColor:'lightblue',marginBottom:20,alignItems:'center',justifyContent:'center'}}
      title="Login"
      onPress={()=>navigation.navigate('Menu')}>
      </Button>

        </View>
      
   </View>
       

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});