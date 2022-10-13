import { View, Text, Button } from 'react-native'
import React from 'react'
import navigationStrings from '../../constants/navigationStrings'
export default function HomeScreen({navigation}) {
  const goToScreen = () =>{
    navigation.push(navigationStrings.EXPLORE, 
      {title:'Welocome to Home'})
  }
  return (
    <View>

      <Text>HomeScreen</Text>
      <Button title='Go to detail screen '
        onPress={goToScreen}
      />
      <Button 
        onPress={ () => navigation.navigate(navigationStrings.PROFILE, {title:'111'})}
        title='Go to Profile'
      />
    </View>
  )
}