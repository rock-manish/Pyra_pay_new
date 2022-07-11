import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NativeBaseProvider, Text, Box } from 'native-base';

import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import Otp from '../screens/Otp';
import HomeScreen from '../screens/HomeScreen';
import DMTone from '../screens/DMTone';
import Aeps from '../screens/Aeps';
import MatmSecond from '../screens/MatmSecond';
import Reacharge from '../screens/Reacharge';
import Recharge2 from '../screens/Recharge2';
import ChoosePayment from '../screens/ChoosePayment';
import ChooseCard from '../screens/ChooseCard';
import Sucessfull from '../screens/Sucessfull';





const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
     {/* <Stack.Screen name="Onboarding" component={OnboardingScreen} /> */}
      {/* <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} /> 
      <Stack.Screen name="DMTone" component={DMTone} />
      <Stack.Screen name="Otp" component={Otp} />
      <Stack.Screen name="Aeps" component={Aeps} />
      <Stack.Screen name="MatmSecond" component={MatmSecond} />
      <Stack.Screen name="Reacharge" component={Reacharge} />
      <Stack.Screen name="Recharge2" component={Recharge2} />  */}
     <Stack.Screen name="ChoosePayment" component={ChoosePayment} />
     {/* <Stack.Screen name="ChooseCard" component={ChooseCard} />
     <Stack.Screen name="Sucessfull" component={Sucessfull} /> */}



    </Stack.Navigator>
  );
};

export default AuthStack;
