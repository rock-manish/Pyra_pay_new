import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator ,} from '@react-navigation/stack';

import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';
import HomeScreen from './src/screens/HomeScreen';

function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>

    
      {/* <AppStack /> */}
      <AuthStack />

    </NavigationContainer>
  );
}



// export default function MyStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="Notifications" component={Notifications} />
//       <Stack.Screen name="Profile" component={Profile} />
//       <Stack.Screen name="Settings" component={Settings} />
//     </Stack.Navigator>
//   );
// }
export default App;
