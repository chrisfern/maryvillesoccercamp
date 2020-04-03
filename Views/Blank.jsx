import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';


const Blank = (props) => {
    return (
        
            <TouchableOpacity style={{ height: 500, width:500, alignSelf: 'center',alignItems: 'center', justifyContent: 'center',}}onPress={()=> props.navigation.goBack()}>
                 <Text>GO BACK</Text>
            </TouchableOpacity>
       
    )
}

export default Blank
