import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function Account() {
  return (
    <View style={{flex: 1, backgroundColor: 'silver'}}>
      <View
        style={{
          backgroundColor: 'white',
          marginTop: 10,
          height: 250,
          width: 390,
          borderRadius: 15,
          marginLeft: 11,
          elevation: 40,
        }}>
        <View
          style={{
            alignContent: 'center',
            borderRadius: 30,
            marginLeft: 15,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'darkcyan',
              marginTop: 10,
            }}>
            USER INFO
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            color: 'white',
            paddingTop: 22,
            width: 350,
            marginLeft: 20,
          }}>
          <FontAwesome5 name="user-tie" size={33} />
          <Text
            style={{
              fontSize: 25,
              fontWeight: '900',
              paddingBottom: 3,
              marginTop: 5,
              marginLeft: 15,
              color: 'bold',
            }}>
            MANISH SHARMA
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '900',
              paddingBottom: 3,
              marginTop: 10,
              marginLeft: 15,
              color: 'darkblue',
            }}>
            SILVER
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            color: 'white',
            paddingTop: 25,
            borderBottomWidth: 1,
            width: 350,
            marginLeft: 20,
          }}>
          <FontAwesome5 name="user-clock" size={37} />
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              paddingBottom: 3,
              marginLeft: 15,
            }}>
            Agent Id
          </Text>

          <Text
            style={{
              fontSize: 20,
              fontWeight: '900',
              paddingBottom: 10,
              marginLeft: 35,
              color: 'skyblue',
            }}>
            5.0
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            color: 'white',
            paddingTop: 25,
            width: 300,
            marginLeft: 23,
          }}>
          <Entypo name="mobile" size={37} />
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginLeft: 15,
            }}>
            Mobile
          </Text>

          <Text
            style={{
              fontSize: 20,
              fontWeight: '900',
              paddingBottom: 70,
              marginLeft: 35,
              color: 'skyblue',
            }}>
            7678506288
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: 'white',
          marginTop: 10,
          height: 250,
          width: 390,
          borderRadius: 15,
          marginLeft: 11,
          elevation: 40,
        }}>
        <View
          style={{
            alignContent: 'center',
            borderRadius: 30,
            marginLeft: 15,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'darkcyan',
              marginTop: 10,
            }}>
            SECURITY & SETTING
          </Text>
        </View>

        <View
          style={{
            borderBottomWidth: 1,
            flexDirection: 'row',
            color: 'white',
            paddingTop: 20,
            width: 350,
            marginLeft: 20,
          }}>
          <MaterialIcons name="send-to-mobile" size={37} />
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              paddingBottom: 3,
              marginTop: 5,
              marginLeft: 15,
            }}>
            Generate T-PIN
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            color: 'white',
            paddingTop: 28,
            borderBottomWidth: 1,
            width: 350,
            marginLeft: 20,
          }}>
          <Entypo name="lock" size={37} />
          <TouchableOpacity onPress={'click me'}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                paddingBottom: 10,
                marginLeft: 15,
              }}>
              Change Password
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            color: 'white',
            paddingTop: 20,
            width: 300,
            marginLeft: 23,
          }}>
          <MaterialIcons name="fingerprint" size={37} />
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginLeft: 15,
            }}>
            Biometric
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: 'white',
          marginTop: 10,
          height: 80,
          width: 390,
          borderRadius: 15,
          marginLeft: 11,
          elevation: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            color: 'white',
            paddingTop: 20,
            width: 300,
            marginLeft: 23,
          }}>
          <FontAwesome5 name="user-plus" size={37} />
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginLeft: 15,
            }}>
            Self Help
          </Text>
        </View>
      </View>
    </View>
  );
}
export default Account;
