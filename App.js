import { createDrawerNavigator,DrawerItems } from 'react-navigation-drawer';
import {createAppContainer, StackActions} from 'react-navigation';
import AboutScreen from './src/screens/AboutScreen';
// import TabNavigator from './src/screens/bottomTabNavigator.js';
import About from './src/screens/About';
import AboutStack from './src/screens/stack';
import {MaterialCommunityIcons, AntDesign, Entypo} from '@expo/vector-icons';
import React, { useState } from 'react';
import Header from './src/screens/header';
import { StyleSheet, Text, View, FlatList,Button,TouchableOpacity ,Image,Modal} from 'react-native';
import AboutPass from './src/screens/pass';
import {Container,Body,Content} from 'native-base';
/*const [modalOpen,setModalopen]=useState(false);*/

const CustomDrawerContentComponent=(props)=>(
   
  <Container style={{}}>
  
    <View style={{alignSelf:"center",height:250,width:"100%", backgroundColor:"#d11d4c"}}>
        <Image style={{height:180,width:180,borderRadius:100,alignSelf:"center", marginTop:50}} source={{uri:'https://i.dlpng.com/static/png/4674369-food-icon-food-court-icon-png-transparent-png-600x600-free-food-courts-in-malls-png-820_640_preview.png'}}/>
        
        
    </View>

    <Content>
      <DrawerItems {...props}
      />

    </Content>
  </Container>
)

const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: AboutStack,
    navigationOptions: {
      drawerIcon: () => <MaterialCommunityIcons name="home" color='black' size={26} />}
  },
  Filter: {
    screen: AboutScreen,
     navigationOptions: {
      drawerIcon: () => <AntDesign name="filter" color='black' size={26} />
     },
  }, 
   About: {
    screen: AboutPass,
    navigationOptions: {
      drawerIcon: () => <Entypo name="info-with-circle" size={24} color="black" />
      
    },
  },
  
},{
  initialRouteName:'Home',
  contentComponent:CustomDrawerContentComponent,
  drawerOpenRoute:'DrawerOpen',
  drawerCloseRoute:'DrawerClose',
  drawerToggleRoute:'DrawerToogle',
}
);

export default createAppContainer(RootDrawerNavigator);
