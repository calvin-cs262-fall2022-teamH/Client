import React, { useState } from 'react';
import {Text, View, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../shared/global'



export default function Event({ navigation }) {
    const [details, setDetails] = useState([
        {
            title: "CS-108",
            startTime: "9:30", endTime: "10:20", location: "SB 223"
        },
        {
            title: "MATH-171",
            startTime: "11:00", endTime: "11:50", location: "NH 159"
        },
        {
            title: "ENGL-101",
            startTime: "12:00", endTime: "12:50", location: "CFAC 242"
        },
        {
            title: "REL-121",
            startTime: "2:00", endTime: "2:50", location: "HH 133"
        },
        {
            title: "CS-195",
            startTime: "3:00", endTime: "3:50", location: "SB 010"
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
                        <Text>  </Text>
                        ({item.location})
                    </Text>
                </TouchableOpacity>
            )} />
        </View>
    )
}

