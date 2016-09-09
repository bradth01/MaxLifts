'use strict';

import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';
import MaxButtons from './maxButtons';
import styles from '../styles';

export default class LiftColumn extends Component {
    calculateLift (liftWeight) {
    let warmups = [];
    for (let i = 4; i < 10; i++) {
        let temp = Math.round(liftWeight * (i/10), -1);
        if (temp % 5 > 2) {
            temp = Math.ceil(temp/5)*5;
        } else {
            temp = Math.floor(temp/5)*5;
        }
        warmups.push(temp);
    }
    return warmups;
    }
    
    render() {
        let rows = [];
        if (this.props.lifts) {
            this.props.lifts.forEach(lift => {
                let warmups = this.calculateLift(lift.max);
                rows.push(
                    <View 
                        style={styles.liftColumn} 
                        key={lift.lift}>
                        <MaxButtons 
                            lift={lift.lift} 
                            onDelete={this.props.onDelete}
                        />
                        <Text style={styles.columnBoldText}>{lift.lift}</Text>
                        <Text>{lift.max} X 5</Text>
                        <Text>{warmups[5]} X 6</Text>
                        <Text>{warmups[4]} X 7</Text>
                        <Text>{warmups[4]} X 2</Text>
                        <Text>{warmups[3]} X 4</Text>
                        <Text>{warmups[2]} X 6</Text>
                        <Text>{warmups[1]} X 8</Text>
                        <Text>{warmups[0]} X 10</Text>
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
