import React from 'react';
import {View,Text, StyleSheet} from 'react-native';

export default function MyAccountScreen(){
    return(
        <View style={styles.container}>
             <Text>My Account screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
     container: {
          flex:1,
          alignItems: 'center',
          justifyContent: 'center',
     }
})