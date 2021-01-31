import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
// Icon
import Icon from 'react-native-vector-icons/Ionicons';
// Styles
import { GlobalBackgroundColors, GlobalBackgroundTextColors, globalShadowBox } from '../../../Styles/global';

/**
 * 
 * In Home screen we will use this as a link to another screen
 * {*iconName,*title,*onPress,buttonWidth,buttonHeight} 
 */
function HomeButton(props) {
    var {buttonWidth=120,buttonHeight=90}=props;
    return (
        <TouchableOpacity activeOpacity={0.9} onPress={props.onPress} style={[globalShadowBox, { width: buttonWidth, height: buttonHeight, backgroundColor: GlobalBackgroundColors.ternaryColor, borderRadius: 20, borderBottomColor:GlobalBackgroundColors.primaryColor, borderBottomWidth:4 }]}>
            <View style={{marginTop:'auto',marginBottom:'auto'}}>
            <View style={{ marginLeft: 'auto', marginRight: 'auto', paddingTop: 10, width:60,height:40 }}>
                {props.children}
            </View>
            <View style={{ flex: 1 }}>
                <Text style={{ textAlign: 'center', color: GlobalBackgroundTextColors.textBoxColor }}>{props.title}</Text>
            </View>
            </View>
        </TouchableOpacity>
    );
}

export default HomeButton;