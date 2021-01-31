import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions, Text } from 'react-native';
// Component
import Carousel from '../../../anchor-coursel/index';
// Importing Styles
import { GlobalBackgroundColors, GlobalBackgroundTextColors, globalShadowBox, primaryButton } from '../../../Styles/global';
// Icons
import LeftIcon from '../../../assets/Images/Icons/Left';
import RightIcon from '../../../assets/Images/Icons/Right';




// Global Data
const { width } = Dimensions.get('window');
var data = [];





/*====== Slider Item goes here ================================================================================================== */
/**
 * 
 * {*Day,*Date} props 
 */
function Item(props) {
  return (
    <View style={{ backgroundColor: GlobalBackgroundColors.primaryColor, height: 100, width: 100, alignItems: 'center' }}>
      <View style={{ marginTop: 'auto', marginBottom: 'auto' }}>
        <Text style={{ color: GlobalBackgroundTextColors.primaryColor, textAlign: 'center' }}>{props.Day}</Text>
        <Text style={{ color: GlobalBackgroundTextColors.primaryColor, textAlign: 'center' }}>{props.Date}</Text>
      </View>
    </View>
  );
}
/*===================================================================================================Slider Item goes here ===== */




/**
 *  {*Date,*DateHandler}
 */
function ScheduleDate(props) {

  data=props.DateSchedule;


  var numberCarousel;
  var currentIndex;
  props.DateSchedule.map((item, index) => {
    if (item == props.Date) {
      currentIndex = index;
    }
  })






  /*================== Render Item ===============================*/
  var renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        style={{}}
        onPress={() => pressHandler(index, item)}>
        <Item Date={item} Day={""}></Item>
      </TouchableOpacity>
    );
  };
  /*================== Render Item ================================ */





  /*================== Bus Change Handler Item ===================== */
  var pressHandler = (index, item) => {
    if (index != currentIndex) // Means you want to see the nex detail
    {
      currentIndex = index;
      numberCarousel.scrollToIndex(currentIndex);
    }
    else if (index == currentIndex && props.Date != item)        // Means you need to change the date
    {
      props.DateHandler(item);
      console.log("You have been gone to the bext date");
    }
  }
  var previousHandler = () => {
    if (currentIndex == 0) {
      currentIndex = data.length - 1;
      numberCarousel.scrollToIndex(currentIndex);
    }
    else {
      currentIndex--;
      numberCarousel.scrollToIndex(currentIndex);
    }
  }

  var NextHandler = () => {
    if (currentIndex == (data.length - 1)) {
      currentIndex = 0;
      numberCarousel.scrollToIndex(currentIndex);
    }
    else {
      currentIndex++;
      numberCarousel.scrollToIndex(currentIndex);
    }
  }
  /*================== Bus Change Handler Item ===================== */






  return (
    <View style={[{ flexDirection: 'row', marginLeft: 'auto', marginRight: 'auto' }, globalShadowBox,{shadowOpacity: 0.7}]}>
      <TouchableOpacity onPress={() => previousHandler()} activeOpacity={0.9}>
        <View style={{ backgroundColor: GlobalBackgroundColors.primaryColor, width: 30, height: 100 }}>
          <View style={{ marginTop: 'auto', marginBottom: 'auto', alignItems: 'center' }}>
            <LeftIcon width={20} height={20} />
          </View>
        </View>
      </TouchableOpacity>
      <View style={[globalShadowBox,{ height: 100, backgroundColor: 'white', paddingTop: 10, paddingBottom: 10 }]}>
        <Carousel
          style={styles.carouselStyle}
          data={data}
          renderItem={renderItem}
          itemWidth={width * 0.7}
          inActiveOpacity={0.3}
          containerWidth={width - 60}
          separatorWidth={1}
          ref={(c) => {
            if (c != null) {
              numberCarousel = c;
              c.scrollToIndex(currentIndex);
            }
          }}
        />
      </View>
      <TouchableOpacity onPress={() => NextHandler()} activeOpacity={0.9}>
        <View style={{ backgroundColor: GlobalBackgroundColors.primaryColor, width: 30, height: 100 }}>
          <View style={{marginTop: 'auto', marginBottom: 'auto', alignItems: 'center' }}>
            <RightIcon width={20} height={20} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  carouselStyle: {
  }
})
export default ScheduleDate;