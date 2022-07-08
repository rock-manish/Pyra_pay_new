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
import MatmSecond from '../screens/MatmSecond'



const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
     {/* <Stack.Screen name="Onboarding" component={OnboardingScreen} /> */}
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} /> 
      <Stack.Screen name="DMTone" component={DMTone} />
      <Stack.Screen name="Otp" component={Otp} />
      {/* <Stack.Screen name="Aeps" component={Aeps} /> */}
      <Stack.Screen name="MatmSecond" component={MatmSecond} />


    </Stack.Navigator>
  );
};

export default AuthStack;
