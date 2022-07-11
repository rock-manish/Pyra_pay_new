import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList,
    ScrollView,
    LogBox,
  } from 'react-native';
  import React from 'react';
  import {TextInput} from 'react-native-gesture-handler';
  
  const Screen2 = ({navigation}) => {
    React.useEffect(() => {
      LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, []);
  
    const promo = [
      {
        id: 1,
        title: 'HYTFR123',
        desc: "Lorem Ipsum is a dummy or placeholder text. It's often used in laying out print, infographics, or web design.",
      },
      {
        id: 2,
        title: 'HIJKLM098',
        desc: "Lorem Ipsum is a dummy or placeholder text. It's often used in laying out print, infographics, or web design.",
      },
      {
        id: 3,
        title: 'PKLMNH876',
        desc: "Lorem Ipsum is a dummy or placeholder text. It's often used in laying out print, infographics, or web design.",
      },
      {
        id: 4,
        title: 'QSCVG654',
        desc: "Lorem Ipsum is a dummy or placeholder text. It's often used in laying out print, infographics, or web design.",
      },
      {
        id: 5,
        title: 'WDVBH987',
        desc: "Lorem Ipsum is a dummy or placeholder text. It's often used in laying out print, infographics, or web design.",
      },
    ];
  
    const renderFlatList = item => {
      return (
        <View style={styles.listView}>
          <Text style={styles.listTitle}>{item.title}</Text>
          <Text style={styles.listDesc}>{item.desc}</Text>
        </View>
      );
    };
    return (
      <ScrollView>
        <View style={styles.container1}>
          <View>
            <Text style={styles.label}>Recharge For Jio Mobile</Text>
            <Text style={styles.inputLabel}>9925736985</Text>
          </View>
          <View>
            <Text style={styles.label}>Amount</Text>
            <Text style={styles.inputLabel}>$75</Text>
          </View>
        </View>
  
        <View style={styles.container2}>
          <View>
            <TextInput
              style={styles.textInput2}
              placeholder="Enter Promocode"></TextInput>
          </View>
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.button2Text}>Apply</Text>
          </TouchableOpacity>
        </View>
  
        <Text style={styles.offer}>Offers</Text>
  
        <View style={styles.container3}>
          <FlatList
            data={promo}
            renderItem={({item}) => renderFlatList(item)}></FlatList>
        </View>
  
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => {
              navigation.navigate('Recharge3');
            }}>
            <Text style={styles.submitText}>Proceed To Pay $75</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    container1: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: '5%',
    },
    label: {
      fontSize: 22,
      color: 'grey',
      // marginTop:"5%"
    },
    inputLabel: {
      fontSize: 22,
      color: '#e05a00',
    },
    container2: {
      marginTop: '5%',
      paddingBottom: 2,
      borderBottomWidth: 0.8,
      borderBottomColor: 'grey',
      marginHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    textInput2: {
      width: '100%',
      fontSize: 18,
    },
    button2: {
      height: 40,
      width: 105,
      backgroundColor: '#BF40BF',
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button2Text: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
    offer: {
      fontSize: 22,
      fontWeight: 'bold',
      color: 'black',
      marginLeft: '5%',
      marginTop: 10,
    },
    container3: {
      marginHorizontal: 20,
    },
    listView: {
      marginTop: 15,
      padding: 5,
      borderWidth: 0.8,
      borderRadius: 5,
      borderColor: '#a6a6a6',
      borderBottomWidth: 2,
    },
    listTitle: {
      fontSize: 22,
      color: 'black',
    },
    listDesc: {
      fontSize: 17,
      color: '#a6a6a6',
      marginTop: 3,
    },
    buttonContainer: {
      alignItems: 'center',
      marginTop: '7%',
      marginBottom: '7%',
    },
    submitButton: {
      height: 60,
      width: '60%',
    //   borderWidth: 1,
      elevation:40,
      backgroundColor: '#BF40Bf',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    submitText: {
      fontSize: 22,
      color: 'white',
      fontWeight: 'bold',
    },
  });
  
  export default Screen2;