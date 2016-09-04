'use strict';

import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';
import MaxButtons from './maxButtons';
import styles from '../styles';

class LiftColumn extends Component {
    render() {
        let rows = [];
        this.props.lifts.forEach(lift => {
            rows.push(
                <View 
                    style={styles.liftColumn} 
                    key={lift.lift}>
                    <MaxButtons />
                    <Text style={styles.columnBoldText}>{lift.lift}</Text>
                    <Text>{lift.max} X 5</Text>
                    <Text>{lift.drop1} X 6</Text>
                    <Text>{lift.drop2} X 7</Text>
                </View>
            );
        });

        return (
            <View style={styles.liftColumnRows}>{rows}</View>
        );
    }
}

module.exports = LiftColumn;