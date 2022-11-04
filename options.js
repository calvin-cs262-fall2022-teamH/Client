import { Image, ScrollView, StyleSheet, Switch, Text, View, FlatList, TouchableOpacity, Button, Dimensions } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

const NavigateToEdit = props => {
    props.navigation.navigate('Edit')
}
const NavigateToSilence = props => {
    props.navigation.navigate('Silence')
}
const NavigateToDelete = props => {
    props.navigation.navigate('Delete')
}

const windowWidth = Dimensions.get('window').width;         //full height of screen
const windowHeight = Dimensions.get('window').height;       //full width of screen

const Options= props => {
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

            {/* workAround logo / home button */}
                <Image style={{
                    height: 60,
                    width: 60,
                    position: "absolute",
                    top: 50,
                    right: 170
                    
                }} source={require('../Icons/Edit.png')} />
        </View>
    );
  }
  
export default Options;

const styles = StyleSheet.create({
    classTitle: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#0000ff',
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        marginTop: 100,
        textAlign: 'center',
    },
    square: {
        backgroundColor: '#ffa500',
        padding: 15,
        borderRadius: 10,
        margin: 25,
    },
    buttonTitle: {
        fontSize: 30,
        color: '#fff',
        textAlign: 'center',
    }
  });