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
        <View>
            <View style={styles.item1} >
                <Text style={{
                    height: 60,
                    width: 393,
                    top: 10,
                    left: -2,
                    fontSize: 18,
                    color: "#000000",
                    textAlign: "center",
                    position: "absolute",
                }}>
                    Current User: Logan Humphrey
                </Text>
            </View>

            <View style={styles.item2} >
                <Text style={{
                    height: 60,
                    width: 393,
                    top: 25,
                    left: 3,
                    fontSize: 18,
                    color: "#000000",

                    position: "absolute",
                }}>
                    Current Schedule: Spring 2023
                </Text>
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
        top: 75,
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
        top: 100,
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
    darkBackground: {
        flex: 1,
        backgroundColor: "#5d5d5d",
    },
    lightBackground: {
        flex: 1,
        backgroundColor: "white",
    },
})
