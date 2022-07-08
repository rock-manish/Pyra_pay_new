import * as React from 'react';
import {
  View,
  useWindowDimensions,
  Touchable,
  TouchableOpacity,
  Text,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TabView, SceneMap} from 'react-native-tab-view';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const FirstRoute = () => (
  <SafeAreaView style={{flex: 1, backgroundColor: '#CBE6EF'}}>
    <View
      style={{
        height: 150,
        backgroundColor: 'white',
        elevation: 500,
        marginTop: 200,
      }}>
      {/* <FontAwesome5 name="user-tie" size={33} /> */}
      <TextInput
        keyboardType="numeric"
        style={{
          fontSize: 20,
          borderWidth: 1,
          marginBottom: 15,
          paddingHorizontal: 15,
          paddingVertical: 15,
          margin: 10,
          borderRadius: 5,
        }}
        placeholder="Enter Mobile Number"
      />

      <TouchableOpacity
        style={{
          backgroundColor: '#BF40BF',
          height: 40,
          justifyContent: 'center',
          margin: 10,
        }}>
        <Text style={{fontSize: 20, alignSelf: 'center', color: 'white'}}>
          CONTINUE
        </Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);

const SecondRoute = () => (
  <SafeAreaView style={{flex: 1, backgroundColor: '#CBE6EF'}}>
    <View
      style={{
        height: 250,
        backgroundColor: 'white',
        elevation: 500,
        marginTop: 200,
      }}>
      {/* <FontAwesome5 name="user-tie" size={33} /> */}
      <TextInput
        keyboardType="numeric"
        style={{
          fontSize: 20,
          borderWidth: 1,
          marginBottom: 15,
          paddingHorizontal: 15,
          paddingVertical: 15,
          margin: 10,
          borderRadius: 5,
        }}
        placeholder="Enter Mobile Number"
      />

      <TextInput
        keyboardType="numeric"
        style={{
          fontSize: 20,
          borderWidth: 1,
          marginBottom: 15,
          paddingHorizontal: 15,
          paddingVertical: 15,
          margin: 10,
          borderRadius: 5,
        }}
        placeholder="Enter Withdraw Ammount"
      />

      <TouchableOpacity
        style={{
          backgroundColor: '#BF40BF',
          height: 40,
          justifyContent: 'center',
          margin: 10,
        }}>
        <Text style={{fontSize: 20, alignSelf: 'center', color: 'white'}}>
          CONTINUE
        </Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'BALANCE ENGUIRY'},
    {key: 'second', title: 'CASH WITHDROWAL'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
}
