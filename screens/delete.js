import { Image, ScrollView, StyleSheet, Switch, Text, View, FlatList, TouchableOpacity, Button, Dimensions } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

const Delete= props => {
    return (
        <View style={styles.deleteBackground}>
            <View style={styles.square}>
                <Text style={styles.Title}>Are you sure you want to delete MATH-255?</Text>
                <TouchableOpacity>
                    <View style={styles.circle}>
                    <Text style={styles.buttonTitle}>Delete</Text>
                    </View>
            </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Text style={styles.buttonTitle}>Cancel</Text>
            </TouchableOpacity>
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
            fontSize: 30,
            fontWeight: 'bold',
            color: '#000a',
            textAlign: 'center',
            marginHorizontal: 50,
        }
      });