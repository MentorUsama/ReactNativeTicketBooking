import React from 'react';
import { View, Button, Text, Modal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
// importing syles
import { globalShadowBox, GlobalBackgroundColors, GlobalBackgroundTextColors } from '../../Styles/global'

function ComplainModal(props) {
    return (
        <Modal transparent={true} visible={props.isVisible}>
            <View style={{ width: '100%', flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <View style={[globalShadowBox, { height: 200, backgroundColor: 'white', width: '80%', marginLeft: 'auto', marginRight: 'auto', padding: 10 }]}>
                        <Text style={{ marginTop: 10, marginBottom: 10, color: GlobalBackgroundTextColors.textBoxColor }}>Your suggestion/complaint has been submitted. We will try to act on it as soon as possible.</Text>
                        <Button title="OK" activeOpacity={0.1} onPress={() => props.ComplainDone()} ></Button>
                    </View>
                    <View>

                    </View>
                </View>
            </View>
        </Modal>
    );
}
export default ComplainModal;