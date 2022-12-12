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

export default function AboutScreen() {
    const [darkTheme, setDarkTheme] = useState(false);

    return (
        <View style={darkTheme ? styles.darkBackground : styles.lightBackground}>
            <Text style={{
                height: 60,
                width: 393,
                top: 80,
                left: -2,
                fontSize: 20,
                fontWeight: "bold",
                color: "#0167AB",
                textAlign: "center",
                position: "absolute",
            }}>
                Welcome to WorkAround!
            </Text>
            <Text
                style={{
                    height: 60,
                    width: 393,
                    top: 150,
                    left: -2,
                    fontSize: 10,
                    color: "#000000",
                    textAlign: "center",
                    position: "absolute",
                }}
            >
                WorkAround is dedicated to make your Calvin Journey
            </Text>
            <Text
                style={{
                    height: 60,
                    width: 393,
                    top: 165,
                    left: -2,
                    fontSize: 10,
                    color: "#000000",
                    textAlign: "center",
                    position: "absolute",
                }}
            >
                easier. Through our app you can view your Calvin
            </Text>
            <Text
                style={{
                    height: 60,
                    width: 393,
                    top: 180,
                    left: -2,
                    fontSize: 10,
                    color: "#000000",
                    textAlign: "center",
                    position: "absolute",
                }}
            >
                schedule, and edit or add events without changing your schedule on Workday.
            </Text>
            <Text style={{
                height: 60,
                width: 393,
                top: 250,
                left: -2,
                fontSize: 20,
                fontWeight: "bold",
                color: "#0167AB",
                textAlign: "center",
                position: "absolute",
            }}>
                FAQs
            </Text>

            <Text style={{
                height: 60,
                width: 393,
                top: 300,
                left: -2,
                fontSize: 12,
                fontWeight: "bold",
                color: "#000000",
                textAlign: "center",
                position: "absolute",
            }}>
                1. How can I delete or silence a specific class?
            </Text>
            <Text style={{
                height: 60,
                width: 393,
                top: 330,
                left: 4,
                fontSize: 12,
                position: "absolute",

            }}>
                - Click on the text of the event block of the class.
            </Text>
            <Text style={{
                height: 60,
                width: 393,
                top: 350,
                left: 4,
                fontSize: 12,
                position: "absolute",
                padding: 5,
            }}>
                - This should take you to the edit page.
            </Text>
            <Text style={{
                height: 60,
                width: 393,
                top: 370,
                left: 4,
                fontSize: 12,
                position: "absolute",
                padding: 5,
            }}>
                - To silence the class, click on the struck bell icon
            </Text>
            <Text style={{
                height: 60,
                width: 393,
                top: 390,
                left: 4,
                fontSize: 12,
                position: "absolute",
                padding: 5,
            }}>
                - To delete the class, click on the  trash can icon
            </Text>

            <Text style={{
                height: 60,
                width: 393,
                top: 450,
                left: -2,
                fontSize: 12,
                fontWeight: "bold",
                color: "#000000",
                textAlign: "center",
                position: "absolute",
            }}>
                2. How can I edit the information about an event?
            </Text>
            <Text style={{
                height: 60,
                width: 393,
                top: 475,
                left: 4,
                fontSize: 12,
                position: "absolute",

            }}>
                - Click on the text of the event block of the class.
            </Text>
            <Text style={{
                height: 60,
                width: 393,
                top: 490,
                left: 4,
                fontSize: 12,
                position: "absolute",
                padding: 5,
            }}>
                - This should take you to the edit page.
            </Text>


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
