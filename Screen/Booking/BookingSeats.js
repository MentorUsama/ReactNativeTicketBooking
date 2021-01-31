import React, { useState, useEffect, useContext } from 'react';
import { View, Button, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

// Styles
import { GlobalBackgroundColors, globalShadowBox, primaryButton, GlobalBackgroundTextColors } from '../../Styles/global';
//Components
import Seat from '../../assets/Images/seats';
// Data
import LoginContext from '../../Context/LoginContext';
import Wait from '../wait';
import { GetSingleBus, GetAllSeats, updatePendingSeats } from '../../Functions';
/**
 * Data passed from BookingBuses.js
 * Bus:{Arrival, ArrivalTime, BusID, BusStandard, Date, Day, DepartureTime, Destination, Price}
 * person: {Name,Password,PhoneNumber}
 */





/* ======================= Bus Detail Component Goes Here ============================================== */
function BusDetailCar(props) {
    var { Bus } = props;
    return (
        <View>
            {/* Bus Detail */}
            <View style={[globalShadowBox, { marginTop: 10, marginBottom: 10, marginLeft: 'auto', marginRight: 'auto', flexDirection: 'column', justifyContent: 'space-between', width: '90%', padding: 5, backgroundColor: GlobalBackgroundColors.ternaryColor }]}>
                <Text style={{ marginLeft: 'auto', marginRight: 'auto', fontSize: 25, fontWeight: 'bold' }}>{Bus.Price}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 3 }}>
                    <Text style={{ marginTop: 'auto', marginBottom: 'auto', fontSize: 20 }}>{Bus.Arrival}</Text>
                    <Image style={{ width: 50, height: 40 }} source={require('../../assets/Images/BusTicketLogo.png')} />
                    <Text style={{ marginTop: 'auto', marginBottom: 'auto', fontSize: 20 }}>{Bus.Destination}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 3, paddingLeft: 30, paddingRight: 30 }}>
                    <Text style={{ fontSize: 10 }}>{Bus.DepartureTime}</Text>
                    <Text style={{ fontSize: 10 }}>{Bus.ArrivalTime}</Text>
                </View>
            </View>
            {/* Seats */}
        </View>
    )
}

function SeatInfo() {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 5 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={[styles.SeatContainer, globalShadowBox, { width: 30, height: 30 }]}>
                    <Seat color={0}></Seat>
                </View>
                <Text style={{ marginLeft: 10 }}>Male</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={[styles.SeatContainer, globalShadowBox, { width: 30, height: 30 }]}>
                    <Seat color={1}></Seat>
                </View>
                <Text style={{ marginLeft: 10 }}>Female</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={[styles.SeatContainer, globalShadowBox, { width: 30, height: 30 }]}>
                    <Seat color={-1}></Seat>
                </View>
                <Text style={{ marginLeft: 10 }}>Booked</Text>
            </View>
        </View>
    );
}

function FullSeat(props) {
    // Initial Daa
    var { color, seatsHandler, seatID } = props;
    // Seat Color
    var [seatColor, seatColorChange] = useState(color);
    // Disable color or not
    var disable = false;
    if (color == -1)
        disable = true;

    function pressHandler() {
        seatsHandler(seatColor, seatID, seatColorChange);
    }
    return (
        <TouchableOpacity disabled={disable} onPress={() => pressHandler()} style={[styles.SeatContainer, globalShadowBox, { width: 40, height: 40, marginBottom: 10 }]}>
            <Seat color={seatColor}></Seat>
        </TouchableOpacity>
    );
}
/* ======================= Bus Detail Component Goes Here ============================================== */






