'use strict';

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import NavBar from './src/components/workoutNavBar/navBar.js';

class MaxLifts extends Component {
    render() {
        return (
            <NavBar />
        );
    }
}

AppRegistry.registerComponent('MaxLifts', () => MaxLifts);
