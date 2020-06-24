import { createStackNavigator } from 'react-navigation-stack';
import {View, Alert, Text,TouchableOpacity, StyleSheet, Button} from 'react-native';
import Header from "./header";
import Show from './recipes';
import Item1 from './components/require';
import Nav from './tab';
import MEALS from './components/info';
import {withNavigation} from 'react-navigation';
import Categ from './components/array';
import React from 'react';
import ReHeader from './components/ReHeading';
import { NavigationContainer } from '@react-navigation/native';
import {Entypo} from '@expo/vector-icons';
import Favorites1 from './components/favoriteslist';

var m=-1;
function Find({navigation, title}){
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
    var d=MEALS[m].title;
    i=1;
    function List(myVal){
        var position;

    position = Favorites1.indexOf(myVal);

    if (!~position) {
        Favorites1.push(myVal);
    }
    const showAlert = () =>{
      Alert.alert(
         'Added to favorites',
         `${d}`,
         [
          { text: "OK",}
         ],
         { cancelable: false }
      )
   }
   showAlert();
    }


  return <View style={{flexDirection: 'row', }}>
          <Entypo name="star-outlined" style={{left: -1}} onPress={() => List(MEALS[m])} color='black' size={26} />
  </View>
}

const AboutStack = createStackNavigator({
  Home: {
    screen : Nav,
    navigationOptions: ({navigation}) => {
      return { headerTitle: () => <Header navigation={navigation} title="Meals"/>
    }}
  },
  Results: {
    screen: Show,
    navigationOptions: ({navigation}) => {
      return {
      headerTitle: () => <ReHeader navigation={navigation} title="Meals" />,
       headerRight: () => <Find navigation={navigation} />
    
    }
  }
  },
  Recipe: {
    screen: Item1,
  },
  Categories: {
    screen: Categ,
  },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#d11d4c',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        // fontWeight: 'bold',
        fontSize: 22,
      },
    },
  }
  );


export default withNavigation(AboutStack);