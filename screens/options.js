import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation';

const NavigateToEdit = props => {
    props.navigation.navigate('Edit')
}
const NavigateToSilence = props => {
    props.navigation.navigate('Silence')
}
const NavigateToDelete = props => {
    props.navigation.navigate('Delete')
}

const Options = props => {
    return (
        <View style={styles}>
            <Text style={styles.classTitle}>Math-255</Text>
            <TouchableOpacity onPress={() => NavigateToEdit(props)}>
                <View style={styles.square}>
                    <Text style={styles.buttonTitle}>Edit</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => NavigateToSilence(props)}>
                <View style={styles.square}>
                    <Text style={styles.buttonTitle}>Silence</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => NavigateToDelete(props)}>
                <View style={styles.square}>
                    <Text style={styles.buttonTitle}>Delete</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default Options;

const styles = StyleSheet.create({
    classTitle: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#0000ff',
    },
    square: {
        backgroundColor: '#ffa500',
        padding: 15,
        borderRadius: 10,
        margin: 20
    },
    buttonTitle: {
        fontSize: 20,
        color: '#fff',
        alignItems: 'center',
    }
});