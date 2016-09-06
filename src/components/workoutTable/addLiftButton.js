'use strict';

import React, { Component } from 'react';
import {
    TouchableOpacity, 
    Image, 
    Text
} from 'react-native';
import styles from '../styles';

const addLiftButton = require('../../images/ic_add.png');

class AddLiftButton extends Component {
    render() {
        return (            
            <TouchableOpacity style={styles.addLiftButton}>
                <Text> Add Lift</Text>
                <Image source={addLiftButton} />
            </TouchableOpacity>
        );
    }
}

module.exports = AddLiftButton;