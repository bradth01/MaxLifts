'use strict';

import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';
import styles from '../styles';

export default class CategoryColumn extends Component {
    render() {
        if (this.props.lifts) {
            return (
                <View style={styles.categoryColumn}>
                    <View style={{
                        height: 53 
                    }} />                
                    <Text style={styles.columnBoldText}>Work</Text>
                </View>
            );
        } else {
            return null;
        }
    }
}
