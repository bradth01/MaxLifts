'use strict';

import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';
import MaxButtons from './maxButtons';
import styles from '../styles';

export default class LiftColumn extends Component {
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
                </View>
            );
        });

        return (
            <View style={styles.liftColumnRows}>{rows}</View>
        );
    }
}
