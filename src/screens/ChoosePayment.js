import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Screen3 = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardText}>Credit Card</Text>
        <Icon name="arrow-forward-circle" size={20} color="#e05a00" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardText}>Debit Card</Text>
        <Icon name="arrow-forward-circle" size={20} color="#e05a00" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardText}>Net Banking</Text>
        <Icon name="arrow-forward-circle" size={20} color="#e05a00" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardText}>UPI (Google pay/Phone pay/Pyra pay)</Text>
        <Icon name="arrow-forward-circle" size={20} color="#e05a00" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardText}>Digital Payment Wallet</Text>
        <Icon name="arrow-forward-circle" size={20} color="#e05a00" />
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {navigation.navigate('Choose Card');}}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 50,
    borderWidth: 0.8,
    borderColor: '#a6a6a6',
    borderBottomWidth: 2,
    backgroundColor: 'white',
    borderRadius: 5,
    margin: 10,
    marginBottom: 0,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardText: {
    fontSize: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: '7%',
    marginBottom: '7%',
  },
  button: {
    height: 60,
    // width:"100%",
    width: 250,
    borderWidth: 1,
    backgroundColor: '#000080',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Screen3;