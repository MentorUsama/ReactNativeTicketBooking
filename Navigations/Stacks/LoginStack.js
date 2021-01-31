// React Native Imports
import React from 'react';
// Navigation Related Imports
import { createStackNavigator } from '@react-navigation/stack';
// Screens Imports
import Login from '../../Screen/Login/Login';
import LoginReset from '../../Screen/Login/LoginReset';
import LoginResetNew from '../../Screen/Login/LoginResetNew';
import LoginRegister from '../../Screen/Login/LoginRegister';
import LoginRegisterVerify from '../../Screen/Login/LoginRegisterVerify';
// Style
import {GlobalBackgroundColors, GlobalBackgroundTextColors} from '../../Styles/global';


const Stack = createStackNavigator();
function LoginStack(props)
{
    return(
        <Stack.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: GlobalBackgroundColors.primaryColor,
            },
            headerTintColor: GlobalBackgroundTextColors.primaryColor,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>        
            <Stack.Screen  name="Login" component={Login} options={{ headerShown: false }}/>
            <Stack.Screen  name="LoginReset" component={LoginReset} options={{ title:"" }}/>
            <Stack.Screen  name="LoginResetNew" component={LoginResetNew} options={{ title:"" }}/>
            <Stack.Screen  name="LoginRegister" component={LoginRegister} options={{ title:"" }}/>
            <Stack.Screen  name="LoginRegisterVerify" component={LoginRegisterVerify} options={{ title:"" }}/>
        </Stack.Navigator>
    );
}
export default LoginStack;