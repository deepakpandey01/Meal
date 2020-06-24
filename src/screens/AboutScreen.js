import React, {useState} from 'react';
import {View, Text,Button , Switch, StyleSheet} from 'react-native';
import NewHead from './stack2';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { withNavigation} from 'react-navigation';
import Filter from './components/filter';
import AboutScreen2 from './newHome';
import Header from "./header";

function AboutScreen({navigation}){
        var m='orange';
        return <View>
            <NewHead title="Filter" />
            {/* <Text style={{marginTop: 30}}>About Screen</Text> */}
            <AboutScreen2 />
        </View>
};

const styles = StyleSheet.create({
        container: {
          flex: 1,
          alignItems: "center",
        //   justifyContent: "center",
          flexDirection: "row",
          marginTop: 40
        }
      });

export default AboutScreen;