import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './Navigator/Navigator';
import { setDetectionImagesAsync, setProvidesAudioData } from 'expo/build/AR';


export default class App extends Component {
  state = {isLoading: true, isError: false, dates: ["","",""]};

  async componentDidMount() {
   async function getDates(){
     return fetch("http://www.maryvillesoccercamp.com").then((response) => response.text());
   }

   function setDates(inputHTML){
    let elite="Elite Camp-";
    let junior="Junior Elite Camp-";
    let girlsCamp="High School Girls Team Camp-";
    
    let updatedates=["","",""];
    let body=inputHTML;

    let startOfElite=body.indexOf(elite)+elite.length;
    let endOfElite=startOfElite;

    do{ 
      endOfElite++  
    }while(body[endOfElite]!='<' && body[endOfElite]!='&')
 //    console.log(body.substring(startOfElite,endOfElite));

    let eliteDate=body.substring(startOfElite,endOfElite);

     let startOfJunior=body.indexOf(junior)+junior.length;
     let endOfJunior=startOfJunior;
     

     do{ 
      endOfJunior++  
     }while(body[endOfJunior]!='<' && body[endOfJunior]!='&')
//         console.log(body.substring(startOfJunior,endOfJunior));

      let juniorDate=body.substring(startOfJunior,endOfJunior);


      let startOfGirlsCamp=body.indexOf(girlsCamp)+girlsCamp.length;
      let endOfGirlsCamp=startOfGirlsCamp;

      do{ 
        endOfGirlsCamp++  
      }while(body[endOfGirlsCamp]!='<' && body[endOfGirlsCamp]!='&')
   //    console.log(body.substring(startOfGirlsCamp,endOfGirlsCamp));

      let girlDate=body.substring(startOfGirlsCamp,endOfGirlsCamp);

    
      return [girlDate,eliteDate,juniorDate];
      
  }

    try {
      
      await getDates().then((inputHTML) => {
      
        updateDate=setDates(inputHTML);
        console.log(updateDate);
        this.setState(prevState => ({
          isLoading: (!prevState.isLoading),
          isError: (!prevState.error),
          dates: updateDate
        }));
       
       });
       
       
    } catch (error) {
       this.setState({ isError: true, isLoading: false });
    }

 }


  render() {
    if (this.state.isLoading) {
      return <Text>Loading...</Text>
   }
    return (
      <Navigator dates={this.state.dates}/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
