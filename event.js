import React, { useState } from 'react';
import {Text, View, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../shared/global'

export default function Event({ navigation }) {
    const [details, setDetails] = useState([
        {
            title: "CS-108", startTime: "10:00", endTime: "11:30",
            location: "SB 223"
        },
        {
            title: "Eng-220", startTime: "12:00", endTime: "1:00",
            location: "CFAC-254"
        },
    ]);
    return (
        <View style={globalStyles.eventsContainer}>
            <FlatList data={details} renderItem={({ item }) => (
                <TouchableOpacity style={globalStyles.event}
                onPress={() => navigation.navigate('Edit')} >

                    <Text style={globalStyles.eventTitle}>
                        {item.title}
                    </Text>
                    <Text style={globalStyles.eventText}>
                        {item.startTime}
                        <Text> - </Text>
                        {item.endTime}
                    </Text>
                    <Text style={globalStyles.eventText}>
                        <Text>({item.location})</Text>
                    </Text>
                </TouchableOpacity>
            )} />
        </View>
    )
}