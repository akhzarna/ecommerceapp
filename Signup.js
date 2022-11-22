import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image ,TextInput, Button} from 'react-native';

export default function Signup({route,navigation}) {
  return (
    <View style={{flex:1 ,backgroundColor:'white'}}>

     <View style={{flex:0.25,alignItems:'center',justifyContent:'center'}}>
      <Image style={{width:100,height:100, backgroundColor:'grey'}}
          source={require('./assets/logo.png')}
          />
          <Text style={{alignItems:'center',justifyContent:'center'}}>registration form</Text>
       </View>


       <View style={{flex:0.5,alignItems:'center',justifyContent:'center'}}>

        <Text style={{alignItems:'left',justifyContent:'left',marginleft:50}}>Name</Text>

        <TextInput style={{width:140, height:30, backgroundColor:'lightgrey',marginBottom:20,marginTop:20}}
        placeholder=" Complete name"
        />


        <Text style={{alignItems:'left',justifyContent:'left',marginleft:50}}>Registration Number</Text>

        <TextInput style={{width:140, height:30, backgroundColor:'lightgrey',marginBottom:20,marginTop:20}}
        placeholder=" FA**-***-*"
        />
        <Text style={{alignItems:'left',justifyContent:'left',marginleft:50}}>Phone Number</Text>

        <TextInput style={{width:140, height:30, backgroundColor:'lightgrey',marginBottom:20,marginTop:20}}
        placeholder=" +92 3*********"
        />

        </View>
        <View style={{flex:0.25,alignItems:'center',justifyContent:'center'}}>
        <Button style={{width:100, height:40, backgroundColor:'lightblue',marginBottom:20,alignItems:'center',justifyContent:'center'}}
      title="Register" 
      onPress={()=> navigation.navigate('Login')}> 
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
