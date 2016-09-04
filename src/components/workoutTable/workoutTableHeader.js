'use strict';

import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';
import AddLiftButton from './addLiftButton';
import styles from '../styles';

class WorkoutTableHeader extends Component {
    render() {
        return (
            <View style={styles.workoutTableHeader}>
                <View>
                    <Text 
                    style={styles.workoutTableHeaderText}>
                        MY LIFTS
                    </Text>
                </View>    
                <View style={styles.workoutTableHeaderButton}>
                    <AddLiftButton />
                </View>    
            </View>
        );
    }
}

module.exports = WorkoutTableHeader;