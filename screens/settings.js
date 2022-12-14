import React, { useState } from "react";
import {
    Animated,
    Image,
    StyleSheet,
    View,
    TouchableOpacity,
    Dimensions,
    Platform,
    Appearance,
    Switch,
    Button,
    Text
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { useRef } from "react";
import EventCalendar from "react-native-events-calendar";
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import EventRegister from 'react-native-event-listeners';


let primary = "#F38C00";    //  default primary color     (orange)
let secondary = "#0167AB";    //  default secondary color   (blue)
let bgColor = "white";      //  default background color  (white in LM) (black in DM)
let textColor = "black";      //  default textcolor         (black in LM) (white in DM)
const windowWidth = Dimensions.get('window').width;         //full height of screen
const windowHeight = Dimensions.get('window').height;

export default function SettingsScreen({ route, navigation }) {
    const [darkTheme, setDarkTheme] = useState(false);

    return (
        <View style={darkTheme ? styles.darkBackground : styles.lightBackground}>
            <Image style={{
                height: 43,
                width: 43,
                position: "center",
                top: 25,
                left: 168
            }} source={require('../Icons/settings.png')} />
            <Text style={{
                height: 60,
                width: 393,
                top: 80,
                left: -2,
                fontSize: 30,
                fontWeight: "bold",
                color: "#0167AB",
                textAlign: "center",
                position: "absolute",
            }}>
                Settings
            </Text>

            <View style={darkTheme ? styles.item1 : styles.darkitem1}>
                {darkTheme ? (
                    <Text style={darkTheme ? styles.darkText : styles.lightText}>Light Theme</Text>
                ) : (
                    <Text style={darkTheme ? styles.darkText : styles.lightText}>Dark Theme</Text>
                )}
                <Switch
                    value={darkTheme}
                    onValueChange={() => setDarkTheme(!darkTheme)}
                />
            </View>
            <Text style={{
                height: 60,
                width: 393,
                top: 250,
                left: -2,
                fontSize: 25,
                fontWeight: "bold",
                color: "#000000",
                textAlign: "center",
                position: "absolute",
            }}> Colors:
            </Text>
            <Image style={{
                height: 3,
                width: 250,
                position: "center",
                top: 195,
                left: 70
            }} source={require('../Icons/line.png')} />

            <View style={darkTheme ? styles.item2 : styles.darkitem2} >
                <Text
                    style={darkTheme ? styles.darkText : styles.lightText}
                >Primary Color:</Text>
                <TouchableOpacity>
                    <Image style={{
                        height: 35,
                        width: 35,
                        top: 2,
                        right: 10
                    }} source={require('../Icons/blue.png')} />
                </TouchableOpacity>
            </View>
            <View style={darkTheme ? styles.item3 : styles.darkitem3} >
                <Text
                    style={darkTheme ? styles.darkText : styles.lightText}
                >Secondary Color:</Text>
                <TouchableOpacity>
                    <Image style={{
                        height: 35,
                        width: 35,
                        top: 2,
                        right: 10
                    }} source={require('../Icons/orange.png')} />
                </TouchableOpacity>
            </View>
            <View style={darkTheme ? styles.item4 : styles.darkitem4} >
                <Text
                    style={darkTheme ? styles.darkText : styles.lightText}
                >Event Color:</Text>
                <TouchableOpacity>
                    <Image style={{
                        height: 35,
                        width: 35,
                        top: 2,
                        right: 10
                    }} source={require('../Icons/grey.png')} />
                </TouchableOpacity>
            </View>
            <View style={darkTheme ? styles.item5 : styles.darkitem5} >
                <TouchableOpacity onPress={() => navigation.navigate('About')}>
                    <Text
                        style={darkTheme ? styles.darkAbText : styles.lightAbText}
                    >About Page</Text>
                </TouchableOpacity>
            </View>

        </View>


    )
}

const styles = StyleSheet.create({
    item1: {
        backgroundColor: '#FFF',
        height: 54,
        width: 358,
        paddig: 15,
        borderRadius: 17,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        left: 15,
        top: 125,
    },
    darkitem1: {
        backgroundColor: '#5d5d5d',
        height: 54,
        width: 358,
        paddig: 15,
        borderRadius: 17,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        left: 15,
        top: 125,
    },
    item2: {
        backgroundColor: '#FFF',
        height: 54,
        width: 358,
        paddig: 15,
        borderRadius: 17,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        left: 15,
        top: 220,
    },
    darkitem2: {
        backgroundColor: '#5d5d5d',
        height: 54,
        width: 358,
        paddig: 15,
        borderRadius: 17,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        left: 15,
        top: 220,
    },
    item3: {
        backgroundColor: '#FFF',
        height: 54,
        width: 358,
        paddig: 15,
        borderRadius: 17,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        left: 15,
        top: 250,
    },
    darkitem3: {
        backgroundColor: '#5d5d5d',
        height: 54,
        width: 358,
        paddig: 15,
        borderRadius: 17,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        left: 15,
        top: 250,
    },
    item4: {
        backgroundColor: '#FFF',
        height: 54,
        width: 358,
        paddig: 15,
        borderRadius: 17,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        left: 15,
        top: 275,
    },
    darkitem4: {
        backgroundColor: '#5d5d5d',
        height: 54,
        width: 358,
        paddig: 15,
        borderRadius: 17,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        left: 15,
        top: 275,
    },
    item5: {
        backgroundColor: '#FFF',
        height: 54,
        width: 358,
        paddig: 15,
        borderRadius: 17,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        left: 15,
        top: 300,
    },
    darkitem5: {
        backgroundColor: '#5d5d5d',
        height: 54,
        width: 358,
        paddig: 15,
        borderRadius: 17,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        left: 15,
        top: 300,
    },
    darkText: {
        color: "black",
        height: 30,
        fontSize: 20,
        left: 5
    },
    lightText: {
        color: "white",
        height: 30,
        fontSize: 20,
        left: 5
    },
    darkAbText: {
        color: "black",
        height: 30,
        fontSize: 20,
        left: 5,
        position: 'center'
    },
    lightAbText: {
        color: "white",
        height: 30,
        fontSize: 20,
        left: 5,
        position: 'center'
    },
    darkBackground: {
        flex: 1,
        backgroundColor: "#5d5d5d",
    },
    lightBackground: {
        flex: 1,
        backgroundColor: "white",
    },
})
