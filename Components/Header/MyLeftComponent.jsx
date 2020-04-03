import React, { Component } from 'react'
import { View, Text,StyleSheet ,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import ModalWrapper from 'react-native-modal-wrapper';
import Modal from 'react-native-modal';
import Menu from './Menu';



class MyLeftComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false
        };
    }

    handlePress= ()=> {
        this.setState(()=>{
            return {modalOpen: !this.state.modalOpen}
        });
    }


  render(){
   
    return (
        <View style={styles.container}>
            <ModalWrapper
                    containerStyle={{ flexDirection: 'row', justifyContent: 'flex-start', }}
                    onRequestClose={() => this.handlePress()}
                    position="left"
                    style={styles.sidebar}
                    visible={this.state.modalOpen}>
                        <Menu navigation={this.props.navigation}/>
            </ModalWrapper>
            <TouchableOpacity style={{ justifyContent: 'center'}} onPress={()=>this.handlePress()}>
                <Icon  name='bars' color='white' size={25}/>
            </TouchableOpacity>
          
  
        </View>
    )
  }
}

export default MyLeftComponent;



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        alignItems: 'stretch'
    },
 
  });