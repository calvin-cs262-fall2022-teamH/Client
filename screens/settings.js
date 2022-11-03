import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { globalStyles } from '../styles/global';

export default function SettingsScreen({ route, navigation }) {

    return (
        <View style={globalStyles.container}>
            <Text>Settings page</Text>
        </View>
    );
}