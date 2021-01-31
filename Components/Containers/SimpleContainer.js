import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// Styling
import { GlobalBackgroundColors, GlobalBackgroundTextColors } from '../../Styles/global';




/**
 * Blue and white screen container
 * Props(*isBottomVisible,BottomLeftText,bottomRightLink,BottomRightText,headerContent,headerExtraStyle)
 * 
 */


function SimpleContainer(props) {
    var {headerContent=<View></View>}=props;
    var {headerExtraStyle={}}=props;
    var {headerFlexSize=35}=props;
    var secondFlex=100-headerFlexSize;
    return (
        <View style={{ flex: 1 }}>


            {/* Header Content */}
            <View style={[{ flex: headerFlexSize, backgroundColor: GlobalBackgroundColors.primaryColor },headerExtraStyle]}>
                {headerContent}
            </View>


            {/* Main Content */}
            <View style={{ flex: secondFlex, backgroundColor: GlobalBackgroundColors.ternaryColor }}>


                {/* Main Content */}
                <View style={{ flex: 1 }}>
                    {props.children}
                </View>


                {/* Inner Links */}
                {props.isBottomVisible ?
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', paddingBottom: 10, paddingLeft: 10,paddingRight:10 }}>
                        <Text style={styles.bottomLink}>{props.BottomLeftText}</Text>
                        <TouchableOpacity onPress={props.bottomRightLink}><Text style={styles.bottomLink}>{props.BottomRightText}</Text></TouchableOpacity>
                    </View>
                    : <View></View>}
                {/* Inner Links Ends */}


            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    userInfoContainer:
    {
        backgroundColor: GlobalBackgroundColors.ternaryColor,
        width: '80%',
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: -60,
        paddingLeft: 10,
        borderBottomColor: GlobalBackgroundColors.primaryColor,
        borderBottomWidth: 5,
        borderTopLeftRadius: 30,
        borderTopEndRadius: 30
    },
    menueContinerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15
    },
    bottomLink: {
        color: GlobalBackgroundColors.secondaryColor,
        fontWeight: 'bold'
    }
})

export default SimpleContainer;
