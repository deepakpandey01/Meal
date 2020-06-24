import React from 'react';
import {View, FlatList, Text, StyleSheet, ScrollView} from 'react-native';
import MEALS from './info';
import Variable from '../recipes';

function Item1({navigation}){
    var c=1,i=1;
    const m= navigation.getParam('id');
    // var m={props.id};
    return <ScrollView >
            <Text style={{marginLeft: 12, marginTop: 15, fontSize:30, fontWeight: 'bold',alignSelf:'center',textDecorationLine: 'underline'}}>Items Required</Text>
              <View style={{
                    // minWidth: '20%',
                    // maxWidth: 500,
                    // minHeight: "22ht: '12%',
                    // maxHeig%",
                }}>  
          <FlatList 
                keyExtractor={friend=> Math.random().toString()}
                data={MEALS[m].ingredients}
               
                renderItem={({item})=>{
                return <View style={{marginTop: 5, marginLeft: 10}}>
                    <View>
                    <Text style={{fontSize:15,fontWeight:'bold'}}> >  {item}</Text>
                        </View>
                </View>
            }}/>  
            </View> 
            <View >
        <Text style={{margin: 17, fontSize: 30, fontWeight: 'bold', alignSelf: 'center',textDecorationLine: 'underline'}}>Recipe</Text>
        <View style={styles.low}>
             <FlatList 
                keyExtractor={friend=> Math.random().toString()}
                data={MEALS[m].steps}
               
                renderItem={({item})=>{
                return <View style={{marginBottom: 10, borderWidth: 2,borderColor:'black', padding: 6}}>
                    <View>
                    <Text style={{fontSize:20}} >Step-{item}</Text>

                        </View>
                </View>
            }}/>  
            </View>  
            </View>
    </ScrollView>
};
const styles=StyleSheet.create({
    low: {
        margin: 8,
        // maxHeight:"45%",
        // backgroundColor:'gray'
        // marginBottom: 100
    },

})

export default Item1;