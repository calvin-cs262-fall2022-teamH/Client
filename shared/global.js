import { StyleSheet } from 'react-native';

let primary   = "#F38C00";    //  default primary color     (orange)
let secondary = "#0167AB";    //  default secondary color   (blue)
let bgColor   = "white";      //  default background color  (white in LM) (black in DM)
let textColor = "black";      //  default textcolor         (black in LM) (white in DM)

export const globalStyles = StyleSheet.create({
    texts: {
        fontSize: 60,
        fontWeight: 'bold',
        color: textColor,
    },
    eventTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: textColor,
        textAlign: 'center',
    },
    eventText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: textColor,
        paddingLeft: 30,
    },
    event: {
        backgroundColor: primary,
    },

    pages: {
        margin: 0,
        padding: 0,
        backgroundColor: 'FFF',
        borderRadius: 10,
        flexDirection: 'row',
        align: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },

});