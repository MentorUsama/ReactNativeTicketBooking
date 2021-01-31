import React, { useState, useContext } from 'react';
import { View, Text, ScrollView } from 'react-native';
// Component
import LoginContainer from '../../Components/Containers/loginContainer';
import GlobalInput from '../../Components/Component/InputComponent';
// Data
import { LoginDetail } from '../../Data/Data';
import ProfileIcon from '../../assets/Images/Icons/propfile';
import PasswordIcon from '../../assets/Images/Icons/password';
// Contex
import LoginContext from '../../Context/LoginContext';
import Wait from '../wait';



function Register({ navigation, route }) {

    /*====== Passed data ====================================== */
    var { persons } = route.params;
    const { LoginStateHandler, rootReference } = useContext(LoginContext);
    /*====== Passed data ====================================== */


    /*====== UseStateData ====================================== */
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const [promise, setPromise] = useState(true);
    /*========================================UseStateData ===== */



    /*===== Important Function ====================================== */
    function checkRegister() {
        if (password.length <= 5) {
            setError("Please enter password atleast greater then 5");
            return;
        }
        if (name.length == 0) {
            setError("Please enter yout name");
            return;
        }
        if (phone.length != 11) {
            setError("Please Enter 11 digit number");
            return;
        }

        var index = persons.findIndex(person => person.PhoneNumber == phone);
        if (index != -1) {
            setError("Number already exist in database.");
            return;
        }


        setPromise(false);
        var tempPerson = [];
        const LoginNode = rootReference.child("PersonDetail");
        LoginNode.once("value").then(datasnap => {
            tempPerson = datasnap.val();
        }).then(readCountTxn => {
            tempPerson = [...tempPerson, { Name: name, Password: password, PhoneNumber: phone }];
            var updateNode = rootReference.child("PersonDetail/");
            updateNode.set(tempPerson).then(readCountTxn => {
                setPromise(true);
                console.log(tempPerson);
                LoginStateHandler(tempPerson);
            });
        })
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
            {promise ?
                <ScrollView>
                    <LoginContainer title="Register" leftBottomText={"Already have account?"} rightBottomText={"Login Here"} rightBottomLink={() => navigation.navigate("Login")} mainButtonText="Verify" mainButtonLink={() => checkRegister()}>
                        <View>
                            <Text style={{ color: 'red', minHeight: 20 }}>{error}</Text>
                            <GlobalInput secure={false} onchange={setPhone} value={phone} placeHolder="Enter The Mobile Number"><ProfileIcon width={15} height={15} /></GlobalInput>
                            <View style={{ marginTop: 15 }}></View>
                            <GlobalInput secure={false} onchange={setName} value={name} placeHolder="Enter Your Name"><ProfileIcon width={15} height={15} /></GlobalInput>
                            <View style={{ marginTop: 15 }}></View>
                            <GlobalInput secure={true} onchange={setPassword} value={password} placeHolder="Enter Password"><PasswordIcon width={15} height={15} /></GlobalInput>
                            <View style={{ marginBottom: 15 }}></View>
                        </View>
                    </LoginContainer>
                </ScrollView>
                :
                <Wait />
            }
        </View>
    );
}
export default Register;