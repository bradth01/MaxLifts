'use strict';

import React, { Component } from 'react';
import {
    Text,
    View
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
    }

    componentDidMount() {
        // utils.seed()
        utils.getDbData()
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
    }

    refreshState() {
        utils.getDbData()
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
                        onChangeData={this.refreshState}
                    />
                </View>
            </View>
        );
    }
}  

