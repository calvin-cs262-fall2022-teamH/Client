
import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Switch, Text, View, FlatList, TouchableOpacity } from 'react-native';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { globalStyles } from '../shared/global'

export default function Event({ navigation }) {
    const [details, setDetails] = useState([
        {
            title: "CS-108", startTime: "10:00", endTime: "11:30",
            location: "223 Science Building"
        },
        {
            title: "Eng-220", startTime: "12:00", endTime: "1:00",
            location: "254 Fine Arts Center"
        },
    ]);

    return (
        <View style={globalStyles.eventContainer}>
            <FlatList data={details} renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => navigation.navigate('Edit')} >

                    <Text style={globalStyles.Text}>
                        {item.title}
                    </Text>
                    <Text style={globalStyles.Text}>
                        {item.startTime}
                    </Text>
                    <Text style={globalStyles.Text}>
                        {item.endTime}
                    </Text>
                    <Text style={globalStyles.Text}>
                        {item.location}
                    </Text>
                </TouchableOpacity>
            )} />
        </View>

    )
}