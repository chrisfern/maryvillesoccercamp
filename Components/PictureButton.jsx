import React from 'react';
import { View, Text,TouchableOpacity,Image,StyleSheet } from 'react-native';

const PictureButton = (props) => {
    
    return (
        <View style={styles.container}>
            <Image style={styles.pictureContainer} source={props.uri} resizeMode='contain'/>  
                        
            <TouchableOpacity style={styles.touch}>
                <Text style={styles.text}>
                    {props.text}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default PictureButton


const styles=StyleSheet.create({
   
    container: {
      
    },
    pictureContainer: {
        width: undefined,
         height: 350,
        

    },
    touch: {
        
        backgroundColor: 'lightgrey',
        marginHorizontal: 15,
        borderRadius: 10,
        height: '10%',
        justifyContent: 'center',
        borderWidth: 2
        
    },
    
    text: {
        alignSelf: 'center',
        fontWeight: "bold",
        fontSize: 12,
        textAlign: 'center'
    }

})

