'use strict';

import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';
import styles from '../styles';
import utils from '../store.js';

export default class AddLiftScene extends Component {
    constructor(props) {
        super(props);
        this.liftObject = {
            lift: undefined,
            max: undefined
        };
    }

    saveLift(liftObject) {
        if (this.liftObject.lift && this.liftObject.max) {
            utils.addToDb(liftObject);
            console.log(this.state);
        }
        else {
            //placeholder error
            console.log('incomplete lift object');
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
                        onChangeText={text => {this.liftObject.lift = text;
                            console.log(this.liftObject);
                            }
                        }
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
                <View style={styles.addLiftRow}>
                    <TouchableOpacity
                        style={styles.maxUpButton}
                        onPress={() => this.saveLift(this.liftObject)}
                    >
                        <Text style={styles.addLiftText}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
