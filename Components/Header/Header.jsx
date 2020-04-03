import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import {Header} from 'react-native-elements';
import MyLeftComponent from './MyLeftComponent';
import MyRightComponent from './MyRightComponent';



const MyHeader = (props) => {

    return (
        <Header 
                containerStyle ={styles.container}
                leftComponent={<MyLeftComponent navigation={props.navigation}/>}
                centerComponent={<Text style={styles.text}>Maryville College</Text>}
              
        />
    )
};



export default MyHeader;

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'maroon',
      alignItems: 'center',
      justifyContent: 'center',
    },
        text: {
            color: 'orange',
            fontFamily: 'Avenir-Oblique',
            fontSize: 24
        }
  });
