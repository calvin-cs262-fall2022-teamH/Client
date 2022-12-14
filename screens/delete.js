import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const NavigateToHome = (props) => {
    props.navigation.navigate("Schedule");
};

const DeleteScreen = props => {
    return (
        <View style={styles.deleteBackground}>
            <View style={styles.square}>
                <Text style={styles.Title}>Are you sure you want to delete PHIL- 205?</Text>
                <TouchableOpacity onPress={() => NavigateToHome(props)}>
                    <View style={styles.circle}>
                        <Text style={styles.buttonTitle}>Delete</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => NavigateToHome(props)}>
                <Text style={styles.buttonTitle}>Cancel</Text>
            </TouchableOpacity>
        </View>
    );
}

export default DeleteScreen;

const styles = StyleSheet.create({
    deleteBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    square: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        margin: 25,
    },
    circle: {
        backgroundColor: '#ffa500',
        padding: 10,
        borderRadius: 50,
        margin: 25,
    },
    buttonTitle: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
    },
    Title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000a',
        textAlign: 'center',
        marginHorizontal: 50,
    }
});