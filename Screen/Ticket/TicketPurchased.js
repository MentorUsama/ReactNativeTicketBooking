import React, { useContext, useEffect, useState } from 'react';
import { View, Button, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';
// Imorting Data
import { purchasedTicket } from '../../Data/Data';
import TicketIcon from '../../assets/Images/HomeLogo/tickets';
// Importing styles
import { globalShadowBox, GlobalBackgroundColors, GlobalBackgroundTextColors, primaryButton } from '../../Styles/global';
// Contex
import LoginContext from '../../Context/LoginContext';
// Scrren
import WaitScreen from '../wait';
// Importing functions
import { GetBooked, FilterBusSchedule } from '../../Functions';


// Ticket Component
function Ticket(props) {
    var { Bus, selectedData, person, navigation } = props;
    return (
        <View style={[globalShadowBox, { backgroundColor: GlobalBackgroundColors.ternaryColor, padding: 6, borderRadius: 5, marginBottom: 10, marginTop: 10, width: '70%', marginLeft: 'auto', marginRight: 'auto' }]}>
            {/* Ticket Header */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5, paddingBottom: 5 }}>
                <TicketIcon />
                <Text>{person.Name}</Text>
            </View>

            {/* Route detail */}
            <View style={{ paddingLeft: 10, paddingRight: 10, marginTop: 15 }}>
                {/* Title */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>Date</Text>
                    <Text>Time</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 10, color: GlobalBackgroundTextColors }}>{Bus.Day}, {Bus.Date}</Text>
                    <Text style={{ fontSize: 10, color: GlobalBackgroundTextColors }}>{Bus.DepartureTime}</Text>
                </View>
            </View>

            {/* Total Price */}
            <View style={{ paddingLeft: 10, paddingRight: 10, marginTop: 15 }}>
                {/* Title */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>Price</Text>
                    <Text style={{ fontSize: 10, color: GlobalBackgroundTextColors }}>{selectedData.length * Bus.Price}</Text>
                </View>
            </View>

            {/* Burtton */}
            <TouchableOpacity style={primaryButton} onPress={() => navigation.navigate("RefundTicketScreen", { Bus, person, selectedData })}><Text style={{ color: 'white', textAlign: 'center', marginTop: 15, marginBottom: 10 }}>Refund</Text></TouchableOpacity>
        </View>
    );
}





function BookingPending({ navigation, route }) {


    /* ===== Getting passed data ========================================================================== */
    var { person } = route.params;
    const { rootReference } = useContext(LoginContext);
    /* ============================================================================Getting passed data===== */



    /*===== Vreated Data ================================================================================== */
    var [promised, setpromised] = useState(false);
    var [purchasedTicket1, setPurchasedTicket] = useState([]);
    /*===== Vreated Data ================================================================================== */



    /*===== Getting Data from database ======================================== */
    // var allPurchasedTicket = [];
    // useEffect(() => {
    //     // Getting Schedule Data
    //     const BusNode = rootReference.child("BusSchedule");
    //     BusNode.once("value").then(datasnap => {
    //         allPurchasedTicket = datasnap.val();
    //     }).then(readCountTxn => {
    //         var dupPurchasedTicket = [];
    //         dupPurchasedTicket =GetPurchaseTicket(allPurchasedTicket,person.PhoneNumber);
    //         // Getting pending related data
    //         setPurchasedTicket(dupPurchasedTicket);
    //         setpromised(true);
    //     });
    // }, []); // Use Effect Ends
    /*============================================== Getting Data from database===== */



    /*===== Getting Data from database ======================================== */
    var scheduleBuses = [];
    useEffect(() => {
        // Getting Schedule Data
        const BusNode = rootReference.child("BusSchedule");
        BusNode.once("value").then(datasnap => {
            scheduleBuses = datasnap.val();
        }).then(readCountTxn => {
            var duppendingBookingBus = [];
            // Getting pending related data
            duppendingBookingBus = FilterBusSchedule(scheduleBuses, person.PhoneNumber);
            duppendingBookingBus = GetBooked(duppendingBookingBus);
            setPurchasedTicket(duppendingBookingBus);
            setpromised(true);
        });
    }, []);
    /*============================================== Getting Data from database===== */




    if (promised == true) {
        navigation.setOptions({ headerShown: true });
    }
    else {
        navigation.setOptions({ headerShown: false });
    }


    return (
        <View style={{ flex: 1 }}>
            {
                promised ?
                    <ScrollView>
                        <FlatList
                            keyExtractor={(item, index) => index.toString()}
                            data={purchasedTicket1}
                            renderItem={({ item }) => (
                                <Ticket Bus={item} selectedData={item.Booked} person={person} navigation={navigation} />
                            )}
                        />
                    </ScrollView>
                    :
                    <WaitScreen />
            }
        </View>
    );
}
export default BookingPending;