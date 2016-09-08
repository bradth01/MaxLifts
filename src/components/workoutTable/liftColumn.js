'use strict';

import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';
import MaxButtons from './maxButtons';
import styles from '../styles';

export default class LiftColumn extends Component {
    componentDidMount() {
        console.log('1st child', this.props);
    }

    render() {
        let rows = [];
        if (this.props.lifts) {
            this.props.lifts.forEach(lift => {
                rows.push(
                    <View 
                        style={styles.liftColumn} 
                        key={lift.lift}>
                        <MaxButtons 
                            lift={lift.lift} 
                            onChangeData={this.props.onChangeData}
                        />
                        <Text style={styles.columnBoldText}>{lift.lift}</Text>
                        <Text>{lift.max} X 5</Text>
                    </View>
                );
            });
        }

        if (rows.length) {
            return (
                <View style={styles.liftColumnRows}>{rows}</View>
            );
        } else {
            return (
                <Text>No Lifts Added!</Text>   
            );
        }
        
    }
}
