import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {withNavigation} from 'react-navigation';

function NewHead({navigation, title}) {
    return (
        <View style={{ width: "100%", alignItems: 'center', height: 80, flexDirection: 'row',
        backgroundColor:"#d11d4c", paddingTop: 20, borderBottomWidth: 1, borderColor: 'gray'}} >
            <Ionicons name="ios-menu" size={45} style={{left: 12}}
            onPress={() => navigation.openDrawer()}  />
            <Text style={{marginLeft: "32%", fontSize: 28}}>{title}</Text>
        </View>
    )
};

export default withNavigation(NewHead);