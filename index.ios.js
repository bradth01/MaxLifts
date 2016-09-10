'use strict';

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import NavBar from './src/components/workoutNavBar/navBar.js';
import EStyleSheet from 'react-native-extended-stylesheet';

class MaxLifts extends Component {
    render() {
        return (
            <NavBar />
        );
    }
}

EStyleSheet.build();

AppRegistry.registerComponent('MaxLifts', () => MaxLifts);
