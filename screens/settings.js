import { Image, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';


let primary = "#F38C00";       //  default primary color     (orange)
let secondary = "#0167AB";     //  default secondary color   (blue)
let bgColor = "white";         //  default background color  (white in LM) (black in DM)
let textColor = "black";       //  default textcolor         (black in LM) (white in DM)
const windowWidth = Dimensions.get('window').width;         //full height of screen
const windowHeight = Dimensions.get('window').height;
export default function SettingsScreen({ route, navigation }) {
    //State for dark mode switch
    state = {
        isOnBlueToggleSwitch: false
    };
    //Function for togggle
    function onToggle(isOn) { }

    return (


        <View>

            {/*Actual Page*/}
            <View>
                <Image style={{
                    height: 43,
                    width: 43,
                    position: "center",
                    right: windowWidth - 70,
                    top: -3,
                }} source={require('../Icons/settings.png')} />

                <Text
                    style={{ color: '#0167AB', fontFamily: 'Inter', fontSize: 40, fontStyle: 'bold' }}
                >
                    Settings
                </Text>
            </View>
            <View style={styles.item}>
                <View style={styles.itemLeft}>
                    <ToggleSwitch
                        label="Light Mode"
                        onColor="#2196F3"
                        isOn={this.state.isOnBlueToggleSwitch}
                        onToggle={isOnBlueToggleSwitch => {
                            this.setState({ isOnBlueToggleSwitch });
                            this.onToggle(isOnBlueToggleSwitch);
                        }}
                    />
                </View>
            </View>
            <View>
                <Text
                    style={{ color: '000000', fontFamily: 'Inter', fontSize: 30, fontStyle: 'bold' }}
                >
                    Colors:
                </Text>
            </View>
            {/* primary color */}
            <View style={styles.item}>
                <View style={styles.itemLeft}>
                    <TouchableOpacity style={styles.circular1} onPress={() => navigation.navigate('Colors')} ></TouchableOpacity>
                    <Text>Primary Color</Text>
                </View>
            </View>
            {/* secondary color */}
            <View style={styles.item}>
                <View style={styles.itemLeft}>
                    <TouchableOpacity style={styles.circular2} onPress={() => navigation.navigate('Colors')} ></TouchableOpacity>
                    <Text>Secondary Color</Text>
                </View>
            </View>
            {/*event color*/}
            <View style={styles.item}>
                <View style={styles.itemLeft}>
                    <TouchableOpacity style={styles.circular3} onPress={() => navigation.navigate('Colors')}></TouchableOpacity>
                    <Text>Secondary Color</Text>
                </View>
            </View>




        </View>


    )
}
const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        paddig: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    circular1: {
        width: 12,
        height: 12,
        borderColor: 'F38C00',
        borderWidth: 2,
        borderRadius: 5,
    },
    circular2: {
        width: 12,
        height: 12,
        borderColor: '0167AB',
        borderWidth: 2,
        borderRadius: 5,
    },
    circular2: {
        width: 12,
        height: 12,
        borderColor: 'F3F3F3',
        borderWidth: 2,
        borderRadius: 5,
    },

});
