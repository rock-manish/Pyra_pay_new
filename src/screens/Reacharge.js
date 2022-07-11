import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
  import CheckBox from '@react-native-community/checkbox';
  import {SelectCountry} from 'react-native-element-dropdown';
  import RadioButtonRN from 'radio-buttons-react-native';
  
  const MobileRecharge = ({navigation}) => {
    const [operator, setOperator] = React.useState('1');
    const [isSelected, setSelection] = React.useState(false);
  
    const local_data = [
      {
        value: '1',
        lable: 'Jio',
        image: {
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Reliance_Jio_Logo_%28October_2015%29.svg/1125px-Reliance_Jio_Logo_%28October_2015%29.svg.png',
        },
      },
      {
        value: '2',
        lable: 'Airtel',
        image: {
          uri: 'https://png.pngitem.com/pimgs/s/463-4634181_airtel-png-icon-free-download-searchpng-transparent-png.png',
        },
      },
      {
        value: '3',
        lable: 'Vodafone',
        image: {
          uri: 'https://www.freepnglogos.com/uploads/vodafone-png-logo/free-vodafone-logos-20.png',
        },
      },
      {
        value: '4',
        lable: 'Idea',
        image: {
          uri: 'https://upload.wikimedia.org/wikipedia/hi/4/48/Idea_Cellular_Logo.svg.png',
        },
      },
      {
        value: '5',
        lable: 'Vodafone Idea',
        image: {
          uri: 'https://upload.wikimedia.org/wikipedia/en/e/e3/Vodafone_Idea_logo.png',
        },
      },
    ];
   
    const data = [
      {
        label: 'Prepaid',
      },
      {
        label: 'Postpaid',
      },
    ];
  
    return (
      <View>
          <RadioButtonRN
            data={data}
            selectedBtn={e => console.log(e)}
            style={{marginLeft:"2%",marginTop:"2%"}}
            textStyle={styles.radioText}
            box={false}
            activeColor="#BF40BF"
          />
  
        <View style={styles.inputSection}>
          <Text 
          keyboardType='numeric'
          style={styles.label}>Mobile Number</Text>
          <TextInput 
          maxLength={10}
           keyboardType="numeric"
          style={styles.textInput}></TextInput>
  
          <Text style={styles.label}>Select Operator</Text>
          <SelectCountry
            style={styles.textInput}
            selectedTextStyle={styles.selectedTextStyle}
            placeholderStyle={styles.placeholderStyle}
            imageStyle={styles.imageStyle}
            iconStyle={styles.iconStyle}
            maxHeight={200}
            value={operator}
            data={local_data}
            valueField="value"
            labelField="lable"
            imageField="image"
            placeholder="Select operator"
            onChange={e => {
              setOperator(e.value);
            }}
          />
  
          <Text style={styles.label}>Amount</Text>
          <TextInput 
          keyboardType='numeric'
          style={styles.textInput}></TextInput>
  
          <TextInput
            style={[styles.textInput, {marginTop: 30}]}
            placeholder="Have Promocode?"
            placeholderTextColor="#BF40BF"></TextInput>
  
          <View style={styles.checkboxConatiner}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
              tintColors={{true: '#BF40BF', false: 'grey'}}
            />
            <Text style={styles.checkboxText}>I agree to all T&C from</Text>
            <Text style={styles.pyrapay}> Pyra Pay</Text>
          </View>
        </View>
  
        <View style={styles.buttonContainer}>
          <TouchableOpacity
          
            style={styles.button}
            // disabled={isSelected ? false :true}
            onPress={() => {
              isSelected
                ? navigation.navigate('Recharge2')
                : alert('Please agree to all T&C');
            }}>
            <Text style={styles.buttonText}>Proceed To Recharge</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    radioText: {
      fontSize: 22,
      color: 'black',
    },
    inputSection: {
      marginLeft: '5%',
      marginTop: '3%',
    },
    label: {
      fontSize: 20,
      color: 'grey',
      marginTop: '5%',
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#D3D3D3',
      marginRight: '5%',
      marginTop: '2%',
      borderRadius: 5,
      borderBottomWidth: 2,
      height: 50,
      paddingHorizontal: 10,
    },
    imageStyle: {
      width: 24,
      height: 24,
    },
    placeholderStyle: {
      fontSize: 20,
    },
    selectedTextStyle: {
      fontSize: 20,
      marginLeft: 8,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    checkboxConatiner: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: '5%',
    },
    checkboxText: {
      fontSize: 20,
      color: 'black',
    },
    pyrapay: {
      fontSize: 20,
      color: '#BF40BF',
    },
    buttonContainer: {
      alignItems: 'center',
      marginTop: '7%',
    },
    button: {
      height: 60,
      width: '60%',
      borderWidth: 1,
      backgroundColor: '#BF40BF',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    buttonText: {
      fontSize: 22,
      color: 'white',
      fontWeight: 'bold',
    },
    radioGroup: {
      // flexDirection: 'row',
      // justifyContent: 'space-around',
  
      // marginTop:"-5%"
    },
  });
  
  export default MobileRecharge;