'use strict';

import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import CategoryColumn from './categoryColumn';
import LiftColumn from './liftColumn';
import Loading from '../miscComponents/loading';
import utils from '../store';
import styles from '../styles';

export default class WorkoutTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        };
        this.deleteLift = this.deleteLift.bind(this);
        this.eventEmitter = this.props.passProps.events;
    }

    componentDidMount() {
        utils.seed()
        // utils.getDbData()
        .then(lifts => {
            if (lifts) {
                this.setState({
                    lifts: lifts,
                    isLoading: false
                });
            } else {
                this.setState({
                    isLoading: false
                });
            }
        });

        this.eventEmitter.on('displayNewLift', () => {
            console.log("DISPLAY NEW LIFT!!!");
        });
    }

    deleteLift(liftName) {
        utils.removeAndUpdate(liftName)
        .then(lifts => {
            this.setState({
                lifts: lifts
            });
        });    
    }

    render() {
        if (this.state.isLoading) {
            return <Loading/>
        }
        return (
            <View style={styles.workoutTable}>
                <View style={styles.workoutTableBody}>
                    <CategoryColumn lifts={this.state.lifts}></CategoryColumn>
                    <LiftColumn
                        lifts={this.state.lifts} 
                        onDelete={this.deleteLift}
                    />
                </View>
            </View>
        );
    }
}  

