import {StyleSheet, Text, View, SafeAreaView,TouchableOpacity} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import { Touchable } from 'react-native';
import { TouchableOpacityBase } from 'react-native';

const DMTone = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#CBE6EF'}}>
      <View>
        <Text style={{marginTop:30,marginBottom:10,fontSize:20,color:'bold',margin:20}}>search Remitter</Text>
      </View>

      <TextInput 
      keyboardType="numeric"
      style={{borderBottomWidth:1,paddingHorizontal:2,margin:20,fontSize:18}}
      placeholder="Enter Remitter Number" />
      <TouchableOpacity 
      style={{backgroundColor:"#BF40BF",margin:20,paddingHorizontal:10,paddingVertical:8}}>
        <Text style={{fontSize:20,color:"white"}}>search</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DMTone;

const styles = StyleSheet.create({});
