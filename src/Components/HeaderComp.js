import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

/**
 * @author
 * @function
 **/
export const HeaderComp = ({goBack, 
text,
navigation

}) => {
  return (
    <View style={{flexDirection:'row', higth:32,justifyContent:'space-between'}}>
      <TouchableOpacity onPress={!!goBack ? goBack: () => goBack()}>
        <Text>GoBack</Text>
        <Text>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};
