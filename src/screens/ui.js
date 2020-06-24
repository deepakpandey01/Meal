import React, {useState ,setState} from 'react';
import {View, Text, Image, StyleSheet, ScrollView,RefreshControl, SafeAreaView} from 'react-native';
import { withNavigation} from 'react-navigation';
import Filter from './components/filter';
import Filter2 from './components/Add';
import Constants from 'expo-constants';

function wait(timeout) {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }

function RenderImage({navigation}){
    const [refreshing, setRefreshing] = React.useState(false);

    function refreshPage() {
      window.location.reload(false);
    }

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
  
      wait(1000).then(() => setRefreshing(false));
    }, [refreshing]);
    return <View>
                {/* <Button title="refresh" onPress={() => setState({dummy: 1})} /> */}
                <SafeAreaView style={styles.container}>

                <ScrollView
                    contentContainerStyle={styles.scrollView}
                    refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh}
                    colors={['transparent']}
                    style={{backgroundColor: 'white'}}
                      progressBackgroundColor='transparent' 
                      tintColor='transparent'
                      />
                    }
                > 
                    <Text style={{color:'gray'}} ></Text>
                    {/* <Filter val1={Filter2[0]} val2={Filter2[1]} val3={Filter2[2]} val4={Filter2[3]} navigation={navigation} />  */}
                  </ScrollView>
                </SafeAreaView>
                 <Filter style={{position: 'absolute', top: 4,}} val1={Filter2[0]} val2={Filter2[1]} val3={Filter2[2]} val4={Filter2[3]} navigation={navigation} />
            </View>
};

const styles = StyleSheet.create({
    container: {
      height: "5%",
      position: 'relative',
      top:8,
      //backgroundColor:'#ffffff'
    },
    scrollView: {
      flex:1,
     //backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    
    },
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
      //backgroundColor:'#e6155a',
  },
  content: {
      alignSelf: 'center',
      textAlign: 'center',
      // flexDirectin: 'column'
  },
  low: {
      marginBottom: 15,
      flexDirection: 'row',
      //backgroundColor:'black',
  },
  img: {
      borderRadius:30,
  }
  });

export default withNavigation(RenderImage);