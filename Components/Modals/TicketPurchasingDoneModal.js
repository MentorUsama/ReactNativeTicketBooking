import React from 'react';
import { View, Button, Text, Modal } from 'react-native';

function TicketPurchasingDoneModal(props) {
    return (
        <Modal visible={props.isVisible}>
            <View>
                <Text>Ticket has been Purchased</Text>
                <Button title="OK" onPress={()=>props.PurchaseDoneHandler()}/>
            </View>
        </Modal>
    );
}
export default TicketPurchasingDoneModal;