// React Native Imports
import React from 'react';
// Navigation Related Imports
import { createStackNavigator } from '@react-navigation/stack';
// Screens Imports
import HomeScreen from '../../Screen/Home/Home';

import BookingDestinationScreen from '../../Screen/Booking/BookingDestination';
import BookingBusesScreen from '../../Screen/Booking/BookingBuses';
import BookingBusSeatsScreen from '../../Screen/Booking/BookingSeats';

import BookingPendingScreen from '../../Screen/Booking/BookingPending';
import TicketDetailScreen from '../../Screen/Ticket/TicketDetail';

import PurchasedTicketScreen from '../../Screen/Ticket/TicketPurchased';
import RefundTicketScreen from '../../Screen/Ticket/TicketPurchasedRefund';

import ComplaintScreen from '../../Screen/Complain/Complain'
// Style
import {GlobalBackgroundColors, GlobalBackgroundTextColors} from '../../Styles/global';

const Stack = createStackNavigator();
function HomeStack(props) {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: GlobalBackgroundColors.primaryColor,
            },
            headerTintColor: GlobalBackgroundTextColors.primaryColor,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} initialParams={{ person: props.person }} />
            <Stack.Screen name="BookingDestinationScreen" component={BookingDestinationScreen} />
            <Stack.Screen name="BookingBusesScreen" component={BookingBusesScreen} />
            <Stack.Screen name="BookingBusSeatsScreen" component={BookingBusSeatsScreen} />
            <Stack.Screen name="BookingPendingScreen" component={BookingPendingScreen} />
            <Stack.Screen name="TicketDetailScreen" component={TicketDetailScreen} />
            <Stack.Screen name="PurchasedTicketScreen" component={PurchasedTicketScreen} />
            <Stack.Screen name="RefundTicketScreen" component={RefundTicketScreen} />
            <Stack.Screen name="ComplaintScreen" component={ComplaintScreen} />
        </Stack.Navigator>
    );
}
export default HomeStack;