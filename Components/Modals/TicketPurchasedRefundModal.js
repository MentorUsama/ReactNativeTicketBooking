import React from 'react';
import {View,Button,Text,Modal} from 'react-native';

function TicketPurchasedRefundModal(props)
{
    return(
        <Modal visible={props.isVisible}>
            <View>
            <Text>Refund Complete "Amount has been transfered to your accounnt"</Text>
            <Button title="OK" onPress={()=>props.purchaseDone()}/>
        </View>
        </Modal>
    );
}
export default TicketPurchasedRefundModal;