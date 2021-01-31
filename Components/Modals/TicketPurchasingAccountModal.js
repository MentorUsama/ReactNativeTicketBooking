import React, { useState } from 'react';
import { View, Button, Text, Modal, StyleSheet, TextInput } from 'react-native';
import { GlobalBackgroundColors, GlobalBackgroundTextColors, globalShadowBox } from '../../Styles/global';

function TicketPurchaseModal(props) {


    const [focusStyle, setFocusStyle] = useState({});
    var [error,setError]=useState("");
    return (
        <Modal transparent={true} visible={props.isVisible} style={{width:'100%'}}>
            <View style={{ width: '100%', flex: 1, backgroundColor: 'rgba(0,0,0,0.5)',padding:10 }}>
                <View style={{width:'80%',flex:1,padding:10,backgroundColor:GlobalBackgroundColors.secondaryColor,marginLeft:'auto',marginRight:'auto',alignItems:'center'}}>
                    <View style={{height:15,alignItems:'center'}}><Text style={{color:'red'}}>{error}</Text></View>
                    <TextInput
                        style={[styles.textInputStyle, focusStyle, { width: '100%' }]}
                        onChangeText={text => { props.setAccountNumber(text) }}
                        value={props.value}
                        placeholder="Jazz cash account number"
                        onFocus={() => setFocusStyle({ outline: "none" })
                        }
                    />
                    <Button title="OK" onPress={() => props.AccountModalOkHandler(setError)} />
                    <Button title="Cancel" onPress={() => props.AccountCancelHandler()} />
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    textInputStyle: {
        width: '100%',
        height: 40,
        borderBottomColor: '#B7B7B7',
        borderBottomWidth: 1,
        paddingLeft: 30
    }
});
export default TicketPurchaseModal;