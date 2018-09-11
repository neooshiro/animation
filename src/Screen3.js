import React, {Component} from 'react';
import { 
    StyleSheet,
    View, Text, Button
} from 'react-native';

import {EntryA} from './entries/entries1';

class Screen3 extends Component{

    constructor(props){
        super(props);
    }

    render(){
        const listA = EntryA.filter(e => e.id === 0)[0].arrayTeste;
        return( 
            <View style={styles.container}>
                <Text>3</Text>
               
                <Button title="goto1" onPress={() => this.props.navigation.navigate('Screen1')} />


                {listA.map(se => <Text>{se.desc}</Text>)}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
    },
  });


export default Screen3;