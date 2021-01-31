import React, { useState, useContext, useEffect } from 'react';
import { View, Button, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
// Components Import
import SimpleContainer from '../../Components/Containers/SimpleContainer';
import CityModal from '../../Components/Modals/CityModal';
// Importing Styles
import { GlobalBackgroundColors, GlobalBackgroundTextColors, globalShadowBox, primaryButton } from '../../Styles/global';
// Importing Data
import Carousele from '../../Components/Component/BookingScreen/pendingBookingCoursele';
import ArrivalIcon from '../../assets/Images/Icons/Arrival';
import Date from '../../assets/Images/Icons/Date';
import DropDown from '../../assets/Images/Icons/DropDown';
// Importing context
import LoginContext from '../../Context/LoginContext';
import Wait from '../wait';
// Importing Funcions
import { GetDate, FilterBusSchedule, GetPending } from '../../Functions';





/*============================== Inline Function City Modal ========================================== */
function Destination(props) {
    return (
        <View>
            <View style={{ display: props.modalVisible ? 'flex' : 'none' }}><CityModal modalVisible={props.modalVisible} modalVisibleChange={props.modalVisibleChange} data={props.cities} searchValue={props.searchValue} searchValueChange={props.searchValueChange} finalHandler={props.finalHandler} Selected={props.Selected}></CityModal></View>
            <View style={{ flexDirection: 'row', marginBottom: 10, marginLeft: 5, alignItems: 'center' }}>
                <ArrivalIcon width={20} height={20} />
                <Text style={{ marginLeft: 10, fontSize: 15 }}>{props.title}</Text>
            </View>
            <TouchableOpacity style={{ borderColor: GlobalBackgroundTextColors.textBoxColor, borderWidth: 1, borderRadius: 50, height: 40, paddingLeft: 20, paddingTop: 2, zIndex: 1 }} onPress={() => props.modalVisibleChange(true)}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 10 }}>
                    <Text style={{ fontSize: 20, color: GlobalBackgroundTextColors.textBoxColor, width: '100%' }}>{props.Selected}</Text>
                    <View style={{ marginTop: 'auto', marginBottom: 'auto' }}><DropDown width={13} height={13} /></View>
                </View>
            </TouchableOpacity>
        </View>
    );
}
/*============================== Inline Function City Model ========================================== */





/*============================== Inline Function DatePicker ========================================== */
function DatePicker(props) {
    return (
        <View style={[globalShadowBox, { elevation: 1, width: '70%', marginLeft: 'auto', marginRight: 'auto', padding: 20, backgroundColor: GlobalBackgroundColors.ternaryColor, borderBottomEndRadius: 30, borderBottomLeftRadius: 30 }]}>
            <View style={{ flexDirection: 'row', marginBottom: 10, marginLeft: 5, alignItems: 'center' }}>
                <Date width={20} height={20} />
                <Text style={{ marginLeft: 10, fontSize: 15 }}>Date</Text>
            </View>
            <View>
                <Picker selectedValue={props.DateData} style={{ width: '100%', height: 40, borderEndColor: GlobalBackgroundTextColors.textBoxColor, borderRadius: 50, paddingLeft: 10, paddingRight: 60 }} onValueChange={(itemValue, itemIndex) => { props.onPress(itemValue); }}>
                    {props.DateSchedule.map((item) => <Picker.Item label={item} value={item} />)}
                </Picker>
            </View>
        </View>
    );
}
/*============================== Inline Function DatePicker =========================================== */





