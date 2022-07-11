import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Screen5 = ({navigation}) => {
  return (
    <View>
      <View style={styles.container1}>
        <Icon name="checkmark-circle-sharp" size={100} color="green"></Icon>
        <Text style={styles.heading}>Transaction Successful</Text>
        <Text style={styles.date}>July 11,2022</Text>
      </View>

      <View style={styles.txnInfo}>
        <View>
          <Text style={styles.label}>Transaction ID</Text>
          <Text style={styles.info}>D12365478901478</Text>
        </View>

        <TouchableOpacity style={styles.touch}>
          <Text style={styles.copy}>Copy</Text>
          <Icon
            name="copy"
            size={22}
            color="#000080"
            style={{marginTop: 8}}></Icon>
        </TouchableOpacity>
      </View>

      <View style={styles.txnInfo}>
        <View>
          <Text style={styles.label}>Mobile Recharge</Text>
          <Text style={styles.extra}>992578936</Text>
          <Text style={styles.info}>Jio/Delhi</Text>
        </View>

        <Text style={styles.rightInfo}>$35.00</Text>
      </View>

      <View style={styles.txnInfo}>
        <View>
          <Text style={styles.label}>Debited from</Text>
          <Text style={styles.extra}>xxxxxxxx1710</Text>
          <Text style={styles.info}>Bank of Baroda</Text>
        </View>

        <Text style={styles.rightInfo}>$35.00</Text>
      </View>

      <View style={styles.submitConatiner}>
        <TouchableOpacity 
            style={styles.submitButton} 
            onPress={() => navigation.navigate("Mobile Recharge")}>
            <Text style={styles.submitText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Screen5;

const styles = StyleSheet.create({
  container1: {
    alignItems: 'center',
    marginTop: '20%',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  date: {
    fontSize: 20,
    color: 'grey',
  },
  txnInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
    marginTop: '7%',
  },
  label: {
    fontSize: 20,
    color: 'grey',
  },
  info: {
    fontSize: 20,
    color: 'black',
  },
  touch: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  copy: {
    fontSize: 25,
    color: '#000080',
    fontWeight: 'bold',
    marginRight: 5,
  },
  extra: {
    fontSize:15,
    color:"black"
  },
  rightInfo: {
    fontSize: 25,
    color: 'black',
  },
  submitConatiner: {
    alignItems:"center",
    marginTop:"7%",
    marginBottom:"7%"
  },
  submitButton: {
    height:60,
    // width:"100%",
    width:250,
    borderWidth:1,
    backgroundColor:"#000080",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:10
  },
  submitText: {
    fontSize:22,
    color:"white",
    fontWeight:"bold"
  }
});