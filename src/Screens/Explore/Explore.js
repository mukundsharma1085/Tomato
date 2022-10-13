import { View, Text,Button } from 'react-native'
import React from 'react'
import navigationStrings from '../../constants/navigationStrings'

export default function Explore({navigation}) {
  const goToScreen =() =>{
    navigation.popToTop()
  }
  return (
    <View>
      <Text>hello </Text>
      <Button title='Go to Home screen '
        onPress={goToScreen}
      /> 
      <Button title='Go to Profile screen '
        onPress={() => navigation.navigate(navigationStrings.PROFILE,{title:'Kya bhai'})}
      />
    </View>
  )
}