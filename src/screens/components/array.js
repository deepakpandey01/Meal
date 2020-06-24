import React from 'react';
import {View, Text,TouchableOpacity, StyleSheet, FlatList, Image} from 'react-native';
// import Header from './header';
import { withNavigation} from 'react-navigation';
import MEALS from './info';

function Categ({navigation}){
    const cat= navigation.getParam('id');
    var i=0;
    var m=0;
    var j=0;
    var c=2;
    var list=[];
    function Helper(id){
        for (i = 0; i < MEALS.length; i++) {
            var op=MEALS[i].categoryIds;
            for(j=0;j<op.length;j++){
                if (op[j] === cat) {
                    list.push(MEALS[i]);
                //     break;
                }
            }
        }
        return list;
    };
    m=Helper(cat);
    // console.log(m);
    return <View style={{ height: "100%", justifyContent: 'center'}}>
           <Text style={{marginTop: 30}}></Text>
           <FlatList  
     keyExtractor={friend=> Math.random().toString()}
     data={list}
     numColumns={c}
     renderItem={({item})=>{
      return <View style={styles.box}>
      <TouchableOpacity onPress={()=> navigation.navigate('Results', {id: item.id})}>
           <View style={styles.img}>
            <Image source = {{uri:item.imageUrl}}
                style = {{ width: "99.9%", height: 170, borderRadius: 10 }}
                /></View>
        <View style={styles.content}>
            <Text style={{color: 'black',fontWeight:'bold',fontSize:15,textDecorationLine: 'underline',
            textAlign: 'center', justifyContent: 'center', alignSelf: 'center' }}>{item.title}</Text>
            </View>
            </TouchableOpacity> 
         </View>
     }}/> 
        </View>
};

const styles=StyleSheet.create({
    box: {
        width: "40%",
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 80,
        height: 220,
        marginLeft: "5%",
        borderRadius:10,
        marginHorizontal:10,
        alignSelf: 'center',
        // backgroundColor: '#FF9999'
    },
    content: {
        alignSelf: 'center',
        textAlign: 'center'
        // flexDirectin: 'column'
    },
    low: {
        marginBottom: 155,
        flexDirection: 'row',
        backgroundColor:'black',
    },
    img: {
        borderRadius:10,
    }
});

export default Categ;