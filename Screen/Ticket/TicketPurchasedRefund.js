import React, { useState } from 'react';
import { View, Button, Text,TouchableOpacity } from 'react-native';

// Importing Modal
import RefundModal from '../../Components/Modals/TicketPurchasedRefundModal';
import Input from '../../Components/Component/InputComponent';
// Importing styles
import { GlobalBackgroundColors,primaryButton } from '../../Styles/global';





{/* />
<Text>Ticket Purchased Refund</Text>
<Button title="Refund" onPress={()=>setModalVisible(true)} /> */}
function TicketPurchasedRefund({ navigation, route }) {
    console.log(route.params);
    // Function goes here
    
    const purchaseDone = () => {
        setModalVisible(false);
        navigation.navigate('HomeScreen');
    }
    // Data goes here
    var [isModalVisible, setModalVisible] = useState(false);
    var [mobileNo, changeMobileNo] = useState('');
    return (
        <View style={{ backgroundColor: GlobalBackgroundColors.primaryColor, flex: 1, justifyContent: 'center',alignItems:'center' }}>
                <View style={{display:isModalVisible?'flex':'none'}}><RefundModal isVisible={isModalVisible} purchaseDone={()=>purchaseDone()} /></View>
                <Text style={{color:GlobalBackgroundColors.ternaryColor}}>Please Enter the Jazz Cash mobile number for refund</Text>
                <View style={{marginLeft:'auto',marginRight:'auto'}}><Input secure={true} onchange={changeMobileNo} value={mobileNo} placeHolder="Mobile No" /></View>
                <View style={{marginLeft:'auto',marginRight:'auto',marginTop:20}}><TouchableOpacity style={primaryButton} onPress={()=>setModalVisible(true)}><Text>Refund</Text></TouchableOpacity></View>
        </View>
    );
}
export default TicketPurchasedRefund;