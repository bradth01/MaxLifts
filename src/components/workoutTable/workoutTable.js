'use strict';

import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';
import CategoryColumn from './categoryColumn';
import LiftColumn from './liftColumn';
import styles from '../styles';

export default class WorkoutTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.workoutTable}>
                <View style={styles.workoutTableBody}>
                    <CategoryColumn></CategoryColumn>
                    <LiftColumn lifts={LIFTS} />
                </View>
            </View>
        );
    }
}  

var LIFTS = [
    {lift: 'Bench Press', max: 180, drop1: 160, drop2: 140},
    {lift: 'Squat', max: 215, drop1: 195, drop2: 170},
    {lift: 'OHP', max: 125, drop1: 110, drop2: 95}
];

