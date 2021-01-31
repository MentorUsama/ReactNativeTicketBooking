import React, { useState,useContext } from 'react';
import { View, Button, Text, Image, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import Textarea from 'react-native-textarea';
// Importing Components
import ComplainModal from '../../Components/Modals/ComplainModal';
import SimpleContainer from '../../Components/Containers/SimpleContainer';
import Wait from '../wait';
import LoginContext from '../../Context/LoginContext';
// Importing Styles
import { globalShadowBox, GlobalBackgroundColors, GlobalBackgroundTextColors, primaryButton } from '../../Styles/global';





/*================================== Inner Component ======================================================================== */
function Radio(props) {
    var radio_props = [
        { label: 'Suggestion', value: 'Suggestion' },
        { label: 'Complain', value: 'Complain' }
    ];


    return (
        <View style={[globalShadowBox, { width: '70%', backgroundColor: GlobalBackgroundColors.ternaryColor, paddingTop: 20, paddingBottom: 20, marginLeft: 'auto', marginRight: 'auto', marginTop: -45, borderRadius: 10, paddingLeft: 20 }]}>
            <RadioForm formHorizontal={false} animation={true}>
                {
                    radio_props.map((obj, i) => (
                        <RadioButton labelHorizontal={true} key={i} >
                            <RadioButtonInput
                                obj={obj}
                                index={i}
                                isSelected={props.radioData === obj.value}
                                onPress={() => props.changeRadioData(obj.value)}
                                borderWidth={1}

                                buttonSize={15}
                                buttonOuterSize={15}
                                buttonInnerColor={obj.value === props.radioData ? GlobalBackgroundColors.primaryColor : 'white'}
                                buttonOuterColor={GlobalBackgroundTextColors.textBoxColor}

                            />
                            <RadioButtonLabel
                                obj={obj}
                                index={i}
                                labelHorizontal={true}
                                onPress={() => props.changeRadioData(obj.value)}
                                labelStyle={{ fontSize: 15, color: GlobalBackgroundTextColors }}
                                labelWrapStyle={{ marginLeft: 5 }}
                            />
                        </RadioButton>
                    ))
                }
            </RadioForm>
        </View>);
}
/*================================== Inner Cmponent ======================================================================== */





function Complain({ navigation,route }) {

    var {person}=route.params;
    // Context
    const { rootReference} = useContext(LoginContext);
    // Radio related datagoes here
    var [radioData, changeRadioData] = useState('Suggestion');
    // Modal Data goes here
    var [iscomplainVisible, complainVisibleChange] = useState(false);
    // TextInput Data goes here
    var [textInput, changeTextInput] = useState('');
    // Promise
    var [promise, setPromise] = useState(true);
    // Error
    var [error, setError] = useState('');


    // Function goes here
    const ErrorHandler=()=>{
        setError("Please Enter the digit greater then or equal to 10");
    }
    const ComplainDone = () => {
        if (textInput.length <= 10) {
            ErrorHandler();
            return;
        }
        else
        {
            setPromise(false);
            var allComplains=null;
            var complainNode=rootReference.child(radioData);
            complainNode.once("value").then(datasnap => {
                allComplains = datasnap.val();
            }).then(readCountTxn => {
                allComplains=[...allComplains,{PhoneNumber:person.PhoneNumber,Message:textInput}];

                var updateNode = rootReference.child(radioData);
                updateNode.set(allComplains).then(readCountTxn => {
                    setPromise(true);
                    complainVisibleChange(true);
                });
            });
        }
    }

    const messageReceived = () => {
        navigation.navigate("HomeScreen");
    }



    if (promise == true) {
        navigation.setOptions({ headerShown: true });
    }
    else {
        navigation.setOptions({ headerShown: false });
    }


    // Return goes here
    return (
        <View style={{ flex: 1 }}>
            {
                promise ?
                    <SimpleContainer isBottomVisible={true} headerFlexSize={20}>
                        {/* Complain */}
                        <View style={{ display: iscomplainVisible ? 'flex' : 'none' }}><ComplainModal isVisible={iscomplainVisible} ComplainDone={messageReceived} /></View>

                        <Radio radioData={radioData} changeRadioData={changeRadioData} />
                        <View>
                            <Image style={styles.stretch} source={require('../../assets/Images/log.png')} />
                            <Text style={{ marginLeft: 'auto', marginRight: 'auto', fontSize: 15, color: 'red', height: 25 }}>{error}</Text>
                        </View>
                        <View style={[styles.container, globalShadowBox, { shadowColor: "black", backgroundColor: 'white', marginLeft: 'auto', marginRight: 'auto', width: '70%' }]}>
                            <Textarea
                                containerStyle={styles.textareaContainer}
                                style={styles.textarea}
                                onChangeText={changeTextInput}
                                defaultValue={textInput}
                                maxLength={500}
                                placeholder={"Enter The message"}
                                placeholderTextColor={'#c7c7c7'}
                                underlineColorAndroid={'transparent'}
                            />

                        </View>
                        <View style={{ marginTop: 20 }}>
                            <TouchableOpacity style={[primaryButton]} onPress={() => ComplainDone()} >
                                <Text style={{ textAlign: 'center', color: GlobalBackgroundColors.ternaryColor }}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </SimpleContainer>
                    :
                    <Wait />
            }
        </View>


    );
}

const styles = StyleSheet.create({
    stretch: {
        width: 120,
        height: 120,
        marginBottom: 30,
        marginTop: 30,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    textInputStyle: {
        width: '100%',
        height: '100%',
        borderBottomColor: '#B7B7B7',
        borderBottomWidth: 1,
        paddingLeft: 30
    },
    container: {
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textareaContainer: {
        height: 180,
        padding: 5,
        backgroundColor: 'white',
    },
    textarea: {
        textAlignVertical: 'top',  // hack android
        height: 170,
        fontSize: 14,
        color: '#333',
    },
})
export default Complain;