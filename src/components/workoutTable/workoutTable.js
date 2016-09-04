'use strict';

import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';
import CategoryColumn from './categoryColumn';
import LiftColumn from './liftColumn';
import WorkoutTableHeader from './workoutTableHeader';
import styles from '../styles';

class WorkoutTable extends Component {
    render() {
        return (
            <View style={styles.workoutTable}>
                <WorkoutTableHeader />
                <View style={styles.workoutTableBody}>
                    <CategoryColumn></CategoryColumn>
                    <LiftColumn lifts={this.props.lifts} />
                </View>
            </View>
        );
    }
}  

module.exports = WorkoutTable;