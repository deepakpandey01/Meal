import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, FlatList, Button, ScrollView} from 'react-native';
import MEALS from './info';
import { withNavigation} from 'react-navigation';

function Filter({val1, val2, val3, val4, navigation}){
    var Favorites2=[];
    const check=[val1, val2, val3, val4];
    function List(){
        for (var i = 0; i < MEALS.length; i++) {
            var d=0;
            if (check[0] && check[1] && check[2] && check[3]){
                if(MEALS[i].isGlutenFree && MEALS[i].isVegan && MEALS[i].isVegetarian && MEALS[i].isLactoseFree){
                        d=1;
                }
            }
            else if (check[0] && check[1] && check[2]){
                if(MEALS[i].isGlutenFree && MEALS[i].isVegan && MEALS[i].isVegetarian){
                        d=1;
                }
            }
            else if (check[1] && check[2] && check[3]){
                if(MEALS[i].isVegan && MEALS[i].isVegetarian && MEALS[i].isLactoseFree){
                        d=1;
                }
            }
            else if (check[0] && check[2] && check[3]){
                if(MEALS[i].isGlutenFree && MEALS[i].isVegetarian && MEALS[i].isLactoseFree){
                        d=1;
                }
            }
            else if (check[0] && check[1] && check[3]){
                if(MEALS[i].isGlutenFree && MEALS[i].isVegan && MEALS[i].isLactoseFree){
                        d=1;
                }
            }
            else if (check[0] && check[1]){
                if(MEALS[i].isGlutenFree && MEALS[i].isVegan){
                        d=1;
                }
            }
            else if (check[0] && check[2]){
                if(MEALS[i].isGlutenFree && MEALS[i].isVegetarian){
                        d=1;
                }
            }
            else if (check[0] && check[3]){
                if(MEALS[i].isGlutenFree && MEALS[i].isLactoseFree){
                        d=1;
                }
            }
            else if (check[1] && check[2]){
                if(MEALS[i].isVegan && MEALS[i].isVegetarian){
                        d=1;
                }
            }
            else if (check[1] && check[3]){
                if(MEALS[i].isVegan && MEALS[i].isLactoseFree){
                        d=1;
                }
            }
            else if (check[2] && check[3]){
                if(MEALS[i].isVegetarian && MEALS[i].isLactoseFree){
                        d=1;
                }
            }
            else if (check[2]){
                if(MEALS[i].isVegetarian){
                        d=1;
                }
            }
            else if (check[3]){
                if(MEALS[i].isLactoseFree){
                        d=1;
                }
            }
            else if (check[1]){
                if(MEALS[i].isVegan){
                        d=1;
                }
            }
            else if (check[0]){
                if(MEALS[i].isGlutenFree){
                        d=1;
                }
            }
            else{
                Favorites2=MEALS;
            }
        if(d === 1){
        var position;

        position = Favorites2.indexOf(MEALS[i]);

        if (!~position) {
            Favorites2.push(MEALS[i]);
        }
        }
        }
        return 2;
    }

    const m= List();
    return (
        <View style={{ height:"95%",}}>
           <Text style={{marginTop: 10}}></Text>
           <FlatList  
     keyExtractor={friend=> Math.random().toString()}
     data={Favorites2}
     numColumns={2}
     renderItem={({item})=>{
      return <View style={styles.box}>
      <TouchableOpacity onPress={()=> navigation.navigate('Results', {id: item.id})}>
           <View style={styles.img}>
            <Image source = {{uri:item.imageUrl}}
                style = {{ width: "99.9%", height: 170, borderRadius: 30 }}
                /></View>
        <View style={styles.content}>
            <Text style={{color: 'black',fontWeight:'bold',fontSize:15,textDecorationLine: 'underline',
            textAlign: 'center', justifyContent: 'center', alignSelf: 'center' }}>{item.title}</Text>
            </View>
            </TouchableOpacity> 
         </View>
     }}/> 
        </View>
    );
}

const styles=StyleSheet.create({
    box: {
        width: "40%",
        borderWidth: 1.5,
        borderColor: 'gray',
        marginBottom: 40,
        height: 222,
        marginLeft: "5%",
        borderRadius:30,
        marginHorizontal:10,
        alignSelf: 'center',
       // backgroundColor: 'white',
        // marginBottom: 20
    },
    content: {
        alignSelf: 'center',
        textAlign: 'center'
        // flexDirectin: 'column'
    },
    low: {
        // marginBottom: 155,
        flexDirection: 'row',
        backgroundColor:'black',
    },
    img: {
        borderRadius:50,
    }
});

export default withNavigation(Filter);