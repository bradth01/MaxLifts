'use strict';

import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import LiftColumn from './liftColumn';
import Loading from '../miscComponents/loading';
import utils from '../store';
import styles from '../styles';

export default class WorkoutTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            weightUp: 5
        };
        this.deleteLift = this.deleteLift.bind(this);
        this.increaseMax = this.increaseMax.bind(this);
        this.increaseMax = this.increaseMax.bind(this);
        this.decreaseMax = this.decreaseMax.bind(this);
        this.eventEmitter = this.props.passProps.events;
    }

    liftUpdate (lifts) {
        this.setState({
            lifts: lifts
        });
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
                    isLoading: false,
                });
            }
        });

        this.eventEmitter.on('displayNewLift', () => {
            this.addLiftUpdate();       
        });
    }

    addLiftUpdate() {
        utils.getDbData()
        .then(lifts => this.liftUpdate(lifts))
    }

    deleteLift(liftName) {
        utils.removeAndUpdate(liftName)
        .then(lifts => this.liftUpdate(lifts));    
    }

    increaseMax(liftName, max, weightUp, up) {
        utils.increaseMax(liftName, max, weightUp, up)
        .then(lifts => this.liftUpdate(lifts));
    }

    decreaseMax(liftName, max, weightUp) {
        utils.decreaseMax(liftName, max, weightUp)
        .then(lifts => this.liftUpdate(lifts));
    }

    render() {
        if (this.state.isLoading) {
            return <Loading/>
        }
        return (
            <View style={styles.workoutTable}>
                <View style={styles.workoutTableBody}>
                    <LiftColumn
                        weightUp={this.state.weightUp}
                        lifts={this.state.lifts} 
                        onDelete={this.deleteLift}
                        onAdd={this.increaseMax}
                        onSubtract={this.decreaseMax}
                    />
                </View>
            </View>
        );
    }
}  

