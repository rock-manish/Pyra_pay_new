import React, { Component } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  SafeAreaView, 
  refs 
} from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      pin1 : "",
      pin2 : "",
      pin3 : "",
      pin4 : ""
    }
  }
  componentDidMount = () => {
    this.refs.pin1ref.focus()
  }

  // 2 1 - -

  render() {
    const { pin1, pin2, pin3, pin4 } = this.state
    return (
      <View style={{ flex: 1 ,backgroundColor:"darkgyan"}}>
      <View style={{flex:1,marginTop:30}}>
        <Text style={{
          textAlign:"center",
          marginTop:110,
          fontSize:25,
          fontWeight:"900",
          color:"#BF40BF",
          }}>
          Verify your Mobile number
        </Text>
        <Text style={{ 
          marginTop:10, 
          fontSize:18, 
          color:"100", 
          marginLeft:20,
          justifyContent:"center",
          textAlign:"center",
          }}>
          please check your messages and enter the verification code we just sent you +911234567890
        </Text>
        <Text style={{
          marginTop:20,
          fontSize:25,
          color:"#BF40BF",
          justifyContent:"center",
          alignSelf:"center",
          fontWeight:"900"
        }}>
          Enter Code Here
        </Text>
      </View>
      
        <View style={{
          flex: 0.6,
          justifyContent: "space-evenly",
          flexDirection: "row",
          marginTop:120,
          
        }}>
        
          <TextInput
            ref={"pin1ref"}
             onChangeText={(pin1)=> {
              this.setState({ pin1 : pin1 })
               if(pin1 != ""){
                this.refs.pin2ref.focus()
               }
              }}
             value={pin1}
             maxLength={1}
            style={{
              backgroundColor: "#f5f4f2",
              fontWeight: "600",
              alignSelf: "center",
              fontSize: 20,
              height: 55,
              width: "10%",
              border: 10,
              borderWidth: 0.5,
              borderColor: "grey",
              textAlign:"center"
            }}
          />
          <TextInput
            ref={"pin2ref"}
            onChangeText={(pin2)=> { 
             this.setState({ pin2 : pin2 })
               if(pin2 != ""){
                this.refs.pin2ref.focus()
               }
             }}
             value={pin2}
             maxLength={1}
            style={{
              backgroundColor: "#f5f4f2",
              fontWeight: "600",
              alignSelf: "center",
              fontSize: 20,
              height: 55,
              width: "10%",
              border: 10,
              borderWidth: 0.5,
              borderColor: "grey",
              textAlign:"center",
            }}
          />
          <TextInput
            ref={"pin3ref"}
            onChangeText={(pin3)=> {
              this.setState({ pin3 : pin3 })
              if(pin3 != ""){
                 this.refs.pin3ref.focus()
               }
              }}
             value={pin3}
             maxLength={1}
            style={{
              backgroundColor: "#f5f4f2",
              fontWeight: "600",
              alignSelf: "center",
              fontSize: 20,
              height: 55,
              width: "10%",
              border: 10,
              borderWidth: 0.5,
              borderColor: "grey",
              textAlign:"center",

            }}
          />
          <TextInput
          onChangeText={(pin4)=> {
            this.setState({ pin4 : pin4 })
            if(pin4 != ""){
                this.refs.pin4ref.focus()
                alert("Thanks")
               }
            }}
             value={pin4}
             maxLength={1}
            ref={"pin4ref"}
            style={{
              backgroundColor: "#f5f4f2",
              fontWeight: "600",
              alignSelf: "center",
              fontSize: 20,
              height: 55,
              width: "10%",
              border: 10,
              borderWidth: 0.5,
              borderColor: "grey",
              justifyContent:"center",
              alignItems:"center",
              alignContent:"center",
              textAlign:"center"
            }}
          />
          </View>
        <View style={{
          marginBottom:10
          }}>
          <Text style={{
            fontSize:18,
            paddingBottom:10,
            justifyContent:"center",
            alignSelf:"center",
            color:"black",
            fontWeight:"bold"    
          }}>
            Didn't you receive any code?
          </Text>
          <Text style={{
            fontSize:20,
            color:"#BF40BF",
            fontWeight:"900",
            marginBottom:0,
            justifyContent:"center",
            alignSelf:"center",
            }}>
           Resend
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={()=> {
            console.log("click here")
          }}>
          <Text style={{
            fontSize:20,
            borderRadius:20,
            paddingHorizontal:10,
            paddingVertical:10,
            marginBottom:200,
            justifyContent:"center",
            alignSelf:"center",
            color:"black",
            backgroundColor:"#BF40BF"         
          }}>
          Continue
          </Text>
          </TouchableOpacity>
        </View>
        </View>
    )
  }
}