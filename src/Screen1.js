import React, {Component} from 'react';
import { 
    StyleSheet,
    View, Text, Button,
    Animated, Easing, Image,
    KeyboardAvoidingView
} from 'react-native';

import FloatingLabel from './components/FloatingLabel'

class Screen1 extends Component{

    componentDidMount(){
        this.spin();
    }

    constructor(){
        super();
        this.spinValue = new Animated.Value(0);
    }

    render(){
        const spin = this.spinValue.interpolate({
            inputRange: [0,1],
            outputRange: ['0deg','360deg']
        })

        return(
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <View style={styles.container}>
                <Text>1</Text>
                <Animated.Image
                    style={{
                        width: 200,
                        height: 200,
                        transform: [{rotate: spin}]
                    }} 
                    source ={require('./img/wealth-icon.png')}
                />

                <Button title="goto2" onPress={() => this.props.navigation.navigate('Screen2')} />


                <FloatingLabel label={'a label'} />
                
            </View>
            </KeyboardAvoidingView>
        );
    }

    spin() {
        this.spinValue.setValue(0)
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 4000,
                easing: Easing.linear
            }
        ).start(()=>this.spin())
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
    },
  });


export default Screen1;