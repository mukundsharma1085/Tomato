import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


/**
* @author
* @function App
**/
export const App = (props) => {

const { container } = styles
 return(
  <View style={container}>
    <Text>App</Text>
  </View>
  )
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
  }
})