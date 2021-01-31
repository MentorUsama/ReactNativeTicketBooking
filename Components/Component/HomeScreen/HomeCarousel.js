import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  View
} from 'react-native';
import Carousel from '../../../anchor-coursel/index';


/**
 * {heightFlex,widthSubtract,carouselStyle
 *  *data,*renderItem}
 */
const { width } = Dimensions.get('window');



const data = [
  { url: require("../../../assets/Images/Buses/Image1.jpg") },
  { url: require("../../../assets/Images/Buses/Image2.jpg") },
  { url: require("../../../assets/Images/Buses/Image3.jpg") },
];
function ImageCarousel() {

  var renderItem = ({ item, index }) => {
    const { url } = item;
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.item}
        onPress={() => {
          numberCarousel.scrollToIndex(index);
        }}
      >

       <View style={{ width: '100%', height: '100%' }}><Image style={{ width: '100%', height: '100%' }} source={url} /></View> 
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
      pagingEnable={true}
      ref={(c) => {
        numberCarousel = c;
      }}
    />
  );
}




const styles = StyleSheet.create({
  carouselStyle: {
    flex: 0.7
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
export default ImageCarousel;