import {View, Text, Button} from 'react-native';
import React from 'react';
import {HeaderComp} from '../../Components/HeaderComp';

export default function Profile({navigation, route}) {
  console.log('routes', route.params.title);
  const {title} = route.params;
  // const {key} = route.key
  return (
    <View>
      <HeaderComp goBack={() => 
        navigation.goBack()} 
        text="dgdgdgdgdg"
        navigation= {navigation} 
      />
      <Text>Profile</Text>
      <Text>This is params data: {title}</Text>
      {/* <Text>{key}</Text> */}
      <Button title="Go to Home screen " onPress={() => navigation.goBack()} />
    </View>
  );
}