function BookingDestination({ navigation, route }) {


    /* ===== Passed Data =========================================================================================*/
    var { person = false } = route.params;
    const { rootReference } = useContext(LoginContext);
    /* ===========================================================================================Passed Data=====*/


    /*===== Data Created Goes Here ============================================================================== */
    var [promised, setpromised] = useState(false);


    var [DateSchedule1, setDateSchedule] = useState([]);
    var [cities1, setCities] = useState([]);
    var [pendingBooking1, setPendingBooking] = useState([]);


    let [ArrivalTerminal, changeArrivalTerminal] = useState(""); // For searching bar
    let [ArrivalTerminalModal, ArrivalTerminalModalHandler] = useState(false); // For changing Model
    var [ArrivalSelected, changeArrivalSelected] = useState(cities1[0]); // Final Last value of search bar
    const arrivalFinal = (city) => { // Handler when the City is selected
        changeArrivalTerminal("");
        changeArrivalSelected(city);
        ArrivalTerminalModalHandler(false);
    }



    let [DestinationTerminal, changeDestinationTerminal] = useState("");;
    let [DestinationTerminalModal, DestinationTerminalModalHandler] = useState(false);
    var [DestinationSelected, changeDestinationSelected] = useState(cities1[0]);
    function destinationFinal(city) {
        changeDestinationTerminal("");
        changeDestinationSelected(city);
        DestinationTerminalModalHandler(false);
    }



    let [DateData, changeDateData] = useState(DateSchedule1[0]);
    // In case if date is not found then disabling the find bus button
    var disable = false;
    var disableColor = GlobalBackgroundColors.secondaryColor;
    if (DateSchedule1.length <= 0) {
        disable = true;
        disableColor = "black";
    }





    var citiesTemp = [];
    var busScheduleTemp = [];
    useEffect(() => {
        const CitiesNode = rootReference.child("Cities"); // Getting the city reference
        CitiesNode.once("value").then(datasnap => {
            citiesTemp = datasnap.val();
        }).then(readCountTxn => { // When the propmise to get the city is made
            const BusScheduleNode = rootReference.child("BusSchedule");
            BusScheduleNode.once("value").then(datasnap => {
                busScheduleTemp = datasnap.val();
            }).then(readCountTxn => { // When promise to get the BusSchedule is made
                var dateTemp = GetDate(busScheduleTemp);
                var pendingTemp = FilterBusSchedule(busScheduleTemp, person.PhoneNumber);
                pendingTemp=GetPending(pendingTemp);
                setpromised(!promised);
                setDateSchedule(dateTemp);
                setCities(citiesTemp);
                setPendingBooking(pendingTemp);

                arrivalFinal(citiesTemp[0]);
                destinationFinal(citiesTemp[0]);
                changeDateData(dateTemp[0]);

            })
        })
    }, []);
    /*==========================================================================================Data Ends Here===== */



    if (promised == true) {
        navigation.setOptions({ headerShown: true });
    }
    else {
        navigation.setOptions({ headerShown: false });
    }

    return (
        <View style={{flex:1}}>
            {promised ?
                <SimpleContainer headerFlexSize={3} isBottomVisible={false}>
                    <ScrollView>
                        <View style={{ flex: 1, marginTop: -1 }}>
                            <View style={{ backgroundColor: GlobalBackgroundColors.primaryColor }}>
                                <View style={[globalShadowBox, { width: '70%', marginLeft: 'auto', marginRight: 'auto', padding: 20, backgroundColor: GlobalBackgroundColors.ternaryColor, borderTopEndRadius: 30, borderTopLeftRadius: 30 }]}>
                                    <Destination cities={cities1} modalVisible={ArrivalTerminalModal} modalVisibleChange={ArrivalTerminalModalHandler} searchValue={ArrivalTerminal} searchValueChange={changeArrivalTerminal} finalHandler={arrivalFinal} Selected={ArrivalSelected} title="Arrival Terminal"></Destination>
                                </View>
                            </View>
                            <View style={{ backgroundColor: GlobalBackgroundColors.ternaryColor, marginTop: -1 }}>
                                <View style={[globalShadowBox, { elevation: 1, width: '70%', marginLeft: 'auto', marginRight: 'auto', padding: 20, backgroundColor: GlobalBackgroundColors.ternaryColor }]}>
                                    <Destination cities={cities1} modalVisible={DestinationTerminalModal} modalVisibleChange={DestinationTerminalModalHandler} searchValue={DestinationTerminal} searchValueChange={changeDestinationTerminal} finalHandler={destinationFinal} Selected={DestinationSelected} title="Destination Terminal" ></Destination>
                                </View>
                            </View>
                            <View style={{ marginTop: 10 }}></View>
                            <View>
                                <DatePicker DateSchedule={DateSchedule1} selected={DateData} onPress={changeDateData} />
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate("BookingBusesScreen", { ArrivalSelected, DestinationSelected, DateData, person, DateSchedule1 })} disabled={disable} style={[primaryButton, { marginTop: 10, marginBottom: 10, backgroundColor: disableColor }]} ><Text style={{ color: GlobalBackgroundTextColors.secondaryColor, textAlign: 'center' }}>Find Bus</Text></TouchableOpacity>
                        </View>
                        {/* Slider */}
                        <View style={{ height: 180, paddingBottom: 30 }}>
                            <Carousele person={person} pendingBooking1={pendingBooking1} PhoneNumber={person.PhoneNumber} navigation={navigation} onPress={navigation}></Carousele>
                        </View>
                    </ScrollView>

                </SimpleContainer>
                :
                <Wait />
            }
        </View>
    );
}
export default BookingDestination;