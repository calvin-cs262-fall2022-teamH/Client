import React, { useState } from "react";
import {
    View,
    Dimensions,
    Text
} from "react-native";


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


