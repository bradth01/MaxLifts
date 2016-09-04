'use strict';

import React, { Component } from 'react';
import {
    TouchableOpacity, 
    Image, 
    Text
} from 'react-native';
import styles from '../styles';

class AddLiftButton extends Component {
    render() {
        return (            
            <TouchableOpacity style={styles.addLiftButton}>
                <Text> Add Lift</Text>
                <Image source={require('../../images/ic_add.png')} />
            </TouchableOpacity>
        );
    }
}

module.exports = AddLiftButton;