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
            this.setState({
                lifts: lifts,
                isLoading: false
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
                    <CategoryColumn length={this.state.lifts.length}></CategoryColumn>
                    <LiftColumn lifts={this.state.lifts} />
                </View>
            </View>
        );
    }
}  

