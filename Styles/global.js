import React from 'react';
import {StyleSheet} from 'react-native';





// Colors Goes Here
const GlobalBackgroundColors=
{
    primaryColor:"#5641B6", // Blue Color for background
    secondaryColor:"#FB8549", // Orange color for buttons and inner links
    ternaryColor:"#FFFFFF", // White Color
}
const GlobalBackgroundTextColors=
{
    primaryColor:"#FFFFFF", // White color (used over blue one)
    secondaryColor:"#FFFFFF", // White color (over yellow)
    ternaryColor:"black", // black color (used with text box)
    textBoxColor:"#585858" // Text color
}





// Styles goes here
const primaryButton=
{
    backgroundColor:(GlobalBackgroundColors.secondaryColor),
    height:30,
    width:150,
    borderRadius:50,
    textAlign:'center',
    justifyContent:'center',
    color:'white',
    marginLeft:'auto',
    marginRight:'auto',
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 1,
    },
    shadowOpacity: 0.60,
    shadowRadius: 1.61,
    elevation: 2,
}

const globalShadowBox={
    shadowColor: "#B4B4B4",
shadowOffset: {
	width: 0,
	height: 6,
},
shadowOpacity: 0.39,
shadowRadius: 8.30,

elevation: 13,
}


const FontFamily={
    TitleFont:
    {        
        // fontFamily:'Teko',
        fontWeight:'bold',
        fontSize:50,
        letterSpacing:5
    },
    NormalFont:{
        // fontFamily:'RussoOne'
    }
}




export {GlobalBackgroundColors,GlobalBackgroundTextColors,primaryButton,globalShadowBox,FontFamily}