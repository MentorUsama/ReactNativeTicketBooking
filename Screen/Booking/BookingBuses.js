import React, { useState,useEffect,useContext } from 'react';
import { View, Button, Text, Image, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// Components
import Container from '../../Components/Containers/SimpleContainer';
import { GlobalBackgroundColors, GlobalBackgroundTextColors, globalShadowBox } from '../../Styles/global';
import Slider from '../../Components/Component/BookingScreen/ScheduleDateCoursele';
// Importing scree
import Wait from '../wait';
// importing contex
import LoginContext from '../../Context/LoginContext';
// Function
import {FilterBusSchedule} from '../../Functions';






/*===== Header Function Goes Here ============================================================================================= */
function Header(props) {
    return (
        <View style={{ flex: 1 }}>
            <Image style={{ width: 40, height: 40, marginLeft: 'auto', marginRight: 'auto', marginTop: 20 }} source={require('../../assets/Images/BusLogo.png')} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20, marginTop: 10 }}>
                {/* Arrival */}
                <View>
                    <Text style={{ color: GlobalBackgroundTextColors.primaryColor, fontSize: 25, fontWeight: 'bold', marginBottom: 5 }}>{props.Arrival}</Text>
                    <Text style={{ color: GlobalBackgroundTextColors.primaryColor, fontSize: 15 }}>Departure</Text>
                </View>
                {/* Border */}
                <View style={{ height: 5, backgroundColor: GlobalBackgroundTextColors.primaryColor, width: 30, marginTop: 'auto', marginBottom: 'auto' }}></View>
                {/* Destination */}
                <View>
                    <Text style={{ color: GlobalBackgroundTextColors.primaryColor, fontSize: 25, fontWeight: 'bold', marginBottom: 5 }}>{props.Destination}</Text>
                    <Text style={{ color: GlobalBackgroundTextColors.primaryColor, fontSize: 15 }}>Destination</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20 }}>
                <Image style={{ width: 40, height: 40 }} source={require('../../assets/Images/clock.png')} />
                <Text style={{ marginTop: 'auto', marginBottom: 'auto', color: GlobalBackgroundTextColors.primaryColor }}>{props.Date}</Text>
                <Image style={{ width: 40, height: 40 }} source={require('../../assets/Images/Calender.png')} />
            </View>
        </View>
    );
}
/*===== Header Function Goes Here ============================================================================================= */





/*===== Bus Function Goes Here ============================================================================================= */
function Bus(props) {
    var { person, item: Bus } = props;
    return (
        <TouchableOpacity onPress={() => props.navigation.navigate("BookingBusSeatsScreen", { person, Bus })} style={[globalShadowBox, { width: '90%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: 'white', borderRadius: 30, padding: 10, marginTop: 30 }]}>
            {/* Bus Detail */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 25, color: GlobalBackgroundColors.primaryColor }}>{Bus.BusStandard}</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 25, color: GlobalBackgroundColors.primaryColor }}>{Bus.Price}</Text>
            </View>
            {/* Traveling Detail */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                <Text>{Bus.Arrival}</Text>
                <Image style={{ width: 50, height: 40 }} source={require('../../assets/Images/BusTicketLogo.png')} />
                <Text>{Bus.Destination}</Text>
            </View>
            {/* Time Detail */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                <Text>{Bus.DepartureTime}</Text>
                <Text>{Bus.ArrivalTime}</Text>
            </View>
        </TouchableOpacity>
    );
}
/*===== Bus Function Ends Here ============================================================================================= */






function BookingBuses({ navigation, route }) {


    /*===== Getting Passed Data ===================================================================== */
    var { ArrivalSelected, DestinationSelected, DateData, person, DateSchedule1 } = route.params;
    const { rootReference } = useContext(LoginContext);
    /*===== Getting Passed Data ===================================================================== */


    /*===== Data created ============================================================================ */
    var [Date, DateHandler] = useState(DateData);
    var [promise, setPromise] = useState(false);
    var [BusSchedule,setBusSchedule] = useState([]);
    /*===== Data created ============================================================================ */



    var busScheduleTemp=[];
    useEffect(() => {
        const CitiesNode = rootReference.child("BusSchedule");
        CitiesNode.once("value").then(datasnap => {
            busScheduleTemp = datasnap.val();
        }).then(readCountTxn => {
            busScheduleTemp=FilterBusSchedule(busScheduleTemp,false); 
            setBusSchedule(busScheduleTemp);
            setPromise(true);
        })
    }, []);



    var AllBuses=BusSchedule.filter((bus,index)=>{
        if (bus.Date == Date && bus.Destination==DestinationSelected && bus.Arrival==ArrivalSelected ) {
            return bus;
        }
    })



    var show = false;
    if (AllBuses.length >= 0) {
        show = true;
    }


    if (promise == true) {
        navigation.setOptions({ headerShown: true });
    }
    else {
        navigation.setOptions({ headerShown: false });
    }

    return (
        <View style={{flex:1}}>
            {
                promise ?
                    <Container isBottomVisible={false} headerContent={<Header Date={Date} Arrival={ArrivalSelected} Destination={DestinationSelected}></Header>}>
                        <Slider DateSchedule={DateSchedule1} Date={DateData} DateHandler={DateHandler}></Slider>
                        {
                            show ?
                                <ScrollView>
                                    <FlatList
                                        keyExtractor={(item, index) => index.toString()}
                                        data={AllBuses}
                                        renderItem={({ item }) => (
                                            <Bus navigation={navigation} item={item} person={person} ></Bus>
                                        )}
                                    />
                                </ScrollView>
                                :
                                <Text>Can not Find Any Bus</Text>
                        }
                    </Container>
                    :
                    <Wait />
            }
        </View>
    );
}
export default BookingBuses;