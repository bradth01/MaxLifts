'use strict';

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import WorkoutTable from './src/components/workoutTable/workoutTable';

class MaxLifts extends Component {
    render() {
        return (
            <WorkoutTable lifts={LIFTS}/>
        );
    }
}

var LIFTS = [
    {lift: 'Bench Press', max: 180, drop1: 160, drop2: 140},
    {lift: 'Squat', max: 215, drop1: 195, drop2: 170},
    {lift: 'OHP', max: 125, drop1: 110, drop2: 95}
];

AppRegistry.registerComponent('MaxLifts', () => MaxLifts);
