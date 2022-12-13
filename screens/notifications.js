import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Dimensions,
    Text
} from "react-native";


let primary = "#F38C00";    //  default primary color     (orange)
let secondary = "#0167AB";    //  default secondary color   (blue)
let bgColor = "white";      //  default background color  (white in LM) (black in DM)
let textColor = "black";      //  default textcolor         (black in LM) (white in DM)
const windowWidth = Dimensions.get('window').width;         //full height of screen
const windowHeight = Dimensions.get('window').height;



export default function NotificationsScreen() {
    const [notif, setNotif] = useState(true);
    return (
        <View style={styles.item1}>
            <Text
                style={styles.title}
            >You currently have no notifications</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item1: {
        backgroundColor: '#FFF',
        height: 54,
        width: 380,
        paddig: 15,
        borderRadius: 17,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        left: 3,
        top: 25,
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

    title: {
        height: 30,
        fontSize: 16,
        left: 5
    }
})
