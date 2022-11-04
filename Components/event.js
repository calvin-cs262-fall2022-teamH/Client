import React, { useState } from 'react';
import {Text, View, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../shared/global'



export default function Event({ navigation }) {
    const [details, setDetails] = useState([
        {
            title: "CS-108",
            start: "9:30", end: "10:20", summary: "SB 223"
        },
        {
            title: "MATH-171",
            start: "11:00", end: "11:50", summary: "NH 159"
        },
        {
            title: "ENGL-101",
            start: "12:00", end: "12:50", summary: "CFAC 242"
        },
        {
            title: "REL-121",
            start: "2:00", end: "2:50", summary: "HH 133"
        },
        {
            title: "CS-195",
            start: "3:00", end: "3:50", summary: "SB 010"

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
                        {item.start}
                        <Text> - </Text>
                        {item.end}
                        <Text>  </Text>
                        ({item.summary})

                    </Text>
                </TouchableOpacity>
            )} />
        </View>
    )
}


