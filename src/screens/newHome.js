import React, {useState} from 'react';
import {View, Text,TouchableOpacity, Switch, StyleSheet} from 'react-native';
import NewHead from './stack2';
import { withNavigation} from 'react-navigation';
import Filter from './components/filter';
import MEALS from './components/info';
import Filter2 from './components/Add';


function AboutScreen2({navigation}){
        const [isEnabled1, setIsEnabled1] = useState(false);
        const [isEnabled2, setIsEnabled2] = useState(false);
        const [isEnabled3, setIsEnabled3] = useState(false);
        const [isEnabled4, setIsEnabled4] = useState(false);
        const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
        const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
        const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);
        const toggleSwitch4 = () => setIsEnabled4(previousState => !previousState);
        while(Filter2.length > 0) {
                Filter2.pop();
            }
        //     console.log(Filter2);
        function Helper1(){
                Filter2.push(isEnabled1);
                Filter2.push(isEnabled2);
                Filter2.push(isEnabled3);
                Filter2.push(isEnabled4);
                return Filter2;
        }

        var v=Helper1();
        // console.log(v);

        var m='orange';
        return <View>
            {/* <Text style={{marginTop: 30}}>About Screen</Text> */}
            <View style={{flexDirection: 'row', marginTop: 10}}>
                
                <Text> Gluten Free </Text>
                <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled1 ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch1}
                        value={isEnabled1}
                        style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.2 }], marginHorizontal: 10 }}
                />
            
                <Text>Vegan         </Text>
                <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled2 ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch2}
                        value={isEnabled2}
                        style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.2 }], marginHorizontal: 10  }}
                />
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
                <Text> Vegetarian  </Text>
                <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled3 ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch3}
                        value={isEnabled3}
                        style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.2 }], marginHorizontal: 10  }}
                />
            
                <Text>Lactose Free</Text>
                <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled4 ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch4}
                        value={isEnabled4}
                        style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.2 }], marginHorizontal: 10  }}
                />
            </View>
            {/* <Text style ={{marginTop: 40}}>{isEnabled1 ? 'True 1' : 'False 1'} {isEnabled2 ? 'True 2' : 'False 2'} {isEnabled3 ? 'True 3 ' : 'False 3 '} 
              {isEnabled4 ? 'True 4' : 'False 4'}
            </Text> */}
            {/* <Filter val1={isEnabled1} val2={isEnabled2} val3={isEnabled3} val4={isEnabled4} navigation={navigation} /> */}
        </View>
};

export default withNavigation(AboutScreen2);