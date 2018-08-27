import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import { fadeIn } from 'react-navigation-transitions';

import Screen1 from './Screen1';
import Screen2 from './Screen2';

const RootStack = createStackNavigator(
    {
        Screen1:{screen: Screen1},
        Screen2:{screen: Screen2}
    },
    {
        initialRouteName: 'Screen1',
        transitionConfig: () => fadeIn(1000)
    }
);


export default class NavigatorManager extends Component {
    render(){
        return <RootStack />;
    }
}
