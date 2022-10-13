import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Routes from './src/Routes/Routes'

/**
* @author
* @function App
**/
const App = (props) => {

const { container } = styles
 return(
  <View style={container}>
    <Routes />
  </View>
  )
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
    justifyContent:'center',
    // alignContent:'center',
    // alignItems:'center'
  }
})

export default App;