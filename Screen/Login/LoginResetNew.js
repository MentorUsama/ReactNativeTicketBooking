import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ion from 'react-native-vector-icons/Ionicons';
// Component
import LoginContainer from '../../Components/Containers/loginContainer';
import GlobalInput from '../../Components/Component/InputComponent';
// Contex
import LoginContext from '../../Context/LoginContext';
// Data
import { LoginDetail } from '../../Data/Data';
// Styles
import { GlobalBackgroundTextColors } from '../../Styles/global';
import ProfileIcon from '../../assets/Images/Icons/propfile';
import PasswordIcon from '../../assets/Images/Icons/password';
import Wait from '../wait';



function LoginResetNew({ route, navigation }) {

    /*====== Passed data ====================================== */
    const { LoginStateHandler,rootReference } = useContext(LoginContext);
    var { persons, phone, personIndex } = route.params;
    /*====== Passed data ====================================== */


    /*====== UseStateData ====================================== */
    var [pin, setPin] = useState("");
    var [password, setPassword] = useState("");
    var [error, setError] = useState("");
    var [promise, setPromise] = useState(true);
    /*========================================UseStateData ===== */



    /*===== Important Function ====================================== */
    // When the login button is pressed then this button is clicked
    function checkReset() {
        if (pin == 1) {

            if(password.length<=5)
            {
                setError("Please enter password atleast greater then 5");
                return;
            }


            setPromise(false);
            var tempPerson=persons[personIndex];
            tempPerson.Password=password;

            var updateNode = rootReference.child("PersonDetail/"+personIndex);
            updateNode.set(tempPerson).then(readCountTxn => {
                    setPromise(true);
                    LoginStateHandler(tempPerson);
                });
        }
        else {
            setError("Invalid Pin (Temprary is 1)");
        }
    }
    /*===== Important Function ====================================== */

    
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
                    <LoginContainer title="Reset Password" leftBottomText={"Remember Password?"} rightBottomText={"Login here"} rightBottomLink={() => navigation.navigate("Login")} mainButtonText="Reset" mainButtonLink={() => checkReset()}>
                        <View>
                            <Text style={{ color: 'red', minHeight: 20 }}>{error}</Text>
                            <GlobalInput secure={false} onchange={setPin} value={pin} placeHolder="Enter the Pin (Temp:1)"><ProfileIcon width={15} height={15} /></GlobalInput>
                            <View style={{ marginTop: 20 }}></View>
                            <GlobalInput secure={true} onchange={setPassword} value={password} placeHolder="New Password"><PasswordIcon width={15} height={15} /></GlobalInput>
                            <TouchableOpacity style={{ marginTop: 10, marginBottom: 30 }} activeOpacity={0.9} onPress={() => navigation.navigate("LoginReset")}><Text style={{ textAlign: "right", color: GlobalBackgroundTextColors.ternaryColor, fontSize: 10 }}>Try Again</Text></TouchableOpacity>
                        </View>
                    </LoginContainer>
                    :
                    <Wait />
            }
        </View>
    );
}
export default LoginResetNew;