function BookingSeats({ navigation, route }) {


    /*==================== Getting Data ============================================ */
    var { Bus, person } = route.params;
    const { rootReference, firebase } = useContext(LoginContext);
    /*==================== PAssed Data ============================================= */

    /*==================== Created Data ============================================ */
    var [Error, setError] = useState("");
    var selectedData = [];
    var [selectedBus, setSelectedBus] = useState(Bus);
    // var BusSeatData = Bus;
    var [Booked, setBooked] = useState([]);
    var [promise, setPromise] = useState(false);
    /*==================== Created Data =============================================*/






    /*======================= Getting the data of busschedule ======================= */
    var tempraryBusSchedule = [];
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            const BusScheduleNode = rootReference.child("BusSchedule"); // Getting the city reference
            BusScheduleNode.once("value").then(datasnap => {
                tempraryBusSchedule = datasnap.val();
            }).then(readCountTxn => { // When the propmise to get the city is made
                var single = GetSingleBus(Bus, tempraryBusSchedule,person.PhoneNumber);
                var tempBooked = GetAllSeats(single);
                setSelectedBus(single);
                setBooked(tempBooked);
                console.log("Woooo =>",single,tempBooked)
                setPromise(true);
            })
        });
        return unsubscribe;
    }, [navigation]);
    /*======================= Getting the data of busschedule ======================= */





    /*======================= Function to handle booked button ====================== */
    var tempBusSchedule = [];
    function bookSeat() {
        if(selectedData.length==0)
        {
            setError("Please select the seats");
            return;
        }

        setPromise(false);
        setError("");
        const CitiesNode = rootReference.child("BusSchedule/" + selectedBus.FireBaseIndex + "/Pending"); // Getting the Busschedule
        CitiesNode.once("value").then(datasnap => {
            tempBusSchedule = datasnap.val();
        }).then(readCountTxn => { // updating
            var temp = updatePendingSeats(tempBusSchedule, person.PhoneNumber, selectedData);
            var { userIndex, seats } = temp;
            var NewBookedNode = null;

            if (userIndex == -1) {
                NewBookedNode = rootReference.child("BusSchedule/" + selectedBus.FireBaseIndex + "/Pending");
                NewBookedNode.set(seats).then(readCountTxn => {
                    setPromise(true);
                    selectedBus.pendingIndex=seats.length-1;
                    navigation.navigate("TicketDetailScreen", { Bus: selectedBus, selectedData, person });
                });
            }
            else {
                NewBookedNode = rootReference.child("BusSchedule/" + selectedBus.FireBaseIndex + "/Pending/" + userIndex + "/seats");
                NewBookedNode.set([...seats]).then(readCountTxn => {
                    setPromise(true);
                    navigation.navigate("TicketDetailScreen", { Bus: selectedBus, selectedData, person });
                });
            }
        })
    }
    /*======================= Function to handle booked button ====================== */





    /*==================== Function to handle seat that is selected ==================*/
    var seatsHandler = (seatColor, seatID, seatColorChange) => {
        var found = false;
        selectedData = selectedData.filter((item) => {
            if (item.seatID == seatID) {
                found = true;
                if (seatColor == 2) //If seat color is black
                {
                    item.Gender = 0;
                    seatColorChange(0);
                    return item;
                }
                else if (seatColor == 0) {
                    item.Gender = 1;
                    seatColorChange(1);
                    return item;
                }
                else if (seatColor == 1) {
                    seatColorChange(2);

                }
            }
            else {
                return item;
            }
        });

        if (found == false) {
            selectedData.push({ seatID, Gender: 0 });
            seatColorChange(0);
        }
    }
    /*==================== Function to handle seat that is selected ==================*/










    /* creating component of seats and applying colours on them ===================== */
    var BusSeatDataComponent = [];

    for (var i = 1; i <= selectedBus.TotalSeats; i++) {
        var marginRight = 0;
        var newLine = false;
        if ((i - 1) % 4 == 0) {
            BusSeatDataComponent.push(<View style={{ width: '100%' }}></View>);
            newLine = true;
        }
        if ((i + 1) % 2 == 0 && newLine == false) {
            BusSeatDataComponent.push(<View style={{ flex: 1 }}></View>)
        }
        if (Booked.includes(i)) {
            BusSeatDataComponent.push(<View style={{ marginRight: 10 }}><FullSeat color={-1} seatsHandler={seatsHandler} seatID={i} /></View>)
        }
        else {
            BusSeatDataComponent.push(<View style={{ marginRight: 10 }}><FullSeat color={2} seatsHandler={seatsHandler} seatID={i} /></View>)
        }
        newLine = false;
    }
    /* creating component of seats and applying colours on them ===================== */



    if (promise == true) {
        navigation.setOptions({ headerShown: true });
    }
    else {
        navigation.setOptions({ headerShown: false });
    }



    
    return (
        <View style={{flex:1}}>
            { promise ?
                <ScrollView>
                    <View style={{ backgroundColor: GlobalBackgroundColors.primaryColor, flex: 1 }}>
                        <BusDetailCar Bus={selectedBus}></BusDetailCar>
                        {/* Seats Goes Here */}
                        <View style={[globalShadowBox, { width: '90%', marginLeft: 'auto', marginRight: 'auto', marginBottom: 20, flex: 1, backgroundColor: GlobalBackgroundColors.ternaryColor }]}>
                            <SeatInfo />
                            <Text style={{ color: 'red', textAlign: 'center', marginTop: 5, marginBottom: 5, fontWeight: 'bold' }}>{Error}</Text>


                            {/* Seats*/}
                            <ScrollView>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                    {BusSeatDataComponent}
                                </View>
                            </ScrollView>


                            {/* Butons */}
                            <View style={{ marginBottom: 10 }}>
                                <TouchableOpacity onPress={() => bookSeat()} style={[primaryButton, { marginLeft: 'auto', marginRight: 'auto' }]}><Text style={{ textAlign: 'center', color: GlobalBackgroundTextColors.secondaryColor }}>Book Now</Text></TouchableOpacity>
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

const styles = StyleSheet.create({
    SeatContainer: {
        backgroundColor: GlobalBackgroundColors.ternaryColor,
        padding: 5,
        width: '100%',
        height: '100%',
        borderRadius: 10
    }
});
export default BookingSeats;