import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image, CheckBox, TouchableHighlight, Button, ScrollView} from 'react-native';
import MEALS from './components/info';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';
import Favorites1 from './components/favoriteslist';

var m=-1;
function Show({navigation}){
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
    i=1;

    function List(myVal){
        var position;

    position = Favorites1.indexOf(myVal);

    if (!~position) {
        Favorites1.push(myVal);
    }
    }
    
    return <View ><Text></Text>
            <Image source = {{uri: MEALS[m].imageUrl}}
                style = {{width:'84%', height: 260, borderRadius: 10, alignSelf: 'center' }}
                />
                <View style={{flexDirection: 'row'}}>
                <View style={styles.lew,{ marginLeft: '8%', flexDirection: 'row'}}>
            <FontAwesome name='dollar' size={20} style={{top: 4}} />
            <Text style={{fontSize:20}}> {MEALS[m].affordability}</Text>
            </View>
            <View style={styles.low,{
                //  right: '-32%',
                position: 'absolute',
                right: '8.5%',
                  flexDirection: 'row', justifyContent: 'center', alignSelf:'center'}}>
                <Ionicons name='ios-timer' size={20} style={{top: 4}} />
            <Text style={{fontSize:20}}> {MEALS[m].duration} minutes</Text>
            </View>
            </View>
              <ScrollView> 
            <View style={styles.lew}>
                <Text style={{fontSize:25}}>Complexity  </Text>
            <AntDesign name='arrowright' size={40} />
            <Text style={{fontSize:25}}> {MEALS[m].complexity}</Text>
            </View>
            
            
            <View style = {styles.lineStyle} />
            <View style={{ flexDirection: 'row', marginLeft: 10}}>
            {/* <View style={{ flexDirection: 'row', marginLeft: 10, backgroundColor:'white'}}> */}
            <CheckBox style={{height:55,width:50}} title='Gluten free' value={MEALS[m].isGlutenFree ? true : false}  />
            <Text style={{marginTop:8, fontSize: 25}}> Gluten Free</Text>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 10}}>
            <CheckBox style={{height:55,width:50}} title='Vegan' value={MEALS[m].isVegan ? true : false}  />
            <Text style={{marginTop: 8, fontSize:25}}> Vegan</Text>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 10}}>
            <CheckBox style={{height:55,width:50}} title='Vegetarian' value={MEALS[m].isVegetarian ? true : false}  />
            <Text style={{marginTop: 8, fontSize: 25}}> Vegetarian</Text>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 10}}>
            <CheckBox style={{height:55,width:50}} title='Lactose free' value={MEALS[m].isLactoseFree ? true : false}  />
            <Text style={{marginTop: 8, fontSize: 25}}> Lactose Free</Text>
            </View>
            <View  style={{width:500,height:400,alignSelf: 'center'}}>
            <TouchableHighlight
                style={styles.openButton}
                onPress={() => navigation.navigate('Recipe', {id: m})}
            >
                <View style={{flexDirection:'row', marginLeft: '30%'}}>
                <Text style={styles.textStyle}>Recipe</Text>
                <AntDesign name='arrowright' size={30} color='white' />
                </View>
            </TouchableHighlight>
</View>
</ScrollView> 
    </View>
};
const styles = StyleSheet.create({
    lineStyle:{
          borderWidth: 1,
          borderColor:'white',
        //   margin:10,
          marginBottom: 5
     },
     low:{
        flexDirection: 'row',
        marginVertical:10
     },
     textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        alignSelf: 'center',
        justifyContent: 'space-evenly',
        fontSize: 22,
        marginRight: 8
      },
     lew:{
        flexDirection: 'row',
        marginVertical:10

     },
     les:{
        flexDirection: 'row',

     },
     openButton: {
        backgroundColor: "green",
        width: '50%',
        marginLeft: '25%',
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
   });

function Variable(){
    return m;
};

export default Show;Variable;