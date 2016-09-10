'use strict';

import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView
} from 'react-native';
import MaxButtons from './maxButtons';
import styles from '../styles';

export default class LiftColumn extends Component {
    calculateSets (liftWeight) {
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
                let warmups = this.calculateSets(lift.max);
                rows.push(
                    <View 
                        style={styles.liftColumn} 
                        key={lift.lift}>
                        <MaxButtons 
                            lift={lift.lift}
                            max={lift.max}
                            id={lift._id}
                            weightUp={this.props.weightUp}
                            onDelete={this.props.onDelete}
                            onAdd={this.props.onAdd}
                            onSubtract={this.props.onSubtract} 
                        />
                        <Text style={styles.columnBoldText}>{lift.lift}</Text>
                        <Text>WORK SET 1: {lift.max} X 5</Text>
                        <Text>WORK SET 2: {warmups[5]} X 6</Text>
                        <Text>WORK SET 3: {warmups[4]} X 7</Text>
                        <Text>WARMUP 5: {warmups[4]} X 2</Text>
                        <Text>WARMUP 4: {warmups[3]} X 4</Text>
                        <Text>WARMUP 3: {warmups[2]} X 6</Text>
                        <Text>WARMUP 2: {warmups[1]} X 8</Text>
                        <Text>WARMUP 1: {warmups[0]} X 10</Text>
                    </View>
                );
            });
        }

        if (rows.length) {
            return (
                <ScrollView>{rows}</ScrollView>
            );
        } else {
            return (
                <View style={styles.liftColumn}>
                    <Text>No Lifts Added!</Text>   
                </View>
            );
        }
        
    }
}
