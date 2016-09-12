'use strict';

import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    AlertIOS
} from 'react-native';
import EventEmitter from 'events';
import styles from '../styles';
import utils from '../store.js';

export default class AddLiftScene extends Component {
    constructor(props) {
        super(props);
        this.liftObject = {
            lift: undefined,
            max: undefined,
            up: '1'
        };
        this.eventEmitter = this.props.passProps.events;
    }

    componentDidMount() {
        this.eventEmitter.on('saveLift', () => {
            this.saveLift(this.liftObject);
        });
    }

    saveLift(liftObject) {
        if (liftObject.lift && liftObject.max && !(liftObject.max % 5)) {
            utils.addToDb(liftObject)
            .then(() => {
                this.eventEmitter.emit('displayNewLift');
            })
            .then(() => {
                this.liftObject = {
                    lift: undefined,
                    max: undefined
                };
            })
            .then(() => {
                this.props.navigator.pop();
            });
        }
        else {
            AlertIOS.alert(
                'Please enter a valid Name and Weight (in multiples of 5 lbs).',
                null,
                {text: 'Ok'}
            );
        }
    }

    render() {
        return (
            <View style={styles.addLiftBody}>
                <View style={styles.addLiftRow}>
                    <Text style={styles.addLiftText}>Lift</Text>
                    <TextInput 
                        placeholder="Enter name of lift"
                        style={styles.addLiftInput}
                        onChangeText={text => this.liftObject.lift = text}
                    />
                </View>
                <View style={styles.addLiftRow}>
                    <Text style={styles.addLiftText}>Work Set</Text>
                    <TextInput 
                        style={styles.addLiftInput}
                        placeholder="Enter starting work weight"
                        keyboardType='numeric'
                        onChangeText={text => this.liftObject.max = parseInt(text)}
                    />
                </View>
            </View>
        );
    }
}
