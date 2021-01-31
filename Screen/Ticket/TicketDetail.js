import React, { useState, useContext, useEffect } from 'react';
import { View, Button, Text, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
// Importing Syles
import { GlobalBackgroundColors, GlobalBackgroundTextColors, primaryButton, globalShadowBox } from '../../Styles/global';
// Modals
import AccountModel from '../../Components/Modals/TicketPurchasingAccountModal';
import PurchasedDoneModel from '../../Components/Modals/TicketPurchasingDoneModal';
import Wait from '../wait';
// Contex
import LoginContext from '../../Context/LoginContext';





// Main function goes here
function TicketDetail({ navigation, route }) {



    /*============================= Data passed ====================================================== */
    var { selectedData = false, person = false } = route.params; // When passed by params
    const { LoginStateHandler, rootReference } = useContext(LoginContext);
    /*============================= Data passed ====================================================== */


    /*============================= Created Data ===================================================== */
    var [Bus, setBus] = useState(route.params.Bus)
    /*============================= Created Data ===================================================== */


    /*============================= Modfying data because of different screen ======================== */
    var tempBusPending = [];
    var tempBusBooked = [];

    useEffect(() => {
        if (selectedData != false) // If we are coming from seat selection
        {

            if (Bus.Pending != null) {
                Bus.Pending.map((Pending) => {
                    if (Pending.PhoneNumber == person.PhoneNumber) {
                        tempBusPending = Pending.seats;
                    }
                })
            }

            if (Bus.Booked != null) {
                Bus.Booked.map((Pending) => {
                    if (Pending.PhoneNumber == person.PhoneNumber) {
                        tempBusBooked = Pending.seats;
                    }
                })
            }
            tempBusPending = selectedData.concat(tempBusPending);

            var tempBus={...Bus};
            tempBus.Pending = tempBusPending;
            tempBus.Booked = tempBusBooked;
            setBus(tempBus);
        }
        console.log("Bus=>", Bus);
    },[])
    /*============================= Modfying data because of different screen ======================== */


    /*============================= My Data created ================================================== */
    var [promise, setPromise] = useState(true);


    var GenderDetail = ['Male', 'Female'];
    var amount = Bus.Price;
    var totalTicket = Bus.Pending.length;
    var totalamount = amount * totalTicket;


    // Modal Data
    let [isAccountVisible, setAccountVisible] = useState(false);
    let [accountNumber, setAccountNumber] = useState('');
    // Functions
    const AccountModalOkHandler = (setError) => {
        if (accountNumber.length != 11) {
            setError("Enter 11 digit number");
            return;
        }

        // Geting new Booked seats
        setPromise(false);
        var newBookedSeats = [];
        var updateNode = null;
        var tempraryBusSchedule = [];
        console.log(Bus);

        if (Bus.bookedIndex == -1) // Means there is no booking for the user so we have to gett all the booking and then insert the booking o user as well
        {
            newBookedSeats=[{PhoneNumber:person.PhoneNumber,seats:[...Bus.Pending]}];

            Node = rootReference.child("BusSchedule/"+Bus.FireBaseIndex); // Getting the city reference
            Node.once("value").then(datasnap => {
                tempraryBusSchedule = datasnap.val();
            }).then(readCountTxn => { // When the propmise to get the city is made
                if(tempraryBusSchedule.Booked!=null)
                tempraryBusSchedule.Booked=[...tempraryBusSchedule.Booked,{"PhoneNumber":person.PhoneNumber,"seats":Bus.Pending}];
                else
                tempraryBusSchedule.Booked=[{"PhoneNumber":person.PhoneNumber,"seats":Bus.Pending}];

                console.log(tempraryBusSchedule.Booked);

                Node = rootReference.child("BusSchedule/" + Bus.FireBaseIndex + "/Booked");
                Node.set([...tempraryBusSchedule.Booked]).then(readCountTxn => {
                    Node = rootReference.child("BusSchedule/" + Bus.FireBaseIndex + "/Pending/"+Bus.pendingIndex);
                    Node.set([]).then(readCountTxn => {
                        setPromise(true);
                        setAccountVisible(false);
                        setPurchasedDoneVisible(true);
                    });
                });
            })

        }
        else {
            updateNode = rootReference.child("BusSchedule/" + Bus.FireBaseIndex + "/Booked/"+Bus.bookedIndex+'/seats');
            updateNode.set([...Bus.Pending,...Bus.Booked]).then(readCountTxn => {
                updateNode = rootReference.child("BusSchedule/" + Bus.FireBaseIndex + "/Pending/"+Bus.pendingIndex);
                updateNode.set([]).then(readCountTxn => {
                    setPromise(true);
                    setAccountVisible(false);
                    setPurchasedDoneVisible(true);
                });
            });
        }
    }
    const AccountCancelHandler = () => {
        setAccountVisible(false);
    }


    let [isPurchasedDoneVisible, setPurchasedDoneVisible] = useState(false);
    const PurchaseDoneHandler = () => {
        setPurchasedDoneVisible(false);
        navigation.navigate("HomeScreen");
    }
    /*============================= My Data created ================================================== */


    return (
        <View style={{ backgroundColor: GlobalBackgroundColors.primaryColor, flex: 1 }}>
            {promise ?
                <ScrollView style={{ flex: 1 }}>



                    {/* Models */}
                    <View style={{ display: isAccountVisible ? 'flex' : 'none', width: '100%' }}><AccountModel isVisible={isAccountVisible} AccountModalOkHandler={AccountModalOkHandler} AccountCancelHandler={() => AccountCancelHandler()} setAccountNumber={setAccountNumber} /></View>
                    <View style={{ display: isPurchasedDoneVisible ? 'flex' : 'none' }}><PurchasedDoneModel isVisible={isPurchasedDoneVisible} PurchaseDoneHandler={PurchaseDoneHandler} /></View>




                    {/* Tickets */}
                    <View style={{ width: '90%', flex: 1, marginLeft: 'auto', marginRight: 'auto', marginBottom: 10, paddingBottom: 20 }}>
                        {/* Tickets detail container*/}
                        <View style={{ flex: 1, backgroundColor: GlobalBackgroundColors.ternaryColor, paddingBottom: 20 }}>
                            {/* Header */}
                            <View style={{ backgroundColor: GlobalBackgroundColors.secondaryColor, padding: 10 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Image style={{ width: 40, height: 40 }} source={require('../../assets/Images/log.png')} />
                                    <Image style={{ width: 40, height: 40 }} source={require('../../assets/Images/BusLogo1.png')} />
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                                    <Text style={{ color: GlobalBackgroundTextColors.secondaryColor, fontWeight: 'bold' }}>{Bus.Arrival}</Text>
                                    <Image style={{ width: 50, height: 40 }} source={require('../../assets/Images/BusTicketLogo.png')} />
                                    <Text style={{ color: GlobalBackgroundTextColors.secondaryColor, fontWeight: 'bold' }}>{Bus.Destination}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 5 }}>
                                    <Text style={{ color: GlobalBackgroundTextColors.secondaryColor, fontWeight: 'bold', fontWeight: 10 }}>{Bus.DepartureTime}</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                        <View style={{ width: 10, height: 10, backgroundColor: GlobalBackgroundColors.ternaryColor, borderRadius: 10 }}></View>
                                        <View style={{ width: 100, height: 1, backgroundColor: GlobalBackgroundColors.ternaryColor }}></View>
                                        <View style={{ width: 10, height: 10, backgroundColor: GlobalBackgroundColors.ternaryColor, borderRadius: 10 }}></View>
                                    </View>
                                    <Text style={{ color: GlobalBackgroundTextColors.secondaryColor, fontWeight: 'bold', fontWeight: 10 }}>{Bus.ArrivalTime}</Text>
                                </View>
                            </View>




                            {/* Body */}
                            <View style={{ backgroundColor: GlobalBackgroundColors.ternaryColor, flex: 1, paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 20 }}>Name</Text>
                                    <Text style={{ fontSize: 20 }}>Date</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                                    <Text style={{ fontSize: 10, color: GlobalBackgroundTextColors.textBoxColor }}>{person.Name}</Text>
                                    <Text style={{ fontSize: 10, color: GlobalBackgroundTextColors.textBoxColor }}>{Bus.Day}, {Bus.Date}</Text>
                                </View>
                                <View style={{ marginTop: 20 }}>
                                    <Text style={{ fontSize: 20 }}>Information</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                                    <Text style={{ fontSize: 15 }}>SeatNo</Text>
                                    <Text style={{ fontSize: 15 }}>Gender</Text>
                                </View>
                                <View>
                                    {console.log(Bus.Pending)}
                                    <FlatList
                                        keyExtractor={(item, index) => index.toString()}
                                        data={Bus.Pending}
                                        renderItem={({ item }) =>
                                        (
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                                                <Text style={{ fontSize: 10, color: GlobalBackgroundTextColors.textBoxColor }}>{item.seatID}</Text>
                                                <Text style={{ fontSize: 10, color: GlobalBackgroundTextColors.textBoxColor }}>{GenderDetail[item.Gender]}</Text>
                                            </View>
                                        )}
                                    />
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                                    <Text style={{ fontSize: 20 }}>Total Amount</Text>
                                    <Text style={{ fontSize: 20 }}>{totalamount}</Text>
                                </View>
                                {/* Just a line*/}
                            </View>




                            {/* Buttons */}
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                <TouchableOpacity style={[primaryButton, globalShadowBox, { height: 50 }]} onPress={() => setAccountVisible(true)} ><Text style={{ color: 'white', textAlign: 'center' }}>Purchase Ticket</Text></TouchableOpacity>
                                <TouchableOpacity style={[primaryButton, globalShadowBox, { height: 50 }]} onPress={() => navigation.navigate('HomeScreen')} ><Text style={{ color: 'white', textAlign: 'center' }}>Go to home</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                :
                <Wait />
            }
        </View>
    );
}
export default TicketDetail;