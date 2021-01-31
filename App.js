// React Native Imports
import React, { useState,useEffect } from 'react';
import { Text,View,Button } from 'react-native';
// Navigation Related import
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './Navigations/Stacks/HomeStack';
import LoginStack from './Navigations/Stacks/LoginStack';
// Context
import LoginContextProvider from './Context/LoginContext';
// Firebase
import firebase from 'firebase';
import {firebaseConfig} from './config';


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}

export default function App() {

  /*===== Firebase ================================================= */
    const rootReference=firebase.database().ref();

  /*===== Firebase ================================================= */


  /*===== Required Data ============================================= */

  /*===================================== Require Data Ends Here===== */






  /*===== State Data ================================================= */
  let [isSignedIn, setSignedIn] = useState(false);
  /*=========================================State Data Ends Here===== */





  /*===== Function Handlers ========================================== */
  let [Loginperson, setLoginPerson] = useState({});
  const LoginHandler = (person) => {
    if (person != "Logout") {
      setLoginPerson(person);
      setSignedIn(true);
    }
    else {
      setLoginPerson({});
      setSignedIn(false);
    }
  }

  return (
    <LoginContextProvider.Provider value={{ LoginStateHandler: LoginHandler,rootReference:rootReference,firebase:firebase }}>
      <NavigationContainer>
        {isSignedIn ? (<HomeStack person={Loginperson} />) : (<LoginStack />)}
      </NavigationContainer>
    </LoginContextProvider.Provider>
  );
}