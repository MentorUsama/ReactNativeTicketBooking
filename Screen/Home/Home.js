import React, { useContext } from 'react';
import { View, Button, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
// Importing styles
import { GlobalBackgroundColors, GlobalBackgroundTextColors, globalShadowBox } from '../../Styles/global';
// Importing components
import HomeButtom from '../../Components/Component/HomeScreen/HomeButtonComponent';
import Icon from 'react-native-vector-icons/Ionicons';
import BookBusIcon from '../../assets/Images/HomeLogo/safety-seat';
import BookingIcon from '../../assets/Images/HomeLogo/cart';
import TicketsIcon from '../../assets/Images/HomeLogo/tickets';
import RefundIcon from '../../assets/Images/HomeLogo/refund';
import ComplaintIcon from '../../assets/Images/HomeLogo/complaint';
import ProfileIcon from '../../assets/Images/profile';

// Importing Container
import SimpleContainer from '../../Components/Containers/SimpleContainer';
// Contex
import LoginContext from '../../Context/LoginContext';



// Faltu
import Carousele from '../../Components/Component/HomeScreen/HomeCarousel';

function Slider() {
    return (
        <View style={{ height: '80%', marginTop: 'auto', marginBottom: 'auto' }}>
            <Carousele></Carousele>
        </View>
    );
}



function Home({ route, navigation }) {

    /*===== Getting the passed data====================================================*/
    let { person } = route.params;
    const { LoginStateHandler } = useContext(LoginContext);
    /*===== Getting the passed data====================================================*/





    return (
        <View style={{ flex: 1 }}>

            <SimpleContainer isBottomVisible={true} headerContent={<Slider></Slider>} BottomLeftText={person.Name} bottomRightLink={() => LoginStateHandler("Logout")} BottomRightText="Logout">
                {/* Profile */}
                <View style={[globalShadowBox, styles.userInfoContainer]}>
                    {/* Profile Person Detail */}
                    <View style={{ flex: 1, paddingTop: 10, paddingBottom: 10, flexDirection: 'row' }}>
                        <View style={{ marginRight: 10 }}><ProfileIcon /></View>
                        <View>
                            <Text style={{ textAlign: 'center', color: GlobalBackgroundTextColors.textBoxColor }}>{person.Name}</Text>
                            <Text style={{ textAlign: 'center', color: GlobalBackgroundTextColors.textBoxColor }}>{person.PhoneNumber}</Text>
                        </View>
                    </View>
                </View>
                {/* Options */}
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.menueContinerStyle}>
                        <HomeButtom onPress={() => navigation.navigate("BookingDestinationScreen", { person })} iconName="ios-lock" title="Book Seat">
                            <View style={{ marginLeft: 'auto', marginRight: 'auto' }}><BookBusIcon /></View>
                        </HomeButtom>
                        <HomeButtom onPress={() => navigation.navigate("BookingPendingScreen", { person })} iconName="ios-lock" title="My Booking">
                            <View style={{ marginLeft: 'auto', marginRight: 'auto' }}><BookingIcon /></View>
                        </HomeButtom>
                    </View>
                    <View style={styles.menueContinerStyle}>
                        <HomeButtom onPress={() => navigation.navigate("PurchasedTicketScreen", { person })} iconName="ios-lock" title="My Ticket">
                            <View style={{ marginLeft: 'auto', marginRight: 'auto' }}><TicketsIcon /></View>
                        </HomeButtom>
                    </View>
                    <View style={styles.menueContinerStyle}>
                        <HomeButtom onPress={() => navigation.navigate("PurchasedTicketScreen", { person })} iconName="ios-lock" title="Refund">
                            <View style={{ marginLeft: 'auto', marginRight: 'auto' }}><RefundIcon /></View>
                        </HomeButtom>
                        <HomeButtom onPress={() => navigation.navigate("ComplaintScreen", { person })} iconName="ios-lock" title="Complain">
                            <View style={{ marginLeft: 'auto', marginRight: 'auto' }}><ComplaintIcon /></View>
                        </HomeButtom>
                    </View>
                </ScrollView>
            </SimpleContainer>
        </View>
    );
}






const styles = StyleSheet.create({
    userInfoContainer:
    {
        backgroundColor: GlobalBackgroundColors.ternaryColor,
        width: '90%',
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: -30,
        paddingLeft: 10,
        borderBottomColor: GlobalBackgroundColors.primaryColor,
        borderBottomWidth: 5,
        borderTopLeftRadius: 30,
        borderTopEndRadius: 30
    },
    menueContinerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15,
    },
    bottomLink: {
        color: GlobalBackgroundColors.secondaryColor,
        fontWeight: 'bold'
    },








    item: {
        borderWidth: 2,
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        borderColor: 'white',
        elevation: 3
    },
    imageBackground: {
        flex: 2,
        backgroundColor: '#EBEBEB',
        borderWidth: 5,
        borderColor: 'white'
    },
    rightTextContainer: {
        marginLeft: 'auto',
        marginRight: -2,
        backgroundColor: 'rgba(49, 49, 51,0.5)',
        padding: 3,
        marginTop: 3,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    rightText: { color: 'white' },
    lowerContainer: {
        flex: 1,
        margin: 10
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 18
    },
    contentText: {
        fontSize: 12
    }
})
export default Home;