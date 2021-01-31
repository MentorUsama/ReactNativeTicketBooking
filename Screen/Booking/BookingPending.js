import React, { useContext, useState, useEffect } from 'react';
import { View, Button, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import TicketIcon from '../../assets/Images/HomeLogo/tickets';
// Importing styles
import { globalShadowBox, GlobalBackgroundColors, GlobalBackgroundTextColors, primaryButton } from '../../Styles/global'
// Contex
import LoginContext from '../../Context/LoginContext';
// Screens
import WaitScreen from '../../Screen/wait';
import { GetPending, FilterBusSchedule } from '../../Functions';
// Importing icons
import Bin from '../../assets/Images/Icons/bin';

// Ticket Component
function Ticket(props) {
    var { Bus, selectedData, person, navigation, deleteData } = props;
    return (
        <View style={[globalShadowBox, { backgroundColor: GlobalBackgroundColors.ternaryColor, padding: 6, borderRadius: 5, marginBottom: 10, marginTop: 10, width: '70%', marginLeft: 'auto', marginRight: 'auto' }]}>
            {/* Ticket Header */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5, paddingBottom: 5 }}>
                <TicketIcon />
                <Text>{person.Name}</Text>
                <TouchableOpacity onPress={() => deleteData(Bus)}><Bin /></TouchableOpacity>
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
            <TouchableOpacity style={primaryButton} onPress={() => navigation.navigate("TicketDetailScreen", { Bus, person })}><Text style={{ color: 'white', textAlign: 'center', marginTop: 15, marginBottom: 10 }}>Purchase Now</Text></TouchableOpacity>
        </View>
    );
}





function BookingPending({ navigation, route }) {


    /*===== getting passed=======================================================*/
    var { person } = route.params;
    const { rootReference } = useContext(LoginContext);
    var [reload, changeReload] = useState(false);
    /*===================================================getting passed data=====*/


    /*===== Created Data =======================================================*/
    var [promised, setpromised] = useState(false);
    var [pendingBookingBus1, setpendingBooking] = useState([]);
    /*===== Created Data =======================================================*/


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
            duppendingBookingBus = GetPending(duppendingBookingBus);
            setpendingBooking(duppendingBookingBus);
            setpromised(true);
        });
    }, [reload]);
    /*============================================== Getting Data from database===== */





    /*======================= Function to handle booked button ====================== */
    var tempBusSchedule = [];
    function deleteBooking(Bus) {
        console.log("Deleting", Bus);
        setpromised(false);

        var NewPendingNode = rootReference.child("BusSchedule/" + Bus.FireBaseIndex + "/Pending/" + Bus.pendingIndex);
        NewPendingNode.set([]).then(readCountTxn => {
            changeReload(!reload);
        });
    }
    /*======================= Function to handle booked button ====================== */
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
                        <View>
                            <FlatList
                                keyExtractor={(item, index) => index.toString()}
                                data={pendingBookingBus1}
                                renderItem={({ item }) => (
                                    <Ticket Bus={item} selectedData={item.Pending} person={person} navigation={navigation} deleteData={deleteBooking} />
                                )}
                            />
                        </View>
                    </ScrollView>
                    :
                    <WaitScreen />
            }
        </View>
    );
}
export default BookingPending;