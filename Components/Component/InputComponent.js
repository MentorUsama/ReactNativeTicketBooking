import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import { GlobalBackgroundColors } from '../../Styles/global';

/**
 * This is the text input whihc required following things
 * {onchange,iconName,value,placeHolder,secure,fullWidth}
 */
var size = [200, 200]
function InputComponent(props) {
    const [focusStyle, setFocusStyle] = useState({});
    const { fullWidth = false } = props;
    if (fullWidth)
        size = ["100%", "90%"];

    return (
        <View style={{ flexDirection: 'row', width: size[0], justifyContent: 'center' }}>
            <View style={{ marginRight: -20, marginBottom: 0, justifyContent: "flex-end", paddingBottom: 10 }}>
                {props.children}
            </View>
            <TextInput
                style={[styles.textInputStyle, focusStyle, { width: size[1] }]}
                onChangeText={text => { props.onchange(text) }}
                value={props.value}
                placeholder={props.placeHolder}
                secureTextEntry={props.secure}
                onFocus={() => setFocusStyle({ outline: "none" })
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textInputStyle: {
        width: size[1],
        height: 40,
        borderBottomColor: '#B7B7B7',
        borderBottomWidth: 1,
        paddingLeft: 30
    }
});
export default InputComponent;
