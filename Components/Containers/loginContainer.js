import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
// Importing styles
import { GlobalBackgroundColors, GlobalBackgroundTextColors, primaryButton, globalShadowBox, FontFamily } from '../../Styles/global';



/**
 * Container for our (Login,Register,ForgetPassword related all screens)
 * Props tha will be passed are {title,leftBottomText,rightBottomText,rightBottomLink,mainButtonText,mainButtonLink}
 */
function LoginContainer(props) {
    return (

        // Overall container
        <View style={[FontFamily.NormalFont, { flex: 1, backgroundColor: GlobalBackgroundColors.primaryColor }]}>
            {/* <ScrollView style={[FontFamily.NormalFont, { flex: 1, backgroundColor: GlobalBackgroundColors.primaryColor }]}> */}
            {/* Header (Containing only title) */}
            <View style={{ flex: 25 }}>
                <Text style={[styles.title, FontFamily.TitleFont]}>{props.title}</Text>
            </View>
            {/* Content Area Container */}
            <View style={styles.contentArea}>
                {/* Everything that is passed as child */}
                <View style={{ flex: 1, alignItems: "center" }}>
                    <View>
                        <Image style={styles.stretch} source={require('../../assets/Images/log.png')} />
                    </View>
                    <View style={[globalShadowBox, { marginLeft: 'auto', marginRight: 'auto', width: '70%', padding: 10, paddingLeft: 20, marginTop: 10, marginBottom: 10 }]}>
                        <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>{props.children}</View>
                        <TouchableOpacity style={[primaryButton, globalShadowBox, { marginTop: 10, marginBottom: 10 }]} activeOpacity={0.9} onPress={props.mainButtonLink}><Text style={{ textAlign: "center", marginTop: 'auto', marginBottom: 'auto', color: 'white' }}>{props.mainButtonText}</Text></TouchableOpacity>
                    </View>
                </View>
                {/* Bottom Links container */}
                <View style={{ height: 100, paddingBottom: 20, paddingLeft: 20, paddingRight: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" }}>
                    <Text style={styles.linkBottom}>{props.leftBottomText}</Text>
                    <TouchableOpacity activeOpacity={0.9} onPress={props.rightBottomLink}><Text style={[styles.linkBottom]}>{props.rightBottomText}</Text></TouchableOpacity>
                </View>
            </View>
            {/* </ScrollView> */}
        </View>
    )
}

const styles = StyleSheet.create({
    title:
    {
        textAlign: "center",
        marginTop: 'auto',
        marginBottom: 'auto',
        color: (GlobalBackgroundTextColors.primaryColor),

    },
    linkBottom: {
        color: (GlobalBackgroundColors.secondaryColor),
        fontWeight: "bold"
    },
    stretch: {
        minWidth: 90,
        minHeight: 80,
        marginBottom: 10
    },
    contentArea: {
        backgroundColor: (GlobalBackgroundColors.ternaryColor),
        flex: 75,
        borderTopEndRadius: 100,
        paddingTop: 40,
    }
})
export default LoginContainer;