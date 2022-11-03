import { Image, ScrollView, StyleSheet, Switch, Text, View, FlatList, TouchableOpacity, Button, Dimensions } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

const Delete= props => {
    return (
        <View style={styles.deleteBackground}>
            <View style={styles.square}>
                <Text style={styles.buttonTitle}>Are you sure you want to delete MATH-255?</Text>
            </View>
        </View>
        );
    }

    export default Delete;

    const styles = StyleSheet.create({
        deleteBackground : {
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center',
        },
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
            backgroundColor: '#fff',
            padding: 15,
            borderRadius: 10,
            margin: 25,
        },
        buttonTitle: {
            fontSize: 30,
            color: '#000a',
            textAlign: 'center',
        }
      });