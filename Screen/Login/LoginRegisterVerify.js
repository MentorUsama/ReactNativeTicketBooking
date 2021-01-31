import React, { useContext, useState } from 'react';
import { View, Button, Text, TextInput, StyleSheet } from 'react-native';
import ion from 'react-native-vector-icons/Ionicons';
// Component
import LoginContainer from '../../Components/Containers/loginContainer';
import GlobalInput from '../../Components/Component/InputComponent';
// Contex
import LoginContext from '../../Context/LoginContext';
// Data
import { LoginDetail } from '../../Data/Data';
import ProfileIcon from '../../assets/Images/Icons/propfile';
import PasswordIcon from '../../assets/Images/Icons/password';



function LoginRegisterVerify({ route, navigation }) {
    const { LoginStateHandler } = useContext(LoginContext);


    /*====== UseStateData ====================================== */
    const [pin, setPin] = useState("");
    const [error, setError] = useState("");
    /*========================================UseStateData ===== */



    /*===== Important Function ====================================== */
    // When the login button is pressed then this button is clicked
    function checkPin() {

        if (pin == 1) // Match (Temprary value)
        {
            var { phone, password, name } = route.params;
            LoginStateHandler({ Name: name, PhoneNumber: phone, Password: password });
        }
        else {
            setError("Invalid User Name or Password");
        }
    }
    /*===== Important Function ====================================== */



    return (
        <LoginContainer title="Register" leftBottomText={"Already have account?"} rightBottomText={"Login Here"} rightBottomLink={() => navigation.navigate("Login")} mainButtonText="Register" mainButtonLink={() => checkPin()}>
            <View>
                <Text style={{ color: 'red', minHeight: 20 }}>{error}</Text>
                <GlobalInput secure={false} onchange={setPin} value={pin} placeHolder="Enter The Pin"><PasswordIcon width={15} height={15} /></GlobalInput>
            </View>
        </LoginContainer>
    );
}
export default LoginRegisterVerify;