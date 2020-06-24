import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {withNavigation} from 'react-navigation';
import MEAls from './info';
import MEALS from './info';
import HSNZ from 'react-native-hsnz-marquee'
var m=-1;
function ReHeader({navigation, title}) {
    const id= navigation.getParam('id');
  var i= -1;
    var c=2;
    function Helper(id){
        for (i = 0; i < MEALS.length; i++) {
            // console.log(i);
            if (MEALS[i].id === id) {
                // console.log(i);
                return i;
            }
        }
        return i;
    };
    m=Helper(id);
    return (<View style={styles.container}>
        <HSNZ style={styles.container}
    loop = {-1}
    direction={"rtl"}
    autoPlay = {true}
    speed={15}
    >
        <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 20, alignItems: 'center', justifyContent: 'center'}}>{MEALS[m].title}</Text>
        </View></HSNZ></View>
    )
};

const styles=StyleSheet.create({
    icon: {
        // position: 'absolute',
        left: 8,
        // top: 25,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        fontSize:20,height:150,width:330,fontWeight:"bold"
      },
});

export default withNavigation(ReHeader);