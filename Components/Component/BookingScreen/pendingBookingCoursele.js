import React from 'react';
import {StyleSheet,Text,TouchableOpacity,Dimensions,View} from 'react-native';
import Carousel from '../../../anchor-coursel/index'; 
// Imporing Data
// Importing Styles
import { GlobalBackgroundColors, GlobalBackgroundTextColors, globalShadowBox, primaryButton } from '../../../Styles/global';




// Global Data
const { width } = Dimensions.get('window');
var data = {};






/**
* props(Departure,Arrival,onPress,Date)
*/
function PendingBookingContainer(props) {
    return (
        <View style={[globalShadowBox, { elevation:4,width: '100%', height: '100%', backgroundColor: GlobalBackgroundColors.ternaryColor, marginTop: 'auto', marginBottom: 'auto', borderTopLeftRadius: 50, borderTopEndRadius: 50, paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10 }]}>
            {/* Departure/Arrival */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15, borderBottomWidth: 2, borderBottomColor: GlobalBackgroundColors.primaryColor }}>
                <Text>{props.Departure}</Text>
                <Text>To</Text>
                <Text>{props.Arrival}</Text>
            </View>
            {/* Book Now */}
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: GlobalBackgroundTextColors.textBoxColor, marginTop: 10 }}>{props.Date}</Text>
                <TouchableOpacity activeOpacity={0.8} style={[primaryButton, { marginTop: 10 }]} onPress={props.onPress}><Text style={{ color: GlobalBackgroundTextColors.secondaryColor,textAlign:'center' }}>Buy Ticket</Text></TouchableOpacity>
            </View>
        </View>
    );
}





/**
 * { PhoneNumber={person.PhoneNumber} navigation={navigation} onPress={navigation}}
 */
function ImageCarousel(props) {
    data = props.pendingBooking1;
    var renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.item}
        onPress={() => {
          numberCarousel.scrollToIndex(index);
        }}
      >
        <PendingBookingContainer Departure={item.Arrival} Arrival={item.Destination} onPress={() => props.navigation.navigate("TicketDetailScreen", { Bus:item,person:props.person })} Date={item.Date} ></PendingBookingContainer>
    </TouchableOpacity>
    );
  };
    var numberCarousel;
    return (
      <Carousel
        style={styles.carouselStyle}
        data={data}
        renderItem={renderItem}
        itemWidth={0.7 * width}
        inActiveOpacity={0.3}
        containerWidth={width - 10}
        ref={(c) => {
          numberCarousel = c;
        }}
      />
    );
}
const styles = StyleSheet.create({
  carouselStyle:{
    flex:1
  },
})
export default ImageCarousel;