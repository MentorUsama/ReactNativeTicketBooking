import React from 'react';
import { View, Text, Modal, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import SearchIcon from '../../assets/Images/Icons/search';
import CloseIcon from '../../assets/Images/Icons/close';
// TextInput
import Input from '../Component/InputComponent';
import { GlobalBackgroundColors, GlobalBackgroundTextColors, globalShadowBox } from '../../Styles/global';


/**
 * 
 * {searchValue,searchValueChange,modalVisible,modalVisibleChange,finalHandler} props 
 */
function CityModal(props) {
    return (
        <Modal transparent={true} visible={props.modalVisible}>
            <View style={{ width: '100%', flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <View style={[globalShadowBox, { shadowColor: 'black', backgroundColor: 'white', flex: 1, width: '90%', marginLeft: 'auto', marginRight: 'auto', marginTop: 80, marginBottom: 80, borderRadius: 10, padding: 10 }]}>
                    <TouchableOpacity onPress={() => props.modalVisibleChange(false)} style={{ marginTop: 4, marginLeft: 4, marginBottom: 20 }}><View><CloseIcon width={20} height={20} /></View></TouchableOpacity>
                    <View>
                        <Input fullWidth={true} secure={false} onchange={props.searchValueChange} value={props.searchValue} placeHolder="Search" ><SearchIcon width={15} height={15} /></Input>
                    </View>
                    <ScrollView style={{ marginTop: 10, flex: 1 }}>
                        <View>
                            {props.data.map((item) => {
                                if (props.searchValue == '') {
                                    return (<TouchableOpacity style={styles.City} onPress={() => props.finalHandler(item)}><Text>{item}</Text></TouchableOpacity>)
                                }
                                else {
                                    if (item.includes(props.searchValue)) {
                                        return (<TouchableOpacity style={styles.City} onPress={() => props.finalHandler(item)}><Text>{item}</Text></TouchableOpacity>)
                                    }
                                }
                            })}
                        </View>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    City:
    {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 30,
        paddingBottom: 10,
        paddingLeft: 5,
        borderBottomColor: GlobalBackgroundTextColors.textBoxColor,
        borderBottomWidth: 1
    }
})

export default CityModal;