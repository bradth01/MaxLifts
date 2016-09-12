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
    calculate (liftWeight, percent1, percent2, arr) {
        for (let i = percent1; i < percent2; i++) {
            let temp = Math.round(liftWeight * (i/10), -1);
            if (temp % 5 > 2) {
                temp = Math.ceil(temp/5)*5;
            } else {
                temp = Math.floor(temp/5)*5;
            }
            arr.push(temp);
        }
    } 

    calculateWarmups (liftWeight) {
        let warmups = [];
        this.calculate(liftWeight, 4, 9, warmups);
        return warmups;
    }

    calculateSets2And3 (liftWeight, up) {
        let worksets = [];
        if (up === '1') {
            this.calculate(liftWeight, 8, 10, worksets);
        } else if (up === '2 & 3') {
            liftWeight = liftWeight - 5;
            this.calculate(liftWeight, 8, 10, worksets);
        }
        return worksets;
    }
    
    render() {
        let rows = [];
        if (this.props.lifts) {
            this.props.lifts.forEach(lift => {
                let worksets = this.calculateSets2And3(lift.max, lift.up);
                let warmups = this.calculateWarmups(lift.max);
                rows.push(
                    <View 
                        style={styles.liftColumn} 
                        key={lift.lift}>
                        <MaxButtons 
                            lift={lift.lift}
                            max={lift.max}
                            up={lift.up} 
                            id={lift._id}
                            weightUp={this.props.weightUp}
                            onDelete={this.props.onDelete}
                            onAdd={this.props.onAdd}
                            onSubtract={this.props.onSubtract}
                        />
                        <Text style={styles.columnBoldText}>{lift.lift}:</Text>
                        <Text style={styles.liftColumnText}>Work Set 1: {lift.max} X 5</Text>
                        <Text style={styles.liftColumnText}>Work Set 2: {worksets[1]} X 6</Text>
                        <Text style={styles.liftColumnText}>Work Set 3: {worksets[0]} X 7</Text>
                        <Text style={styles.liftColumnText}>Warmup 1: {warmups[0]} X 10</Text>
                        <Text style={styles.liftColumnText}>Warmup 2: {warmups[1]} X 8</Text>
                        <Text style={styles.liftColumnText}>Warmup 3: {warmups[2]} X 6</Text>
                        <Text style={styles.liftColumnText}>Warmup 4: {warmups[3]} X 4</Text>
                        <Text style={styles.liftColumnText}>Warmup 5: {warmups[4]} X 2</Text>
                        <Text style={styles.liftColumnText}>Increase Work Set(s): {lift.up} Next Workout</Text>
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
