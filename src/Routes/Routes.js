import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationStrings from '../constants/navigationStrings';
import { Explore, Feeds, Home, Profile } from '../Screens';


const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{presentation:'modal'}}
        initialRouteName={navigationStrings.HOME}>
        <Stack.Screen options={{title:'My home'}} name={navigationStrings.HOME} component={Home} />
        {/* <Stack.Screen name={navigationStrings.Feeds} component={Feeds} /> */}
        <Stack.Screen name={navigationStrings.PROFILE} component={Profile} />
        <Stack.Screen name={navigationStrings.EXPLORE} component={Explore} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;