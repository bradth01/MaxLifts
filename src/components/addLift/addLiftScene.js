'use strict';

import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';
import styles from '../styles';

export default class AddLiftScene extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.addLiftBody}>
                <View style={styles.addLiftRow}>
                    <Text style={styles.addLiftText}>Lift</Text>
                    <TextInput 
                        placeholder="Enter name of lift"
                        style={styles.addLiftInput}
                    />
                </View>
                <View style={styles.addLiftRow}>
                    <Text style={styles.addLiftText}>Work Set</Text>
                    <TextInput 
                        style={styles.addLiftInput}
                        placeholder="Enter starting work weight"
                    />
                </View>
            </View>
        );
    }
}
