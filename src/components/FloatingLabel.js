import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';

import PropType from 'prop-types';

export default class FloatingLabel extends Component {

    static propType = {
        label: PropType.string.isRequired,
        style: PropType.array
    }

    constructor(props){
        super(props);
        this.state={
            focusInput: false,
        }
    }

    render(){
        const {label,props} = this.props;
        const {focusInput} = this.state;
        const labelStyle = {
            position: 'absolute',
            left: 0,
            top: focusInput ? 0 : 20,
        }
        return(
            
            <View>
            <Text style={{}}>{label}</Text>
            <TextInput />
            </View>
        );
    }

}