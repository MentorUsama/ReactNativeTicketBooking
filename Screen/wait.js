import React from 'react';
import { Text, View, ImageBackground,ActivityIndicator } from 'react-native';

function Wait() {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground style={{ flex: 1, resizeMode: "cover", justifyContent: "center", backgroundColor: 'black' }} source={require('../assets/Images/background.jpg')} >
                <View style={{backgroundColor:'rgba(0, 0, 0, 0.575)',flex:1,justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator  size="large"  color="white"/>
                    <Text style={{color:'white',fontSize:20}}>waiting....</Text>
                </View>
            </ImageBackground>
        </View>
    )
}
export default Wait;